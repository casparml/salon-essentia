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
        index: z.number(),
        name: z.string(),
        title: z.string(),
        color: z.string().optional(),
    })
});
// massages
const massagesCollection = defineCollection({
    schema: z.object({
        date: z.date(),
        index: z.number(),
        title: z.string(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
    })
});
// gezichtsbehandelingen
const gezichtsbehandelingenCollection = defineCollection({
    schema: z.object({
        date: z.date(),
        index: z.number(),
        title: z.string(),
        type: z.string(),
        duration: z.number().optional(),
        price: z.number(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
    })
});
// Producten
const productenCollection = defineCollection({
    schema: z.object({
        date: z.date(),
        index: z.number(),
        name: z.string(),
        brand: z.string(),
        content: z.number(),
        contentUnit: z.string(),
        type: z.string(),
        price: z.number(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
    })
});
// Schilderijen
const schilderijenCollection = defineCollection({
    schema: z.object({
        index: z.number().optional(),
        date: z.date(),
        name: z.string(),
        width: z.number(),
        height: z.number(),
        method: z.array(z.string()).optional(),
        material: z.string().optional(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
    })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'ervaringen': ervaringenCollection,
  'massages': massagesCollection,
  'schilderijen': schilderijenCollection,
  'gezichtsbehandelingen': gezichtsbehandelingenCollection,
  'producten': productenCollection,
};