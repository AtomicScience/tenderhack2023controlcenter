import { Anchor, Badge, Card, CardSection, Center, Group, Space, Stack, Text } from '@mantine/core'
import { IconVersions } from '@tabler/icons-react';
import { FC } from 'react';

interface IncidentsCardProps {
  errorKind: string
  errorType: string
  status: string
  overallCount: number
  date: string
  lastDayCount: number
  threeDaysCount: number
  oneMonthCount: number
}

export const IncidentCard: FC<IncidentsCardProps> = ({
  errorKind,
  errorType,
  status,
  overallCount,
  date,
  lastDayCount,
  threeDaysCount,
  oneMonthCount
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
        <Group justify="space-between">
          <Group gap="sm">
            <Text span fw={700} className="!text-4xl">
              {overallCount}
            </Text>
            <Text size="sm" fw={600}>
              Количество случаев
            </Text>
          </Group>
          <Text c="gray" size="sm" fw={600}>
            {date}
          </Text>
        </Group>
        <Group justify="space-between">
          <Group gap="xs">
            <Text span fw={700} size="xl" c='green'>
              {lastDayCount}
            </Text>
            <Text size="xs" fw={600}>
              За последние сутки
            </Text>
          </Group>
          <Group gap="xs">
            <Text span fw={700} size="xl">
              {threeDaysCount}
            </Text>
            <Text size="xs" fw={600}>
              За 3 дня
            </Text>
          </Group>
          <Group gap="xs">
            <Text span fw={700} size="xl">
              {oneMonthCount}
            </Text>
            <Text size="xs" fw={600}>
              За месяц
            </Text>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
}

export const OldIncidentCard = () => {
  return (
    <Card bg="pale-blue.0">
      <CardSection bg="white" p="md">
        <Stack gap="sm">
          <Group justify="space-between">
            <Text size="sm" c="gray.7">
              Ошибка #123456
            </Text>
            <Badge variant="light" color="red">
              Не разрешен
            </Badge>
          </Group>
          <Group justify="space-between" grow>
            <Text size="lg" fw={700} className="whitespace-nowrap">
              Данные не прикрепляются
            </Text>
            <Center>
              <Group gap="xs">
                <Text size="lg" c="red" fw={700}>
                  100
                </Text>
              </Group>
            </Center>
          </Group>
        </Stack>
      </CardSection>
      <Space h="md" />
      <Group justify="space-between">
        <Text>
          <IconVersions className="inline" />
          Тип: Системная
        </Text>
      </Group>
    </Card>
  );
};
/*

                <Text size="lg" c="black" fw={700}>
                  +
                </Text>
                <Text size="lg" c="red" fw={700}>
                  100
                </Text>
                <Tooltip label="Общее количество ошибок ">
                  <ThemeIcon
                    size="xs"
                    color="black"
                    variant="transparent"
                    className="cursor-help"
                  >
                    <IconHelpCircle />
                  </ThemeIcon>
                </Tooltip>
                */