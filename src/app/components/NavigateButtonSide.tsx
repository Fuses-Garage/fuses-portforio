"use client";
import { NavLink } from "@mantine/core"
import { usePathname, useRouter } from "next/navigation";

interface Props {
    href: string
    text: string
}
const NavigateButtonSide = (props: Props) => {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <NavLink label={props.text} ff={"orbitron"} active={pathname == props.href} onClick={() => router.push(props.href)} />
    )
}
export default NavigateButtonSide