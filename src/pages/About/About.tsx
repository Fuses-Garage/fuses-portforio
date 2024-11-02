import { Anchor, Collapse, Flex, Group, Image, List, ListItem, Paper, Stack, Text, Title } from "@mantine/core"
import TitleHeader from "../../Components/TitleHeader"
import icon from "../../assets/Icon.jpg"
import { useToggle } from "@mantine/hooks"

const About = () => {
    const [opened, toggle] = useToggle()
    const [openedL, toggleL] = useToggle()
    return (
        <Paper p={"24px 32px"}>
            <TitleHeader text="ABOUT" jp="自己紹介" />
            <Group align="space-between" style={{ border: "var(--mantine-primary-color-filled) 2px solid", borderRadius: 16 }} p={16}>

                <Stack w={"100%"}>
                    <Group align="flex-start">
                        <Stack gap={16}>
                            <Image width={192} height={192} src={icon} radius={16} />
                        </Stack>
                        <Stack>
                            <Title ff={"orbitron"}>Fuse's Garage</Title>
                            2003年生まれ福岡育ちのマルチクリエイター。
                            ゲームを作ったり3Dモデルを作ったりと本当にいろいろやってます。
                        </Stack>
                    </Group>
                    <Paper bg={"var(--mantine-primary-color-light-hover)"} px={16} onClick={() => toggle()} py={8}>
                        <Flex align={"center"} justify={"space-between"} w={"100%"}>
                            <Title ff={"orbitron"}>LINKS</Title>
                            <Text>クリックで開閉</Text>
                        </Flex>
                        <Collapse in={opened}>
                            <List>
                                <ListItem>X:<Anchor href="https://x.com/metelove2000">@metelove2000</Anchor></ListItem>
                                <ListItem>BOOTH<Anchor href="https://fusesgarage.booth.pm/">Fuse's Garage</Anchor></ListItem>
                                <ListItem>VKET STORE:<Anchor href="https://store.vket.com/ja/shops/3214">Fuse's Garage Vket支部</Anchor></ListItem>
                            </List>
                        </Collapse>
                    </Paper>
                    <Paper bg={"var(--mantine-primary-color-light-hover)"} px={16} onClick={() => toggleL()} py={8}>
                        <Flex align={"center"} justify={"space-between"} w={"100%"}>
                            <Title ff={"orbitron"}>SKILL LIST</Title>
                            <Text>クリックで開閉</Text>
                        </Flex>
                        <Collapse in={openedL}>
                            <List>
                                <ListItem>UNREAL ENGINE4を使った簡単なゲームの作成</ListItem>
                                <ListItem>Unityを使った簡単なゲームの作成</ListItem>
                                <ListItem>Blenderを使った小物や家具、武器などの3Dモデルの作成</ListItem>
                                <ListItem>Kritaを使った簡単なテクスチャの作成</ListItem>
                                <ListItem>Affinity Designer2を使った簡単なベクターデザイン</ListItem>
                            </List>
                        </Collapse>
                    </Paper>

                </Stack>
            </Group>
        </Paper>
    )
}
export default About