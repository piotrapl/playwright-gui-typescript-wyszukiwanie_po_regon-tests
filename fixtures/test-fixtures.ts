import { test as base } from '@playwright/test';
import { SearchPage } from '../pages/search.page';
import { NegativeFlow } from '../flows/negative.flow';

/*
  Fixtures to nie jest słowo kluczowe, 
  ale jest to konwencja w Playwright do organizowania kodu testowego.
  Musimy użyć nazwy "Fixtures", a nie np. "MyFixtures" - Playwright oczekuje tej nazwy, 
  by poprawnie zidentyfikować i użyć tych danych w testach.
 */ 
type Fixtures = {
  negativeFlow: NegativeFlow;
};

export const test = base.extend<Fixtures>({
  negativeFlow: async ({ page }, use) => {
    const searchPage = new SearchPage(page);
    const negativeFlow = new NegativeFlow(searchPage);

    await use(negativeFlow);
  }
  
});

test.afterEach(async ({ page }, testInfo) => {
  const screenshot = await page.screenshot();

  await testInfo.attach('screenshot', {
    body: screenshot,
    contentType: 'image/png'
  });

  });