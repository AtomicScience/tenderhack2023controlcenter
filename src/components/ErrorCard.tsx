import { Anchor, Card, Group, Stack, Text } from '@mantine/core'
import { FC } from 'react';
import { ErrorShortModel } from '../models/error';
import { ErrorOccurenes } from './ErrorOccurenes';
import { StatusBadge } from './StatusBadge';

export type ErrorCardProps = ErrorShortModel;

export const ErrorCard: FC<ErrorCardProps> = ({
  error_uid,
  title,
  category,
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
              {category}
            </Text>
          </Text>
          <StatusBadge status={status}/>
        </Group>
        <Anchor size="lg" href={`errors/${error_uid}`} fw={600}>
          {title}
        </Anchor>
        <ErrorOccurenes {...errorOccurences} />
      </Stack>
    </Card>
  );
}
