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
