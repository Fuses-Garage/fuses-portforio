"use client";
import { BackgroundImage, Flex, GridCol, Stack, Text } from "@mantine/core"
import CategoryBadge from "./CategoryBadge"
import { useMediaQuery } from "@mantine/hooks"
import { Product } from "@/const/Products";
import { useRouter } from "next/navigation";

interface Props {
    e: Product
}
const ProductItem = ({ e }: Props) => {
    const router = useRouter()
    const isSP = useMediaQuery('(max-width: 820px)')
    return (
        <GridCol span={isSP ? 6 : 3} p={0} key={e.sumnail}>
            <BackgroundImage style={{ aspectRatio: 1 }} pt={0} h={"auto"} w={"100%"} src={`/fuses-portforio/product_sumnails/${e.sumnail}`} onClick={() => router.push(`/product/${e.id}`)}>
                <Stack h={"100%"} justify="space-between">
                    <Flex direction={"column"} justify={"space-between"} bg={"#000000CC"} align={"flex-start"}>
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
}
export default ProductItem