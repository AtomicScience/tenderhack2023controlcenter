import { Anchor, Badge, Card, Group, Stack, Text } from '@mantine/core'
import { FC } from 'react';
import { ErrorShortModel } from '../models/error';

export type ErrorCardProps = ErrorShortModel;

export const ErrorCard: FC<ErrorCardProps> = ({
  errorId,
  errorKind,
  errorType,
  status,
  overallCount,
  date,
  lastDayCount,
  threeDaysCount,
  oneMonthCount
}) => {
  return (
    <Card bg="white" className='!flex-grow'>
      <Stack gap="sm">
        <Group justify="space-between">
          <Text size="sm">
            Тип ошибки:{" "}
            <Text span fw={500}>
              {errorType}
            </Text>
          </Text>
          <Badge variant="light" color="red">
            {status}
          </Badge>
        </Group>
        <Anchor size="lg" href={`errors/${errorId}`} fw={600}>
          {errorKind}
        </Anchor>
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
            <Text span fw={700} size="xl" c='green'>
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
      </Stack>
    </Card>
  );
}
