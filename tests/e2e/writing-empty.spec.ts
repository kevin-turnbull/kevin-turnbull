import { test, expect } from "@playwright/test";

test("shows designed empty state when writing list is empty", async ({ page }) => {
  await page.goto("/writing/empty-preview");
  await expect(page.getByRole("heading", { name: "Notes forthcoming" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Selected work" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Contact" }).first()).toBeVisible();
});
