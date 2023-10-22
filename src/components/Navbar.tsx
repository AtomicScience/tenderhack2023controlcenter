import { ThemeIcon, NavLink } from '@mantine/core';
import { IconChevronRight, IconGraph, IconMessage } from '@tabler/icons-react';
import { Link, useMatch } from 'react-router-dom';

export const Navbar = () => {
  const isAnalyticsPage = useMatch('/')
  const isErrorsPage = useMatch('/errors')
  
  return (
    <>
      <Link to="/">
        <NavLink
          component='span'
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
          component='span'
          active={!!isErrorsPage}
          label="Ошибки"
          leftSection={
            <ThemeIcon variant="light" size="md" color="red">
              <IconMessage style={{ width: "80%", height: "80%" }} />
            </ThemeIcon>
          }
          rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        />
      </Link>
    </>
  );
}