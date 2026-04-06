// base/testBase.ts

import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
   
    await page.goto('https://www.dotcominfoway.com/'); 
    await use(page);

  }
});

export { expect } from '@playwright/test';