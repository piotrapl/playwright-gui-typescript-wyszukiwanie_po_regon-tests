import { test as base } from '@playwright/test';
import { allure } from 'allure-playwright';

import { SearchPage } from '../pages/search.page';
import { NegativeFlow } from '../flows/negative.flow';

type Fixtures = {
  negativeFlow: NegativeFlow;
  positiveFlow: PositiveFlow;
};

export const test = base.extend<Fixtures>({
  negativeFlow: async ({ page }, use) => {
    const searchPage = new SearchPage(page);
    const negativeFlow = new NegativeFlow(searchPage);

    await use(negativeFlow);
  }