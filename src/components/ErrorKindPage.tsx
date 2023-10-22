import { Title, Paper, Flex, Stack, Textarea, Button, Group, Select, Skeleton } from '@mantine/core';
import { ErrorOccurenes } from './ErrorOccurenes';
import { IconChevronLeft } from '@tabler/icons-react';
import { FANCY_STATUS_NAMES, StatusBadge } from './StatusBadge';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorInstancesTable } from './ErrorInstancesTable';
import { useQuery } from 'react-query';
import { requestError } from '../api';
import { ERROR_STATUSES } from '../models/error';

export const ErrorKindPage = () => {
  const { errorId } = useParams();
  const navigate = useNavigate();

  const { isLoading, data: error } = useQuery(["errors", errorId], () => requestError(errorId ?? ""));
  
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
            defaultValue={error?.category}
            allowDeselect={false}
          />
        </Skeleton>
        {/* TODO: Select action */}

        <Stack gap="xs">
          <Skeleton visible={isLoading}>
            <Textarea
              variant="filled"
              label="Введите текст при появлении ошибки у пользователя"
              description="Данный текст будет появляться при возникновении ошибки на стороне пользователя"
              placeholder="Извините, что возникла ошибка. В ближайшее время все исправим и пришлем вам уведомление"
              withAsterisk
              autosize
              minRows={3}
            />
          </Skeleton>

          <Skeleton visible={isLoading}>
            <Group gap="xs">
              <Button radius="xs" color="main-blue.8">
                Сохранить
              </Button>
            </Group>
          </Skeleton>
        </Stack>

        <Title order={2} fw={600} className="!text-lg">
          Уведомления
        </Title>

        <Stack gap="xs">
          <Skeleton visible={isLoading}>
            <Select
              label="Категория пользователей"
              placeholder="Выбрать"
              data={[
                "Все пользователи",
                "Активные пользователи",
                "Потенциально затронутые пользователи",
                "Затронутые пользователи",
              ]}
              allowDeselect={false}
            />
          </Skeleton>

          <Skeleton visible={isLoading}>
            <Textarea
              variant="filled"
              label="Введите текст при появлении ошибки у пользователя"
              description="Данный текст будет появляться при возникновении ошибки на стороне пользователя"
              placeholder="Извините, что возникла ошибка. В ближайшее время все исправим и пришлем вам уведомление"
              withAsterisk
              autosize
              minRows={3}
            />
          </Skeleton>

          <Skeleton visible={isLoading}>
            <Group gap="xs">
              <Button radius="xs" color="main-blue.8">
                Отправить сообщение
              </Button>
            </Group>
          </Skeleton>

          <Title order={2} fw={600} className="!text-lg">
            Таблица экземпляров ошибок
          </Title>

          <ErrorInstancesTable error_uid={errorId} totalErrors={error?.logs_count_total}/>
        </Stack>
      </Stack>
    </Paper>
  );
}