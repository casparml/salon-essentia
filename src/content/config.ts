// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
// Pages
// const pagesCollection = defineCollection({
//     schema: z.object({
//         index: z.number(),
//         title: z.string(),
//         subtitle: z.string(),
//         image: z.string().optional(),
//         description: z.string(),
//         tags: z.array(z.string()),
//         color: z.string().optional(),
//         bold: z.boolean().optional(),
//         carousel: z.boolean().optional(),
//     })
// });
// ervaringen
const ervaringenCollection = defineCollection({
    schema: z.object({
        index: z.string(),
        name: z.string(),
        title: z.string(),
        color: z.string().optional(),
    })
});
// massages
const massagesCollection = defineCollection({
    schema: z.object({
        index: z.number(),
        title: z.string(),
        image: z.string().optional(),
    })
});
// Producten
const productenCollection = defineCollection({
    schema: z.object({
        index: z.number(),
        name: z.string(),
        date: z.date(),
        brand: z.string(),
        content: z.number(),
        contentUnit: z.string(),
        type: z.string(),
        price: z.number(),
        image: z.string().optional(),
    })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'ervaringen': ervaringenCollection,
//   'massages': massagesCollection,
  'producten': productenCollection,
};