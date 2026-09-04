import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    organization: z.string(),
    timeframe: z.string(),
    role: z.string(),
    domains: z.array(z.string()).default([]),
    featuredRank: z.number().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['essay', 'talk', 'note']),
    date: z.coerce.date(),
    abstract: z.string(),
    externalUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const career = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/career' }),
  schema: z.object({
    organization: z.string(),
    title: z.string(),
    start: z.string(),
    end: z.string(),
    focus: z.string(),
  }),
});

const philosophy = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/philosophy' }),
  schema: z.object({
    title: z.string(),
    body: z.string(),
    order: z.number(),
  }),
});

export const collections = { caseStudies, writing, career, philosophy };
