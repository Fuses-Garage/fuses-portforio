import { Grid } from "@mantine/core"
import { Products, } from "@/const/Products"
import ProductItem from "./ProductItem";

const ProductArea = () => {
    const filtered = Products.sort((a, b) => b.release.getTime() - a.release.getTime())
    return (
        <Grid align="stretch" gutter={0}>
            {
                filtered.map((e, i) => {
                    return (
                        <ProductItem e={e} key={i} />
                    )
                })
            }
        </Grid>

    )
}
export default ProductArea
