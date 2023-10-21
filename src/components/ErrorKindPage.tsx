import { Title, Paper, Flex, Stack, Space } from '@mantine/core';
import { ErrorOccurenes } from './ErrorOccurenes';

export const ErrorKindPage = () => {
  return (
    <Paper p="md">
      <Flex wrap="wrap">
        <Stack gap="sm" className="!flex-grow">
          <Title order={1} fw={600} className="!text-2xl">
            Ошибка в форме создания характеристик
          </Title>
          <ErrorOccurenes />
        </Stack>

        <Space className="!flex-grow" />
      </Flex>
    </Paper>
  );
}