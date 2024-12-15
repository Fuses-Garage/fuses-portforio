"use client";
import { Collapse, Flex, List, ListItem, Paper, Text, Title } from "@mantine/core"
import { useToggle } from "@mantine/hooks"
const SkillList = () => {
    const [opened, toggle] = useToggle()
    return (
        <Paper bg={"var(--mantine-primary-color-light-hover)"} px={16} onClick={() => toggle()} py={8}>
            <Flex align={"center"} justify={"space-between"} w={"100%"}>
                <Title ff={"orbitron"}>SKILL LIST</Title>
                <Text>クリックで開閉</Text>
            </Flex>
            <Collapse in={opened}>
                <List p={8}>
                    <ListItem>UNREAL ENGINE4を使った簡単なゲームの作成</ListItem>
                    <ListItem>Unityを使った簡単なゲームの作成</ListItem>
                    <ListItem>Blenderを使った小物や家具、武器などの3Dモデルの作成</ListItem>
                    <ListItem>Kritaを使った簡単なテクスチャの作成</ListItem>
                    <ListItem>Affinity Designer2を使った簡単なベクターデザイン</ListItem>
                </List>
            </Collapse>
        </Paper>
    )
}
export default SkillList