import { Flex, Stack, Title } from '@mantine/core';
import { IncidentCard } from './IncidentCard';

export const IncidentsPage = () => {
  return (
    <Stack>
      <Title order={1} size="xl" fw={700}>
        Список ошибок
      </Title>
      <Flex gap="sm" wrap='wrap'>
        <IncidentCard 
          errorKind='Ошибка: Сфетофор горит красным'
          errorType='Системная'
          status='Не разрешен'
          overallCount={1024}
          date='12.01.2023'
          lastDayCount={12}
          threeDaysCount={13}
          oneMonthCount={123}
          />
        <IncidentCard 
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