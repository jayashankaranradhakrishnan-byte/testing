// pages/tansPage.ts

import { Page, expect, Locator } from '@playwright/test';

export class ToyotecPage 
{
 
  
  constructor(private readonly page: Page)
  {
    this.page = page;   
  }

  get logo() : Locator{
     return this.page.getByRole('img', { name: 'Dot Com Infoway' });
  }

  get banner_img() : Locator{
    return this.page.getByRole('img', { name: /banner-img/i })
  }

  get head_1() : Locator{
    return this.page.getByRole('heading', { name: 'Your Partner in AI Innovation' })
  }

   get head_2() : Locator{
    return this.page.locator("//p[contains(text(),'With 26+ years of technology leadership and now de')]")
  }

  get Get_A_Free_aI() : Locator{
    return this.page.getByRole('link', { name: 'Get A Free AI Consultation' })
  }

  get Explore_Our_AI () : Locator{
    return this.page.getByRole('link', { name: 'Explore Our AI Work' })
  }

  // =============================================================================================
  async logo_section() 
  {
   await this.page.waitForLoadState('domcontentloaded'); // or 'networkidle'
   await expect(this.logo).toBeVisible();
   console.log("Logo section verified");
  }

   async header_section() 
  {
   await expect(this.banner_img).toBeVisible();
   console.log("Banner image section verified");
   console.log("HEADER 1 : " + await this.head_1.textContent());

  await expect(this.head_2).toHaveText(
  'With 26+ years of technology leadership and now deep expertise in AI, We help businesses of every size turn bold ideas into smart solutions that fuel success.');

  await expect(this.Get_A_Free_aI).toBeVisible();
  await expect(this.Get_A_Free_aI).toBeEnabled();

  await expect(this.Explore_Our_AI).toBeVisible();
  await expect(this.Explore_Our_AI).toBeEnabled();
  
  await this.Get_A_Free_aI.click({ trial: true });
  await this.Explore_Our_AI.click({ trial: true });
  }

  //===================================================================================================

  get header2_h1() : Locator{
    return this.page.getByRole('heading', { name: /Smart AI Solutions for Even Smarter Businesses/i })
  }

  get header2_h2() : Locator{
    return this.page.getByText('Explore Our Core AI Services: Unlock Innovation and Drive Success with DCI’s Expertise.', { exact: true })
  }

  get smart_ai() : Locator{
    return this.page.locator('.owl-item:visible h3.aio-icon-title');
  }

  async header2_section()
  {
    const h1Text = await this.header2_h1.textContent();
    const h2Text = await this.header2_h2.textContent();

  console.log('H1:', h1Text);
  console.log('H2:', h2Text);

  await expect(this.header2_h1).toBeVisible();
  await expect(this.header2_h2).toBeVisible();
 
  await expect(this.header2_h1).toHaveText('Smart AI Solutions for Even Smarter Businesses');
  await expect(this.header2_h2).toHaveText(
    'Explore Our Core AI Services: Unlock Innovation and Drive Success with DCI’s Expertise.'
  );

  console.log('Total containers:', await this.smart_ai.count());

   console.log('Titles', await this.smart_ai.allTextContents());

   await expect(this.smart_ai).toHaveText([
    'AI Product Development',
    'Computer Vision Solutions',
    'Generative AI Solutions',
    'AI Video Generation',
    'AI Agent Development',
    'Machine Learning & Analytics',
    'AI Consulting Services',
    'Business Automation',
    'AI Advertising Services',
    'Chatbot Development',
    'Voicebot Development'
  ]);

  }







 
}