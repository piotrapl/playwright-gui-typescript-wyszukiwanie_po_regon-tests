import { test } from '../../fixtures/test-fixtures';
import { invalidRegons } from '../../data/invalid-regons';

/*
To jest test negatywny dla wyszukiwania REGON.
1-szy parametr to opis testu, który będzie wyświetlany np. w raportach
2-gi parametr:   async ({ negativeFlow }) => {
       to jest funkcja testowa, która jest asynchroniczna (async) i przyjmuje obiekt z różnymi "flow"ami, 
       - tutaj z negativeFlow - instancją klasy NegativeFlow.
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

