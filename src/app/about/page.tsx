import { Group, Image, Paper, Stack, Title } from "@mantine/core"
import TitleHeader from "@/components/TitleHeader"
import Links from "./components/Links"
import SkillList from "./components/SkillList"

const About = () => {
    return (
        <Paper p={"24px 32px"}>
            <TitleHeader text="ABOUT" jp="自己紹介" />
            <Group align="space-between" style={{ border: "var(--mantine-primary-color-filled) 2px solid", borderRadius: 16 }} p={16}>

                <Stack w={"100%"}>
                    <Group align="flex-start">
                        <Stack gap={16}>
                            <Image width={192} height={192} src={"/fuses-portforio/Icon.jpg"} alt={"自画像"} radius={16} />
                        </Stack>
                        <Stack>
                            <Title ff={"orbitron"}>Fuse&apos;s Garage</Title>
                            2003年生まれ福岡育ちのマルチクリエイター。
                            ゲームを作ったり3Dモデルを作ったりと本当にいろいろやってます。
                        </Stack>
                    </Group>
                    <Links />
                    <SkillList />
                </Stack>
            </Group>
        </Paper>
    )
}
export default About