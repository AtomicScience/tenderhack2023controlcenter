import { Group, Stack, Text } from '@mantine/core';
import { FC } from 'react';

export interface ErrorOccurenesProps {
  date: string,
  logs_count_total: number,
  logs_count_last_24h: number,
  logs_count_last_3d: number,
  logs_count_last_1mo: number,
}

export const ErrorOccurenes: FC<ErrorOccurenesProps> = ({
  logs_count_total,
  date,
  logs_count_last_24h,
  logs_count_last_3d,
  logs_count_last_1mo
}) => {
  return (
    <Stack gap='sm'>
      <Group justify="space-between">
        <Group gap="sm">
          <Text span fw={700} className="!text-4xl">
            {logs_count_total}
          </Text>
          <Text size="sm" fw={600}>
            Количество случаев
          </Text>
        </Group>
        <Text c="gray" size="sm" fw={600}>
          {new Date(date).toLocaleString('ru-RU')}
        </Text>
      </Group>
      <Group justify="space-between">
        <Group gap="xs">
          <Text span fw={700} size="xl" c="green">
            {logs_count_last_24h}
          </Text>
          <Text size="xs" fw={600}>
            За последние сутки
          </Text>
        </Group>
        <Group gap="xs">
          <Text span fw={700} size="xl">
            {logs_count_last_3d}
          </Text>
          <Text size="xs" fw={600}>
            За 3 дня
          </Text>
        </Group>
        <Group gap="xs">
          <Text span fw={700} size="xl">
            {logs_count_last_1mo}
          </Text>
          <Text size="xs" fw={600}>
            За месяц
          </Text>
        </Group>
      </Group>
    </Stack>
  );
}