import { Text, Pagination, Stack, Title, ActionIcon, Group, Indicator, Tooltip } from '@mantine/core';
import { ErrorCard } from './ErrorCard';
import { requestErrors } from '../api';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { EmptyCard } from './EmptyCard';
import { IconAdjustmentsHorizontal, IconFilter } from '@tabler/icons-react';

export const ERRORS_PAGE_SIZE = 10;

export const ErrorsPage = () => {
  const [page, setPage] = useState(1);

  const { isFetching, data, refetch } = useQuery(["errors", page], () =>
    requestErrors(page, ERRORS_PAGE_SIZE),
    {keepPreviousData: true}
  );

  useEffect(() => {
    const pollInterval = setInterval(() => refetch(), 10000);
    return () => clearInterval(pollInterval);
  }, []);

  const totalPages = data?.count ? Math.ceil(data.count / ERRORS_PAGE_SIZE) : 1;

  return (
    <Stack>
      <Title order={1} size="xl" fw={700}>
        Список ошибок{isFetching && " - обновление"}
      </Title>
      <Text size="md">
        Всего найдено: {data?.count ?? "0"} записей
      </Text>
      <Group gap="md" justify="space-between" wrap="nowrap">
        <Pagination total={totalPages} value={page} onChange={setPage} withEdges />

        <Group gap="sm" justify-content="flex-end">
          <Indicator color="red" size="8">
            <Tooltip label="Сортировка">
              <ActionIcon variant="light" size="lg" color="main-blue">
                <IconAdjustmentsHorizontal
                  style={{ width: "70%", height: "70%" }}
                  stroke={2}
                />
              </ActionIcon>
            </Tooltip>
          </Indicator>

          <Indicator color="red" size="8">
            <Tooltip label="Фильтры">
              <ActionIcon variant="light" size="lg" color="main-blue">
                <IconFilter
                  style={{ width: "70%", height: "70%" }}
                  stroke={2}
                />
              </ActionIcon>
            </Tooltip>
          </Indicator>
        </Group>
      </Group>
      {data?.errors?.length === 0 && <EmptyCard />}
      {data && (
        <div className="grid grid-cols-1 xl:grid-cols-2 row-auto gap-4">
          {data?.errors?.map(({ error_uid, ...props }) => (
            <ErrorCard key={error_uid} error_uid={error_uid} {...props} />
          ))}
        </div>
      )}
    </Stack>
  );
}
