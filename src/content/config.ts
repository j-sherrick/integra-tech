import { z, defineCollection } from 'astro:content';

const servicesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        jumbotron: z.string(),
    })
});

export const collections = {
    'services': servicesCollection,
};