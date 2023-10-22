import { Flex, Stack, Title } from '@mantine/core';
import { ErrorCard } from './ErrorCard';
import { requestErrors } from '../api';
import { useQuery } from 'react-query';

export const ErrorsPage = () => {
  const { isLoading, isError, data, error } = useQuery("errors", requestErrors);

  return (
    <Stack>
      <Title order={1} size="xl" fw={700}>
        Список ошибок
      </Title>
      <Flex gap="sm" wrap='wrap'>
        {
          data?.errors?.map(({ error_uid, ...props }) => 
            <ErrorCard
              key={error_uid}
              error_uid={error_uid}
              {...props}
            />
          )
        }
      </Flex>
    </Stack>
  );
}
