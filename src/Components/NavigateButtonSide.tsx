import { NavLink } from "@mantine/core"
import { useLocation, useNavigate } from "react-router-dom"

interface Props {
    href: string
    text: string
}
const NavigateButtonSide = (props: Props) => {
    const location = useLocation()
    const nav = useNavigate()
    return (
        <NavLink label={props.text} ff={"orbitron"} active={location.pathname == props.href} onClick={() => nav(props.href)} />
    )
}
export default NavigateButtonSide