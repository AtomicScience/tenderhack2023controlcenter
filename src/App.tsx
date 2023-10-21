import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Navbar } from './components/Navbar';
import { ErrorKindPage } from './components/ErrorKindPage';

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 200, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header p="sm">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div className="flex align-center">
            <img src="pp_logo.svg" />
          </div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main bg="pale-blue.1">
        <ErrorKindPage/>
      </AppShell.Main>
    </AppShell>
  );
}

export default App
