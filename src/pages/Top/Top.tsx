import { Collapse, Flex, Group, List, ListItem, Paper, Stack, Text, Title } from "@mantine/core"
import TitleHeader from "../../Components/TitleHeader"
import { useToggle } from "@mantine/hooks"

const Top = () => {
    const [opened, toggle] = useToggle()
    return (
        <Paper p={"24px 32px"}>
            <TitleHeader text="WELCOME" jp="ようこそ" />
            <Group align="space-between" style={{ border: "var(--mantine-primary-color-filled) 2px solid", borderRadius: 16 }} p={16}>

                <Stack w={"100%"}>
                    <Text fz={32}>Fuse's Siteへようこそ！</Text>
                    <Text>
                        このサイトは3Dモデルやゲームを作っているマルチクリエイターFuseの個人サイトです
                    </Text>
                    <Paper bg={"var(--mantine-primary-color-light-hover)"} px={16} onClick={() => toggle()} py={8}>
                        <Flex align={"center"} justify={"space-between"} w={"100%"}>
                            <Title ff={"orbitron"}>UPDATE HISTORY</Title>
                            <Text>クリックで開閉</Text>
                        </Flex>
                        <Collapse in={opened}>
                            <List>
                                <ListItem>2024/11/04 公開</ListItem>
                            </List>
                        </Collapse>
                    </Paper>
                </Stack>
            </Group>
        </Paper>
    )
}
export default Top