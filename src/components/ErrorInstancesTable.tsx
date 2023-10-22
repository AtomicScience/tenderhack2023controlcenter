import { Pagination, Skeleton, Stack, Table } from '@mantine/core';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { requestErrorLogs } from '../api';

export type ErrorInstancesProps = {
  error_uid?: string,
  totalErrors?: number,
}

const formatDate = (date: Date) => {
  return DateTime.fromJSDate(date).toFormat('dd.mm.yyyy HH:MM:ss')
}

export const ERROR_INSTANCES_PAGE_SIZE = 50;

export const ErrorInstancesTable = ({
  error_uid,
  totalErrors
}: ErrorInstancesProps) => {
  const [page, setPage] = useState(1);

  const { isLoading, data: errors } = useQuery(
    ["errorInstances", error_uid, page],
    () => requestErrorLogs(error_uid!, page, ERROR_INSTANCES_PAGE_SIZE)
  );

  useEffect(() => {
    if (!errors) return;

    setRows(
      errors?.map((error) => (
        <Table.Tr key={error.raw_log_uid}>
          <Table.Td className="!whitespace-nowrap">{error.id}</Table.Td>
          <Table.Td className="!whitespace-nowrap">
            {formatDate(error.created_date)}
          </Table.Td>
          <Table.Td className="!break-all">{error.description}</Table.Td>
        </Table.Tr>
      ))
    );
  }, [errors]);

  const totalPages = totalErrors
    ? Math.ceil(totalErrors / ERROR_INSTANCES_PAGE_SIZE)
    : 1;

  return (
    <Stack gap="sm">
      <Pagination
        total={totalPages}
        value={page}
        onChange={setPage}
        withEdges
      />
      <Skeleton visible={isLoading}>
        <Table className="!max-w-full">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Дата</Table.Th>
              <Table.Th>Лог</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Skeleton>
    </Stack>
  );
};