import { NavLink, ThemeIcon } from '@mantine/core';
import { IconChevronRight, IconGraph, IconBulb, IconMessage } from '@tabler/icons-react';

export const Navbar = () => {
  return (
    <>
      <NavLink
        label="Дашборд и аналитика"
        leftSection={
          <ThemeIcon variant="light" size="md" color="blue">
            <IconGraph style={{ width: "80%", height: "80%" }} />
          </ThemeIcon>
        }
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
      />
      <NavLink
        label="Дашборд"
        leftSection={
          <ThemeIcon variant="light" size="md" color="green">
            <IconBulb style={{ width: "80%", height: "80%" }} />
          </ThemeIcon>
        }
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
      />
      <NavLink
        label="Ошибки"
        leftSection={
          <ThemeIcon variant="light" size="md" color="red">
            <IconMessage style={{ width: "80%", height: "80%" }} />
          </ThemeIcon>
        }
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
      />
    </>
  );
}