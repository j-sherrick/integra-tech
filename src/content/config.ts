import { z, defineCollection } from 'astro:content';

const servicesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.object({
            icon: z.string(),
            cover: z.string(),
            article: z.string(),
        })
    })
});

export const collections = {
    'services': servicesCollection,
};