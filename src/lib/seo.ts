export type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildSeo(
  defaults: { seoTitle: string; seoDescription: string },
  input: SeoInput = {},
) {
  const title = input.title ? `${input.title} · Kevin Turnbull` : defaults.seoTitle;
  const description = input.description ?? defaults.seoDescription;
  return { title, description, image: input.image, path: input.path ?? "/" };
}
