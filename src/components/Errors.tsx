import { Flex, Stack, Title } from '@mantine/core';
import { ErrorCard } from './ErrorCard';
import { requestErrors } from '../api';
import { useQuery } from 'react-query';

export const ErrorsPage = () => {
  const { isLoading, isError, data, error } = useQuery("errors", requestErrors);

  console.log(isLoading, isError, data, error);

  return (
    <Stack>
      <Title order={1} size="xl" fw={700}>
        Список ошибок
      </Title>
      <Flex gap="sm" wrap='wrap'>
        <ErrorCard 
          errorId='1'
          errorKind='Ошибка: Сфетофор горит красным'
          errorType='Системная'
          status='Не разрешен'
          overallCount={1024}
          date='12.01.2023'
          lastDayCount={12}
          threeDaysCount={13}
          oneMonthCount={123}
        />
      </Flex>
    </Stack>
  );
}
