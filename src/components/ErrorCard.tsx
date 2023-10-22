import { Anchor, Badge, Card, Group, Stack, Text } from '@mantine/core'
import { FC } from 'react';
import { ErrorShortModel } from '../models/error';
import { ErrorOccurenes } from './ErrorOccurenes';

export type ErrorCardProps = ErrorShortModel;

export const ErrorCard: FC<ErrorCardProps> = ({
  errorId,
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
        <Anchor size="lg" href={`errors/${errorId}`} fw={600}>
          {errorKind}
        </Anchor>
        <ErrorOccurenes {...errorOccurences} />
      </Stack>
    </Card>
  );
}
