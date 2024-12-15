import { Paper } from "@mantine/core"
import TitleHeader from "@/components/TitleHeader"
import { Products } from "@/const/Products"
import ProductInfoArea from "./components/ProductInfoArea"

export async function generateStaticParams() {
    const posts = Products

    return posts.map((_, i) => ({
        id: i.toString(),
    }))
}


export default async function ProductPage({ params, }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    const safeID = Number.parseInt(id) ?? 0
    const elem = Products.find(e => e.id == safeID) ?? Products[0]
    return (
        <Paper p={"24px 32px"}>
            <TitleHeader text="PRODUCT" jp="商品" />
            <ProductInfoArea elem={elem} />
        </Paper>
    )
}
