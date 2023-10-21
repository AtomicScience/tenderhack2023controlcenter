import { Stack, Title } from '@mantine/core';
import { IncidentCard } from './IncidentCard';

export const Incidents = () => {
  return (
    <Stack>
      <Title order={1} size="xl" fw={700}>
        Список ошибок
      </Title>
      <IncidentCard />
      <IncidentCard />
    </Stack>
  );
}