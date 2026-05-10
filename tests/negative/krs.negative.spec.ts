import { test } from '../../fixtures/test-fixtures';
import { invalidKrsNumbers } from '../../data/invalid-krs-numbers';

for (const dataset of invalidKrsNumbers) {

    test(`KRS negative search: ${dataset.krs}`, async ({ negativeFlow }) => {
        const result = await negativeFlow.searchInvalid(
          'krs',
          dataset.krs,
          dataset.expectedRegex
        );

      await result.assert();
    });

}