"use client";
import { Collapse, Flex, List, ListItem, Paper, Text, Title } from "@mantine/core"
import { useToggle } from "@mantine/hooks"
const UpdateHistory = () => {
    const [opened, toggle] = useToggle()
    return (
        <Paper bg={"var(--mantine-primary-color-light-hover)"} px={16} onClick={() => toggle()} py={8}>
            <Flex align={"center"} justify={"space-between"} w={"100%"}>
                <Title ff={"orbitron"}>UPDATE HISTORY</Title>
                <Text>クリックで開閉</Text>
            </Flex>
            <Collapse in={opened}>
                <List>
                    <ListItem>2024/11/03 公開</ListItem>
                    <ListItem>2024/12/16 リニューアル+新商品追加</ListItem>
                </List>
            </Collapse>
        </Paper>
    )
}
export default UpdateHistory