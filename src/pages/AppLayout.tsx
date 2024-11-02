import { AppShell, Burger, Group, Anchor, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from "../assets/logo.svg"

export function AppLayout() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 90 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size={45} />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <Image w={90} h={90} src={logo} />
                        <Group ml="xl" gap={0} visibleFrom="sm">
                            <Anchor >Home</Anchor>
                            <Anchor >Blog</Anchor>
                            <Anchor >Contacts</Anchor>
                            <Anchor >Support</Anchor>
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                <Anchor >Home</Anchor>
                <Anchor >Blog</Anchor>
                <Anchor >Contacts</Anchor>
                <Anchor >Support</Anchor>
            </AppShell.Navbar>

            <AppShell.Main bg={"#ccc"}>
                Navbar is only visible on mobile, links that are rendered in the header on desktop are
                hidden on mobile in header and rendered in navbar instead.
            </AppShell.Main>
        </AppShell>
    );
}