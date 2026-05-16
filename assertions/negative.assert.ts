import { expect, Locator } from '@playwright/test';

/* To jest deklaracja klasy NegativeAssert, używanej do asercji negatywnych w testach.
   pola messageLocator i expectedRegex - są przekazywane do konstruktora,

   gdyby nie były private, byłyby publiczne i mogłyby być modyfikowane z zewnątrz klasy, 
   co mogłoby prowadzić do niepożądanych skutków ubocznych.

   metoda assert() - sprawdza, czy tekst z messageLocator zawiera się w expectedRegex.
*/
export class NegativeAssert {
  constructor(
    private messageLocator: Locator,
    private expectedRegex: RegExp
  ) {}

  async assert(): Promise<void> {

    await expect(this.messageLocator).toContainText(this.expectedRegex);
  }
}