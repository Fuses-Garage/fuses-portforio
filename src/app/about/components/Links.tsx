"use client";
import { Anchor, Collapse, Flex, List, ListItem, Paper, Text, Title } from "@mantine/core"
import { useToggle } from "@mantine/hooks"
const Links = () => {
    const [opened, toggle] = useToggle()
    return (
        <Paper bg={"var(--mantine-primary-color-light-hover)"} px={16} onClick={() => toggle()} py={8}>
            <Flex align={"center"} justify={"space-between"} w={"100%"}>
                <Title ff={"orbitron"}>LINKS</Title>
                <Text>クリックで開閉</Text>
            </Flex>
            <Collapse in={opened}>
                <List>
                    <ListItem>X:<Anchor href="https://x.com/metelove2000">@metelove2000</Anchor></ListItem>
                    <ListItem>BOOTH<Anchor href="https://fusesgarage.booth.pm/">Fuse&apos;s Garage</Anchor></ListItem>
                    <ListItem>VKET STORE:<Anchor href="https://store.vket.com/ja/shops/3214">Fuse&apos;s Garage Vket支部</Anchor></ListItem>
                </List>
            </Collapse>
        </Paper>
    )
}
export default Links