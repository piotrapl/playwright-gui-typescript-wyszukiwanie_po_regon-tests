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