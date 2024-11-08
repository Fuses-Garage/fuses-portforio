import { AppShell, Burger, Group, Image, Flex, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from "../assets/logo.svg"
import NavigateButton from '../Components/NavigateButton';
import NavigateButtonSide from '../Components/NavigateButtonSide';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 45 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md" bg={"#444"}>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size={20} />
                    <Group h={"100%"} justify="space-between" style={{ flex: 1 }}>
                        <Group>
                            <Image w={90} h={45} src={logo} />
                            <Text fz={24} fw={700} c={"#ffffff"} ff={"orbitron"}>Fuse's Site</Text>

                        </Group>
                        <Flex ml="xl" h={"100%"} gap={0} visibleFrom="sm">
                            <NavigateButton href='/' text='TOP' />
                            <NavigateButton href='/about' text='ABOUT' />
                            <NavigateButton href='/product' text='PRODUCT' />
                            <NavigateButton href='/works' text='WORKS' />
                        </Flex>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                <NavigateButtonSide href='/' text='TOP' />
                <NavigateButtonSide href='/about' text='ABOUT' />
                <NavigateButtonSide href='/product' text='PRODUCT' />
                <NavigateButtonSide href='/works' text='WORKS' />
            </AppShell.Navbar>

            <AppShell.Main className='bg'>
                <Outlet />
            </AppShell.Main>
            <AppShell.Footer bg={"#444"} c={"#fff"}>
                <Text ta={"right"} p={4}>
                    &copy;Fuse's Garage
                </Text>
            </AppShell.Footer>
        </AppShell>
    );
}