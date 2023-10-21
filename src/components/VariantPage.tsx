import { Stack, Title, Text } from '@mantine/core';

export const VariantPage = () => {
  return (
    <Stack>
      <Text size="sm" c="gray.7">
        Ошибка #123456
      </Text>
      <Title order={1} size="xl" fw={700}>
        Список ошибок
      </Title>
    </Stack>
  );
}