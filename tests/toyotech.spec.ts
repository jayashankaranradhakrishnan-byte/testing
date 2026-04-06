// tests/toyotec.spec.ts

import { test } from '../base/testBase';
import { ToyotecPage } from '../pages/toyotech_pom';

test.describe('Toyotec Test Suite', () => {

  test('Toyotec Logo Section', async ({ page }) => {
    const toyotec = new ToyotecPage(page);
    await toyotec.logo_section();
  });

   test('Toyotec Header img Section', async ({ page }) => {
    const toyotec = new ToyotecPage(page);
    await toyotec.header_section();
    await toyotec.header2_section();
  });








});