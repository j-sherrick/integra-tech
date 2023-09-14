import { z, defineCollection } from 'astro:content';

const servicesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        jumbotron: z.string(),
        icon: z.any(),
    })
});

export const collections = {
    'services': servicesCollection,
};