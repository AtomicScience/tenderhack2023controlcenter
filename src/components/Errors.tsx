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
      <div className="grid grid-cols-1 xl:grid-cols-2 row-auto gap-4">
        {data?.errors?.map(({ error_uid, ...props }) => (
          <ErrorCard key={error_uid} error_uid={error_uid} {...props} />
        ))}
      </div>
    </Stack>
  );
}
