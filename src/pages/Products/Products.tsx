import { BackgroundImage, Flex, Grid, GridCol, Paper, Stack, Text } from "@mantine/core"
import TitleHeader from "../../Components/TitleHeader"
import { Products, Product } from "../../const/Products"
import CategoryBadge from "./Components/CategoryBadge"
import ProductModal from "./Components/ProductModal"
import { useDisclosure, useMediaQuery } from "@mantine/hooks"
import { useState } from "react"

const ProductPage = () => {
    const filtered = Products.sort((a, b) => b.release.getTime() - a.release.getTime())
    const [opened, { open, close }] = useDisclosure(false)
    const [product, setProduct] = useState<Product | null>(null)
    const isSP = useMediaQuery('(max-width: 820px)')
    return (
        <Paper p={"24px 32px"}>
            <ProductModal opened={opened} onClose={close} product={product} />
            <TitleHeader text="PRODUCT" jp="商品" />
            <Grid align="stretch" gutter={0}>
                {
                    filtered.map((e, i) => {
                        return (
                            <GridCol span={isSP ? 6 : 3} p={0} key={i}>
                                <BackgroundImage component="image" style={{ aspectRatio: 1 }} pt={0} h={"auto"} w={"100%"} src={`${import.meta.env.BASE_URL}product_sumnails/${e.sumnail}`}>
                                    <Stack h={"100%"} justify="space-between" onClick={() => { setProduct(e); open() }}>
                                        <Flex direction={isSP ? "column" : "row"} justify={"space-between"} bg={"#000000CC"} align={isSP ? "flex-start" : "center"}>
                                            <Text c={"#fff"} fz={16}>{e.name}</Text>
                                            <CategoryBadge category={e.category} />
                                        </Flex>
                                        <Flex justify={"space-between"} bg={"#000000CC"} align={"center"}>
                                            <Text fz={32} c={"var(--mantine-primary-color-filled)"} >¥{e.price}</Text>
                                        </Flex>
                                    </Stack>
                                </BackgroundImage>
                            </GridCol>
                        )
                    })
                }
            </Grid>
        </Paper>
    )
}
export default ProductPage