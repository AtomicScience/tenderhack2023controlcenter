import { Title, Paper, Flex, Stack, Textarea, Button, Group, Select, Anchor } from '@mantine/core';
import { ErrorOccurenes } from './ErrorOccurenes';
import { IconChevronLeft } from '@tabler/icons-react';
import { StatusBadge } from './StatusBadge';

export const ErrorKindPage = () => {
  return (
    <Paper p="md">
      <Stack gap="md">
        <Group align="flex-start">
          <Anchor
            c="black"
            variant="transparent"
            href="/errors"
            underline="never"
          >
            <IconChevronLeft size="1rem" className="inline" />
            Назад
          </Anchor>
        </Group>

        <Flex
          wrap="wrap-reverse"
          gap="sm"
          align="flex-end"
          justify="space-between"
        >
          <Stack gap="sm" className="flex-shrink">
            <Title order={1} fw={600} className="!text-2xl">
              Ошибка в форме создания характеристик
            </Title>
            <ErrorOccurenes
              logs_count_total={1024}
              date="11.12.2023"
              logs_count_last_24h={12}
              logs_count_last_3d={24}
              logs_count_last_1mo={10}
            />
          </Stack>
          <StatusBadge status={'new'} />
        </Flex>

        <Select
          label="Статус ошибки"
          description="Укажите статус ошибки, который будет отображаться в карточке"
          placeholder="Выбрать"
          data={["Новая", "В процессе", "Разрешена"]}
          allowDeselect={false}
        />

        <Stack gap="xs">
          <Textarea
            variant="filled"
            label="Введите текст при появлении ошибки у пользователя"
            description="Данный текст будет появляться при возникновении ошибки на стороне пользователя"
            placeholder="Извините, что возникла ошибка. В ближайшее время все исправим и пришлем вам уведомление"
            withAsterisk
            autosize
            minRows={3}
          />

          <Group gap="xs">
            <Button radius="xs" color="main-blue.8">
              Сохранить
            </Button>
          </Group>
        </Stack>

        <Title order={2} fw={600} className="!text-lg">
          Уведомления
        </Title>

        <Stack gap="xs">
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

          <Textarea
            variant="filled"
            label="Введите текст при появлении ошибки у пользователя"
            description="Данный текст будет появляться при возникновении ошибки на стороне пользователя"
            placeholder="Извините, что возникла ошибка. В ближайшее время все исправим и пришлем вам уведомление"
            withAsterisk
            autosize
            minRows={3}
          />

          <Group gap="xs">
            <Button radius="xs" color="main-blue.8">
              Отправить сообщение
            </Button>
            <Button variant="light" color="black">
              Сохранить черновик
            </Button>
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
}