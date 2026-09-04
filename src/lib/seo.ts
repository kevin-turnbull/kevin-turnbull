export type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildSeo(
  defaults: { seoTitle: string; seoDescription: string; heroImage?: string },
  input: SeoInput = {},
  site?: URL | string,
) {
  const title = input.title ? `${input.title} · Kevin Turnbull` : defaults.seoTitle;
  const description = input.description ?? defaults.seoDescription;
  const siteBase = typeof site === "string" ? site : site?.href;
  const rawImage = input.image ?? defaults.heroImage;
  let image = rawImage;
  if (rawImage && siteBase) {
    try {
      image = new URL(rawImage, siteBase).href;
    } catch {
      image = rawImage;
    }
  }
  return { title, description, image, path: input.path ?? "/" };
}
