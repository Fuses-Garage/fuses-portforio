import { Products } from '@/const/Products'
import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        {
            url: '/',
        },
        {
            url: '/about',
        },
        {
            url: '/product',
            priority: 0.5,
        },
        {
            url: '/',
        },
    ]
    const productPages = Products.map(e => {
        return {
            url: `/product/${e.id}`,
            priority: 1,
        }
    })
    return [...staticPages, ...productPages]
}