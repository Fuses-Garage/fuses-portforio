import { Image, Text, Button, Group, Stack, ModalContent, ModalRoot, ModalOverlay, ModalBody } from '@mantine/core';
import { Product } from '../../../const/Products';

interface Props {
    product: Product | null
    opened: boolean
    onClose: () => void
}
const ProductModal = (props: Props) => {
    return (
        <ModalRoot maw={"500"} opened={props.opened} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent shadow="sm" p="lg" radius="md" >
                <ModalBody>
                    <Stack justify="space-between" h={"100%"}>
                        <Stack align='center'>
                            <Image
                                maw={320}
                                src={`${import.meta.env.BASE_URL}product_sumnails/${props.product?.sumnail}`}
                                alt="Norway"
                            />

                            <Group justify="space-between" mt={4}>
                                <Text fw={500}>{props.product?.name}</Text>
                            </Group>

                            <Text size="sm" c="dimmed">
                                {props.product?.desc}
                            </Text>
                            <Text fz={32} c="var(--mantine-primary-color-filled)">
                                ¥{props.product?.price}
                            </Text>
                        </Stack>

                        <Button fullWidth mt="md" radius="md" onClick={() => window.open(props.product?.link, '_blank')}>
                            商品ページを開く(外部サイト)
                        </Button>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </ModalRoot>

    )
}
export default ProductModal