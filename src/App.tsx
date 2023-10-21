import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Navbar } from './components/Navbar';
import { VariantPage } from './components/VariantPage';
import { Incidents } from './components/Incidents';

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header p="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div className="w-full h-full flex align-center">
          <img src="pp_logo.svg" />
        </div>
      </AppShell.Header>

      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main bg='pale-blue.1'>
        <Incidents/>
      </AppShell.Main>
    </AppShell>
  );
}

export default App
