import { Group, Text } from '@mantine/core';

export const ErrorOccurenes = () => {
  return (
    <>
      <Group justify="space-between">
        <Group gap="sm">
          <Text span fw={700} className="!text-4xl">
            1024
          </Text>
          <Text size="sm" fw={600}>
            Количество случаев
          </Text>
        </Group>
        <Text c="gray" size="sm" fw={600}>
          21.11.2023
        </Text>
      </Group>
      <Group justify="space-between">
        <Group gap="xs">
          <Text span fw={700} size="xl" c="green">
            0
          </Text>
          <Text size="xs" fw={600}>
            За последние сутки
          </Text>
        </Group>
        <Group gap="xs">
          <Text span fw={700} size="xl">
            12
          </Text>
          <Text size="xs" fw={600}>
            За 3 дня
          </Text>
        </Group>
        <Group gap="xs">
          <Text span fw={700} size="xl">
            506
          </Text>
          <Text size="xs" fw={600}>
            За месяц
          </Text>
        </Group>
      </Group>
    </>
  );
}