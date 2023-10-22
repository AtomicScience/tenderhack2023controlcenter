import { Text, Pagination, Stack, Title, Skeleton } from '@mantine/core';
import { ErrorCard } from './ErrorCard';
import { requestErrors } from '../api';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { PaginationWithFilters } from './PaginationWithFilters';
import { EmptyCard } from './EmptyCard';

export const ErrorsPage = () => {
  const { isFetching, data, refetch } = useQuery("errors", requestErrors);

  useEffect(() => {
    const pollInterval = setInterval(() => refetch(), 10000)
    return () => clearInterval(pollInterval)
  })

  return (
    <Stack>
      <Title order={1} size="xl" fw={700}>
        Список ошибок{isFetching && " - обновление"}
      </Title>
      <Text size="md">Всего найдено:{" "}
      
      {data?.errors?.length ?? '0'} записей</Text>
      <PaginationWithFilters />
      {!data && <Skeleton h="11rem"> Hi there </Skeleton>}
      {data?.errors?.length === 0 && <EmptyCard/>}
      {data && (
        <div className="grid grid-cols-1 xl:grid-cols-2 row-auto gap-4">
          {data?.errors?.map(({ error_uid, ...props }) => (
            <ErrorCard key={error_uid} error_uid={error_uid} {...props} />
          ))}
        </div>
      )}
      <Pagination total={100} withEdges />
    </Stack>
  );
}
