import { SearchPage, SearchType } from '../pages/search.page';
import { NegativeAssert } from '../assertions/negative.assert';

/*
   dzięki temu, że jest osobna klasa NegativeFlow, łatwo jest zarządzać logiką testów negatywnych
   w jednym miejscu.
   bez niej logika testów negatywnych byłaby rozproszona po różnych testach.
*/
export class NegativeFlow {
  constructor(private searchPage: SearchPage) {}

  async searchInvalid(
    type: SearchType,
    value: string,
    expectedRegex: RegExp
  ): Promise<NegativeAssert> {
    await this.searchPage.open();

    const apiResponse = await this.searchPage.searchBy(type, value);

    return new NegativeAssert(
      // apiResponse,
      this.searchPage.messageLocator,
      expectedRegex
    );
  }
}

/*
   searchInvalid - metoda wykonują negatywny scenariusz testowy. Przyjmuje trzy argumenty:
    type - typ wyszukiwania (np. po nazwie, po ID itp.)
    value - wartość, której szukamy (np. nieistniejąca nazwa, nieprawidłowe ID itp.)
    expectedRegex - wyrażenie regularne, które powinno pasować do komunikatu błędu zwracanego przez aplikację.
      searchInvalid wykonuje wyszukiwanie za pomocą searchBy i zwraca instancję NegativeAssert,
      (będzie używana do asercji w testach negatywnych.)
   */