import { test } from '../../fixtures/test-fixtures';
import { invalidRegons } from '../../data/invalid-regons';

/*
To jest test negatywny dla wyszukiwania REGON. 
*/
for (const dataset of invalidRegons) {

    test(`REGON negative search: ${dataset.regon}`, async ({ negativeFlow }) => {
        const result = await negativeFlow.searchInvalid(
          'regon',
          dataset.regon,
          dataset.expectedRegex
        );

      await result.assert();
    });

}

