import { ThemeIcon, NavLink, Stack, Avatar, Group, Text} from '@mantine/core';
import { IconChevronRight, IconGraph, IconMessage, IconSettings } from '@tabler/icons-react';
import { Link, useMatch } from 'react-router-dom';

export const Navbar = () => {
  const isAnalyticsPage = useMatch('/')
  const isErrorsPage = useMatch('/errors')
  const isErrorKindPage = useMatch('/errors/:errorId')
  const isErrorPage = isErrorsPage || isErrorKindPage
  
  return (
    <Stack justify="space-between" h="100%">
      <Stack gap={0}>
        <Link to="/">
          <NavLink
            component="span"
            active={!!isAnalyticsPage}
            label="Aналитика"
            leftSection={
              <ThemeIcon variant="light" size="md" color="blue">
                <IconGraph style={{ width: "80%", height: "80%" }} />
              </ThemeIcon>
            }
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
          />
        </Link>
        <Link to="/errors">
          <NavLink
            component="span"
            active={!!isErrorPage}
            label="Ошибки"
            leftSection={
              <ThemeIcon variant="light" size="md" color="red">
                <IconMessage style={{ width: "80%", height: "80%" }} />
              </ThemeIcon>
            }
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
          />
        </Link>
      </Stack>

      <Group
        p="md"
        wrap="nowrap"
        w="100%"
        justify="space-between"
        gap='xs'
        className="!border-t-gray-3 border-t"
      >
        <Avatar src={null} alt="Vitaly Rtishchev" color="red">
          ИЩ
        </Avatar>
        <Stack gap="1" w="1" className="!grow">
          <Text size="xs" truncate="end" fw={600} className="whitespace-nowrap">
            Ирина Щекочихина-Крестовоздвиженская
          </Text>

          <Text size="xs" c="gray" className="whitespace-nowrap">
            Менеджер
          </Text>
        </Stack>
        <IconSettings height="1.5rem" width="1.5rem" className='!cursor-pointer'/>
      </Group>
    </Stack>
  );
}