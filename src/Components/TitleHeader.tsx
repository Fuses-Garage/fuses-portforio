import { Box, Flex, Text, Title } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

interface Props {
    text: string
    jp: string
}
const TItleHeader = (props: Props) => {
    const isSP = useMediaQuery('(max-width: 820px)')
    return (
        <Flex align={"center"} gap={16} mb={40}>
            <Box h={2} w={32} bg={"#000000"} />
            <Flex direction={isSP ? "column" : "row"}>
                <Title fz={48} ff={"orbitron"}>{props.text}</Title>
                <Text fz={32}>{props.jp}</Text>
            </Flex>

        </Flex>
    )
}
export default TItleHeader