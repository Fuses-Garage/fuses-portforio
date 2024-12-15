"use client";

import { Product } from "@/const/Products"
import { Button, Divider, Flex, Image, Paper, Pill, PillGroup, Stack, Text, Title } from "@mantine/core"
import CategoryBadge from "../../components/CategoryBadge"
import { useMediaQuery } from "@mantine/hooks";

const ProductInfoArea = ({ elem }: { elem: Product }) => {
    const isSP = useMediaQuery('(max-width: 820px)')
    return (
        <Paper>
            <CategoryBadge category={elem.category} />
            <Title c={"var(--mantine-primary-color-filled)"}>{elem.name}</Title>
            <Flex gap={16} align={isSP ? "stretch" : "flex-start"} direction={isSP ? "column" : "row"}>
                <Image w={isSP ? "100%" : "33%"} alt={`${elem.sumnail}のサムネイル`} src={`/fuses-portforio/product_sumnails/${elem.sumnail}`} style={{ flex: 0 }} />
                <Stack w={isSP ? "100%" : "stretch"} style={{ flex: 1 }} gap={16}>
                    <Text c={"var(--mantine-primary-color-filled)"} fz={24}>¥{elem.price}</Text>
                    <Divider />
                    <Paper bg={"var(--mantine-primary-color-light-hover)"} radius={16} p={"16px 24px"}>
                        <Title order={2} c={"var(--mantine-primary-color-filled)"}>ストアページに行く</Title>
                        <Flex pt={16} gap={16}>
                            <Button leftSection={<span className="material-symbols-outlined">open_in_new</span>} style={{ flex: 1 }} color="#ff5c67" component="a" href={elem.link_booth} disabled={elem.link_booth == undefined}>BOOTH</Button>
                            <Button leftSection={<span className="material-symbols-outlined">open_in_new</span>} style={{ flex: 1 }} color="#0c98da" component="a" href={elem.link_vket} disabled={elem.link_vket == undefined}>VketStore</Button>
                        </Flex>
                    </Paper>
                    <Divider />
                    <PillGroup>
                        {
                            elem.tag.map(e => (
                                <Pill key={e}>
                                    {e}
                                </Pill>
                            ))
                        }
                    </PillGroup>
                    <Divider />
                    <Text>
                        {elem.desc}
                    </Text>
                </Stack>
            </Flex>
        </Paper>
    )
}
export default ProductInfoArea