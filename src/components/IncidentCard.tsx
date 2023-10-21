import { Anchor, Badge, Card, CardSection, Center, Group, Space, Stack, Text } from '@mantine/core'
import { IconVersions } from '@tabler/icons-react';
import { ErrorOccurenes } from './ErrorOccurenes';

export const IncidentCard = () => {
  return (
    <Card bg="white" className='!flex-grow'>
      <Stack gap="sm">
        <Group justify="space-between">
          <Text size="sm">
            Тип ошибки:{" "}
            <Text span fw={500}>
              Системная
            </Text>
          </Text>
          <Badge variant="light" color="red">
            Не разрешен
          </Badge>
        </Group>
        <Anchor size="lg" fw={600}>
          Ошибка в форме создания характеристик
        </Anchor>
        <ErrorOccurenes/>
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