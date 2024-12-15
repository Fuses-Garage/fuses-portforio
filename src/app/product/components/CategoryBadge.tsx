import { Badge } from "@mantine/core"
import { Category } from "../../../const/Products"
interface Props {
    category: Category
}
const CategoryBadge = (props: Props) => {
    const getColor = () => {
        switch (props.category) {
            case "Wear":
                return "pink"
            case "Prop":
                return "blue"
            case "Item":
                return "lime"
            case "Gimmick":
                return "yellow"
            default:
                return "gray"
        }
    }
    const getText = () => {
        switch (props.category) {
            case "Wear":
                return "衣装・アクセサリー"
            case "Prop":
                return "小物・家具"
            case "Item":
                return "手持ちアイテム"
            case "Gimmick":
                return "ワールドギミック"
            default:
                return "その他"
        }
    }
    return (
        <Badge color={getColor()}>{getText()}</Badge>
    )
}
export default CategoryBadge