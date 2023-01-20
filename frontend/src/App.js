import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

export default function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={
        <Footer height={40} p="xs">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 20, md: 50 }} p="md">
          Header Not so important
        </Header>
      }
    >
      {/* <Text>Resize app to see responsive navbar in action</Text> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </AppShell>
  );
}