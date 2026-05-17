import { Locator, Page } from '@playwright/test';
import { ENV } from '../utils/env';
// typ wyszukiwania, który może być używany w metodzie searchBy.
// w jęz. TypeScript możemy definiować własne typy, 
// co pozwala nam na lepszą kontrolę nad tym, jakie wartości mogą być przekazywane do funkcji.
export type SearchType = 'regon' | 'nip' | 'krs';

export class SearchPage {
  constructor(private page: Page) {}

  get messageLocator(): Locator {
    return this.page.locator('#divInfoKomunikat');
  }

  get resultsTable(): Locator {
    return this.page.locator('#divListaJednostek');
  }

  get resultsRows(): Locator {
    return this.resultsTable.locator('tr').filter({ hasText: /\S/ });
  }

  async open(): Promise<void> {
    await this.page.goto(ENV.baseURL);
    await this.page.getByLabel('NIP', { exact: true }).waitFor();
  }

  async searchBy(type: SearchType, value: string) { 
    await this.getInput(type).fill(value);


    await this.page.locator('#btnSzukaj').click();

    //const response = await responsePromise;
    //const body = await response.json();

    return {
      //status: response.status(),
     //body
    };
  }

  async captureMessage(): Promise<string> {
    await this.messageLocator.waitFor();
    return await this.messageLocator.innerText();
  }

  private getInput(type: SearchType): Locator {
    if (type === 'regon') {
      return this.page.locator('#txtRegon');
    }

    if (type === 'nip') {
      return this.page.getByLabel('NIP', { exact: true });
    }

    return this.page.locator('#txtKrs');
  }
}

// async open(): Promise<void> - metoda otwierająca stronę wyszukiwania. 
//    używa metody goto do przejścia na określony URL (pobrany z ENV.baseURL) 
//    i czeka, aż element input dla NIP będzie dostępny.
// Promise<void> - oznacza, że ta metoda jest asynchroniczna i nie zwraca żadnej wartości (void), 
//    ale zwraca obietnicę (Promise), która zostanie rozwiązana gdy strona zostanie otwarta

// get messageLocator(): Locator - getter - zwraca locator dla elementu, który wyświetla komunikaty (np. błędy)

// get resultsTable(): Locator - getter - zwraca locator dla tabeli wyników wyszukiwania.

//get resultsRows(): Locator - getter - zwraca locator dla wierszy 
//     wyników wyszukiwania.

// getInput - metoda pomocnicza, zwraca odpowiedni element input w zależności od typu wyszukiwania.