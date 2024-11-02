import { Center, Text } from "@mantine/core"
import { useLocation, useNavigate } from "react-router-dom"

interface Props {
    href: string
    text: string
}
const NavigateButton = (props: Props) => {
    const location = useLocation()
    const nav = useNavigate()
    return (
        <Center h={"100%"} className={location.pathname == props.href ? "navlink-active" : "navlink"} w={100} onClick={() => nav(props.href)}>
            <Text fw={700} ff={"orbitron"}>{props.text}</Text>
        </Center>
    )
}
export default NavigateButton