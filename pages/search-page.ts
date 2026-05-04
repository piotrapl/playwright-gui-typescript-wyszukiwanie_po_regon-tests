import { Locator, Page } from '@playwright/test';
import { ENV } from '../utils/env';

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

    async searchBy(type: SearchType, value: string) {
    await this.getInput(type).fill(value);

    await this.page.locator('#btnSzukaj').click();

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