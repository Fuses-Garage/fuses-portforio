import { Paper, Text, Title, Stack } from "@mantine/core"

const NotFound = () => {
    return (
        <Paper p={"24px 32px"}>
            <Stack align="center">
                <Title ff={"orbitron"} fz={96}>404</Title>
                <Title ff={"orbitron"}>Not Found...</Title>
                <Text>そのページは存在しません</Text>
            </Stack>

        </Paper>
    )
}
export default NotFound