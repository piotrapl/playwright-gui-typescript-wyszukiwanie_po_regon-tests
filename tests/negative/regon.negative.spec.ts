import { test } from '../../fixtures/test-fixtures';
import { invalidRegons } from '../../data/invalid-regons';

/*
To jest test negatywny dla wyszukiwania REGON.
pierwszy parametr to opis testu, który będzie wyświetlany np. w raportach
*/
for (const dataset of invalidRegons) {

    test(`Test negetywny wyszukiwania po REGON: ${dataset.regon}`, async ({ negativeFlow }) => {
        const result = await negativeFlow.searchInvalid(          
          'regon',
          dataset.regon,
          dataset.expectedRegex
        );

      await result.assert();
    });

}

