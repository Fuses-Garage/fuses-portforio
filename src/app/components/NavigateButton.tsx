"use client";
import { Center, Text } from "@mantine/core"
import { usePathname, useRouter } from "next/navigation";

interface Props {
    href: string
    text: string
}
const NavigateButton = (props: Props) => {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <Center h={"100%"} className={pathname == props.href ? "navlink-active" : "navlink"} w={100} onClick={() => router.push(props.href)}>
            <Text fw={700} ff={"orbitron"}>{props.text}</Text>
        </Center>
    )
}
export default NavigateButton