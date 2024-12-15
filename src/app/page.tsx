import { Group, Paper, Stack, Text } from "@mantine/core"
import TitleHeader from "../components/TitleHeader"
import UpdateHistory from "./components/UpdateHistory"


export default function Home() {
  return (
    <Paper p={"24px 32px"}>
      <TitleHeader text="WELCOME" jp="ようこそ" />
      <Group align="space-between" style={{ border: "var(--mantine-primary-color-filled) 2px solid", borderRadius: 16 }} p={16}>

        <Stack w={"100%"}>
          <Text fz={32}>Fuse&apos;s Garage&apos;s Siteへようこそ！</Text>
          <Text>
            このサイトは3Dモデルやゲームを作っているマルチクリエイターFuseの個人サイトです。
          </Text>
        </Stack>
        <UpdateHistory />
      </Group>
    </Paper>
  )
}
