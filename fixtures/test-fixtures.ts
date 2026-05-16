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

/*
test = base.extend<Fixtures>({           - tu tworzymy nowy test, który rozszerza podstawowy test Playwright (base) 
   o dodatkowe funkcjonalności zdefiniowane w Fixtures.
negativeFlow: async ({ page }, use) => { - definiuje nową funkcję asynchroniczną - będzie ona dostępna w testach jako "negativeFlow". 
   Ta f-cja przyjmuje: 1. obiekt z właściwością "page" 
                  oraz 2. funkcję "use" używaną do przekazania utworzonego obiektu do testów.
*/
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

// zapis extend<Fixtures> - tzn., że rozszerzamy podstawowy test o dodatkowe funkcjonalności 
//    zdefiniowane w Fixtures.
// dzięki temu w testach możemy używać "negativeFlow" jako argumentu, 
//    będzie on dostępny dzięki tej definicji.

// test.afterEach( - to jest tzw. hook, który jest wykonywany po każdym teście.