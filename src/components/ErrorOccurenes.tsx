import { Group, Text } from '@mantine/core';
import { FC } from 'react';

export interface ErrorOccurenesProps {
  overallCount: number
  date: string
  lastDayCount: number
  threeDaysCount: number
  oneMonthCount: number
}

export const ErrorOccurenes: FC<ErrorOccurenesProps> = ({
  overallCount,
  date,
  lastDayCount,
  threeDaysCount,
  oneMonthCount
}) => {
  return (
    <>
      <Group justify="space-between">
        <Group gap="sm">
          <Text span fw={700} className="!text-4xl">
            {overallCount}
          </Text>
          <Text size="sm" fw={600}>
            Количество случаев
          </Text>
        </Group>
        <Text c="gray" size="sm" fw={600}>
          {date}
        </Text>
      </Group>
      <Group justify="space-between">
        <Group gap="xs">
          <Text span fw={700} size="xl" c="green">
            {lastDayCount}
          </Text>
          <Text size="xs" fw={600}>
            За последние сутки
          </Text>
        </Group>
        <Group gap="xs">
          <Text span fw={700} size="xl">
            {threeDaysCount}
          </Text>
          <Text size="xs" fw={600}>
            За 3 дня
          </Text>
        </Group>
        <Group gap="xs">
          <Text span fw={700} size="xl">
            {oneMonthCount}
          </Text>
          <Text size="xs" fw={600}>
            За месяц
          </Text>
        </Group>
      </Group>
    </>
  );
}