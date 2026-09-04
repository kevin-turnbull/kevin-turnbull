import { test, expect } from "@playwright/test";

test("home to work to contact journey", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Kevin Turnbull" })).toBeVisible();
  await page.getByRole("link", { name: "Selected work" }).first().click();
  await expect(page).toHaveURL(/\/work/);
  await page.getByRole("link", { name: /Platform consolidation/i }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Platform consolidation");
  await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/\/contact/);
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
});
