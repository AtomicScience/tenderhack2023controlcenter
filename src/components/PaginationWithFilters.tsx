import { Group, Pagination, ActionIcon, Indicator, Tooltip } from '@mantine/core';
import { IconAdjustmentsHorizontal, IconFilter } from '@tabler/icons-react';

export const transProps = {
  transition: 'pop',
  duration: 300,
} as const;

export const PaginationWithFilters = () => {
  return (
    <Group gap="md" justify="space-between" wrap='nowrap'>
      <Pagination total={100} withEdges />

      <Group gap="sm" justify-content='flex-end'>
        <Indicator color="red" size="8">
          <Tooltip label="Сортировка" transitionProps={transProps}>
            <ActionIcon variant="light" size="lg" color="main-blue">
              <IconAdjustmentsHorizontal
                style={{ width: "70%", height: "70%" }}
                stroke={2}
              />
            </ActionIcon>
          </Tooltip>
        </Indicator>

        <Indicator color="red" size="8">
          <Tooltip label="Фильтры" transitionProps={transProps}>
            <ActionIcon variant="light" size="lg" color="main-blue">
              <IconFilter style={{ width: "70%", height: "70%" }} stroke={2} />
            </ActionIcon>
          </Tooltip>
        </Indicator>
      </Group>
    </Group>
  );
}