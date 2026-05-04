import { expect, Locator } from '@playwright/test';

export class NegativeAssert {
  constructor(
    //private apiResponse: ApiResponse,
    private messageLocator: Locator,
    private expectedRegex: RegExp
  ) {}

  async assert(): Promise<void> {

    await expect(this.messageLocator).toContainText(this.expectedRegex);
  }
}