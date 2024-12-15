
import { Paper } from "@mantine/core"
import TitleHeader from "@/components/TitleHeader"
import ProductArea from "./components/ProductArea"

const ProductPage = () => {
    return (
        <Paper p={"24px 32px"}>
            <TitleHeader text="PRODUCT" jp="商品" />
            <ProductArea />
        </Paper>
    )
}
export default ProductPage
