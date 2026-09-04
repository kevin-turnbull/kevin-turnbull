import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parse as parseYaml } from "yaml";
import { getCollection } from "astro:content";

export type SocialLink = { label: string; href: string };
export type SiteProfile = {
  fullName: string;
  shortName: string;
  headline: string;
  supportingSentence: string;
  availability: "open" | "selective" | "unavailable";
  locationLabel?: string;
  timeZone?: string;
  email: string;
  socialLinks: SocialLink[];
  heroImage: string;
  portraitImage?: string;
  resumePdf?: string;
  seoTitle: string;
  seoDescription: string;
  contact: {
    responseExpectation: string;
    engagementNotes: string;
    formEndpoint?: string;
  };
};

export function getProfile(): SiteProfile {
  const file = resolve("src/content/profile/site.yaml");
  return parseYaml(readFileSync(file, "utf8")) as SiteProfile;
}

export async function getFeaturedCaseStudies() {
  const items = await getCollection("caseStudies", ({ data }) => !data.draft && data.featuredRank != null);
  return items.sort((a, b) => (a.data.featuredRank ?? 99) - (b.data.featuredRank ?? 99));
}

export async function getPublishedWriting() {
  const items = await getCollection("writing", ({ data }) => !data.draft);
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getCareer() {
  const items = await getCollection("career");
  return items.sort((a, b) => b.data.start.localeCompare(a.data.start));
}

export async function getPhilosophy() {
  const items = await getCollection("philosophy");
  return items.sort((a, b) => a.data.order - b.data.order);
}
