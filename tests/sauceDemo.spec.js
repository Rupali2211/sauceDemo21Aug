const{test}=require('@playwright/test');
import env from '../env/env.config.js';

test("@Regression End to End flow",async({page})=>{

   //const browser= await chromium.launch({headless:false});

   //const context=await browser.newContext();

   //const page=await context.newPage();

   await page.goto(env.BASE_URL);

   //await page.waitForTimeout(3000);

   await page.getByPlaceholder("Username").fill("standard_user");
      await page.waitForTimeout(3000);


   await page.getByPlaceholder("Password").fill("secret_sauce");

   await page.locator("#login-button").click();

   await page.waitForTimeout(3000);

   await page.locator("//select[@class='product_sort_container']").selectOption({label:'Price (high to low)'});

   await page.locator("#add-to-cart-sauce-labs-fleece-jacket").click();

   await page.locator("#shopping_cart_container").click();

   await page.waitForTimeout(3000);
   console.log("Amruta write Tc1");

   console.log("Rupali write TC2");
   console.log("Amruta Write TC 3");

   console.log("Tc4 write by Rupali")




});