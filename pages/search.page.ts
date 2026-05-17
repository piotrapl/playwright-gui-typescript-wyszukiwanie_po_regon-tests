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

// getInput - metoda pomocnicza, zwraca odpowiedni element input w zależności od typu wyszukiwania.