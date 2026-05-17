import { test } from '../../fixtures/test-fixtures';
import { invalidKrsNumbers } from '../../data/invalid-krs-numbers';

for (const dataset of invalidKrsNumbers) {

    test(`Test negatywny wyszukiwania po KRS: ${dataset.krs}`, async ({ negativeFlow }) => {
        const result = await negativeFlow.searchInvalid(
          'krs',
          dataset.krs,
          dataset.expectedRegex
        );

      await result.assert();
    });

}