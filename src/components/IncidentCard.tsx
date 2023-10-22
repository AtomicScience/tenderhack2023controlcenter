import { Anchor, Badge, Card, Group, Stack, Text } from '@mantine/core'
import { FC } from 'react';
import { ErrorOccurenes, ErrorOccurenesProps } from './ErrorOccurenes';

interface IncidentsCardProps {
  errorKind: string
  errorType: string
  status: string
  
}

export const IncidentCard: FC<IncidentsCardProps & ErrorOccurenesProps> = ({
  errorKind,
  errorType,
  status,
  ...errorOccurences
}) => {
  return (
    <Card bg="white" className='!flex-grow'>
      <Stack gap="sm">
        <Group justify="space-between">
          <Text size="sm">
            Тип ошибки:{" "}
            <Text span fw={500}>
              {errorType}
            </Text>
          </Text>
          <Badge variant="light" color="red">
            {status}
          </Badge>
        </Group>
        <Anchor size="lg" fw={600}>
          {errorKind}
        </Anchor>
        <ErrorOccurenes {...errorOccurences} />
      </Stack>
    </Card>
  );
}
