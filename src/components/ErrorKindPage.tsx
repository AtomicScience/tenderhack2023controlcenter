import { Title, Paper, Flex, Stack, Textarea, Button, Group, Select, Skeleton } from '@mantine/core';
import { ErrorOccurenes } from './ErrorOccurenes';
import { IconChevronLeft } from '@tabler/icons-react';
import { FANCY_STATUS_NAMES, StatusBadge } from './StatusBadge';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorInstancesTable } from './ErrorInstancesTable';
import { ERROR_STATUSES, ErrorStatus } from '../models/error';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useState, useRef } from 'react'
import { notifications } from '@mantine/notifications';
import { requestError, requestErrorMessage, setErrorMessage, setErrorStatus, requestMailing } from '../api';

export enum MailingGroups {
  ALL, ACTIVE, POTENTIAL, AFFECTED
}

const FANCY_GROUPES_NAMES = {
  [MailingGroups.ALL]: 'Все пользователи', 
  [MailingGroups.ACTIVE]: 'Активные пользователи', 
  [MailingGroups.POTENTIAL]: 'Потенциально затронутые пользователи', 
  [MailingGroups.AFFECTED]: 'Точно затронутые пользователи'
}

const mailingList = {
  [MailingGroups.ALL]: [
    'goncharkv@gmail.com',
    'romka_s@inbox.ru',
    'a.kostenko32@gmail.com',
    'shnobel-@mail.ru'
  ],
  [MailingGroups.ACTIVE]: [
    'blinov.egor2011@yandex.ru'
  ],
  [MailingGroups.POTENTIAL]: [],
  [MailingGroups.AFFECTED]: []
}
const mailingTitle = 'Портал Поставщиков - Сбой разрешен'

export const ErrorKindPage = () => {
  const { errorId } = useParams();
  const navigate = useNavigate();
  const messageRef = useRef<HTMLTextAreaElement>();

  const [mailingForm, setMailingForm] = useState<{ chosenMailingUsers: MailingGroups, mailingText: string }>({
    mailingText: "Ошибка с которой вы столкнулись исправлена",
    chosenMailingUsers: MailingGroups.ALL
  });

  const handleMailing = () => {
    requestMailing({ error_uid: errorId || '', title: mailingTitle, recipients: mailingList[mailingForm.chosenMailingUsers], text: mailingForm.mailingText })
  }
  const { isLoading, data: error } = useQuery(
    ["errorKind", errorId], 
    () => requestError(errorId ?? ""),
    { keepPreviousData: true },
  );

  const {
    data: message,
  } = useQuery(["message", errorId], () => requestErrorMessage(errorId ?? ""), {
    keepPreviousData: true,
    onSuccess: (result) => {
      if (!messageRef.current) return;
      messageRef.current.value = result;
    }
  });

  const client = useQueryClient();
  const setStatus = useMutation({
    mutationFn: (newStatus: ErrorStatus) => {
      return setErrorStatus(errorId!, newStatus);
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["errors"] });
      client.invalidateQueries({ queryKey: ["errorKind"] });
      notifications.show({
        title: "Успех!",
        message: "Статус успешно обновлен",
        color: "green",
      });
    }
  })

  const setMessage = useMutation({
    mutationFn: (message: string) => {
      return setErrorMessage(errorId!, message);
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["message"] });
      notifications.show({
        title: "Успех!",
        message: "Сообщение успешно установлено",
        color: "green",
      });
    },
  });
  
  return (
    <Paper p="md">
      <Stack gap="md">
        <Group align="flex-start" justify="space-between">
          <Button
            c="black"
            variant="transparent"
            onClick={() => navigate(-1)}
            size="compact-md"
          >
            <IconChevronLeft size="1rem" className="inline" />
            Назад
          </Button>
          <Skeleton visible={isLoading} display="inline" width="fit-content">
            <StatusBadge status={error?.status ?? "resolved"} />
          </Skeleton>
        </Group>

        <Flex
          wrap="wrap-reverse"
          gap="sm"
          align="flex-end"
          justify="space-between"
        >
          <Stack gap="sm" className="flex-shrink">
            <Skeleton visible={isLoading}>
              <Title order={1} fw={600} className="!text-2xl">
                {error?.title ?? "MOCK DATA"}
              </Title>
            </Skeleton>
            <ErrorOccurenes
              isLoading={isLoading}
              logs_count_total={error?.logs_count_total}
              date={error?.date}
              logs_count_last_24h={error?.logs_count_last_24h}
              logs_count_last_3d={error?.logs_count_last_3d}
              logs_count_last_1mo={error?.logs_count_last_1mo}
            />
          </Stack>
        </Flex>

        <Skeleton visible={isLoading}>
          <Select
            label="Статус ошибки"
            description="Укажите статус ошибки, который будет отображаться в карточке"
            placeholder="Выбрать"
            data={ERROR_STATUSES.map((status) => ({
              value: status,
              label: FANCY_STATUS_NAMES[status],
            }))}
            value={error?.status}
            onChange={(val) => val && setStatus.mutate(val as ErrorStatus)}
            allowDeselect={false}
          />
        </Skeleton>
        <Stack gap="xs">
          <Skeleton visible={isLoading}>
            <Textarea
              variant="filled"
              label="Введите текст при появлении ошибки у пользователя"
              description="Данный текст будет появляться при возникновении ошибки на стороне пользователя"
              placeholder="Извините, что возникла ошибка. В ближайшее время все исправим и пришлем вам уведомление"
              withAsterisk
              autosize
              ref={messageRef}
              minRows={3}
            />
          </Skeleton>

          <Skeleton visible={isLoading}>
            <Group gap="xs">
              <Button
                radius="xs"
                color="main-blue.8"
                onClick={() =>
                  setMessage.mutate(messageRef.current?.value!)}
              >
                Сохранить
              </Button>
            </Group>
          </Skeleton>
        </Stack>

        <Title order={2} fw={600} className="!text-lg">
          Уведомления
        </Title>

        <Stack gap="xs">
          <form onSubmit={(event) => {
            event.preventDefault()
            notifications.show({ title: 'Рассылка отправлена', message: 'Все!', color: 'green' })
            handleMailing()
          }}>
            <Stack gap="xs">
              <Skeleton visible={isLoading}>
                <Select
                  value={FANCY_GROUPES_NAMES[mailingForm.chosenMailingUsers]}
                  onChange={(chosen) => setMailingForm({ ...mailingForm, chosenMailingUsers: Object.values(FANCY_GROUPES_NAMES).findIndex((element) => element === chosen) || MailingGroups.ACTIVE })}
                  label="Категория пользователей"
                  placeholder="Выбрать"
                  data={Object.values(FANCY_GROUPES_NAMES)}
                  allowDeselect={false}
                />
              </Skeleton>

              <Skeleton visible={isLoading}>
                <Textarea
                  value={mailingForm.mailingText}
                  onChange={(event) => setMailingForm({ ...mailingForm, mailingText: event.target.value })}
                  variant="filled"
                  label="Введите текст при появлении ошибки у пользователя"
                  description="Данный текст будет появляться при возникновении ошибки на стороне пользователя"
                  placeholder="Ошибка с которой вы столкнулись исправлена"
                  withAsterisk
                  autosize
                  minRows={3}
                />
              </Skeleton>

              <Skeleton visible={isLoading}>
                <Group gap="xs">
                  <Button radius="xs" color="main-blue.8" type="submit">
                    Отправить сообщение
                  </Button>
                </Group>
              </Skeleton>
            </Stack>
          </form>

          <Title order={2} fw={600} className="!text-lg">
            Таблица экземпляров ошибок
          </Title>

          <ErrorInstancesTable
            error_uid={errorId}
            totalErrors={error?.logs_count_total}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}