import { Flex, Stack, Title } from '@mantine/core';

export const DasboardPage = () => {
    return (
      <Stack>
        <Title order={1} size="xl" fw={700}>
          Аналитика
        </Title>
        <Flex gap="sm" wrap='wrap'>
          <p>Тут будет аналитика</p>
        </Flex>
      </Stack>
    )
}