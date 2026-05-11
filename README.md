# Playwright + TypeScript UI Tests — searching a business entity by REGON/NIP/KRS number

## Krótki opis projektu (PL)

Projekt prezentuje automatyczne testy UI wykonane w frameworku Playwright z użyciem TypeScript.  
Testy weryfikują wyszukiwanie podmiotów gospodarczych w publicznej wyszukiwarce REGON.  

Zakres projektu obejmuje:
- przypadki pozytywne i negatywne,
- testowanie formularzy wyszukiwania,
- walidację komunikatów UI,
- Page Object Model (POM),
- dane testowe oddzielone od logiki testów,
- nowoczesny stack QA Automation: Playwright + TypeScript.

Projekt został przygotowany jako portfolio QA Automation Engineer.

---

# Playwright TypeScript Entities UI Tests

UI automated tests for the Polish REGON business entity search engine built with:

- Playwright
- TypeScript
- Page Object Model (POM)

The project focuses on validating business entity searches using REGON numbers through the web interface.

---

## Tested Application

Public REGON search engine:

[REGON Search Engine](https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx?utm_source=chatgpt.com)

---

# Main Features

- UI end-to-end testing with Playwright
- TypeScript-based test architecture
- Positive and negative test scenarios
- Page Object Model implementation
- Reusable flows and assertions
- Data-driven tests
- HTML reporting
- GitHub Actions CI ready

---
# Architecture Overview

The project uses layered architecture:

### Layer	Responsibility
Tests  -  Define business scenarios
Flows  -  Execute reusable business actions
Assertions  -  Validate expected behavior
Pages  -  UI interaction logic
Data  -  Test datasets
Fixtures  -  Dependency injection

# Example Scenario

### Negative REGON search flow:

Open REGON website
Enter invalid REGON number
Click search button
Verify UI error message:
Nie znaleziono podmiotu

## Technologies
Technology	Purpose
Playwright	UI automation
TypeScript	Strong typing
Node.js	Runtime
HTML Reporter	Test reporting
GitHub Actions	CI/CD

## Installation
Clone repository
git clone https://github.com/piotrapl/playwright-typescript-entities-ui-tests.git
Install dependencies
npm install
Install Playwright browsers
npx playwright install

## How to run Tests
- Run all tests
npx playwright test
- Run negative tests
npx playwright test tests/negative

- Run specific file
npx playwright test tests/negative/regon.negative.spec.ts
HTML Report

## Generate and open Playwright HTML report:

npx playwright show-report

## Example Code
### Example Test
test(`REGON negative search`, async ({ negativeFlow }) => {
  const result = await negativeFlow.searchInvalid(
    'regon',
    '123456789'
  );

  await result.assert();
});

## Key Playwright Concepts Used

### Page Object Model (POM)
UI locators and actions are separated from test logic.

### Fixtures as Dependency Injection
Reusable objects are injected into tests.

### Async/Await Synchronization
Modern asynchronous handling with Playwright.

### Data-Driven Testing
Multiple datasets executed in loops.

### Locator API
Reliable and readable UI element handling.

### CI/CD
The project is prepared for GitHub Actions pipelines.

## Typical CI steps:

-  checkout repository,
-  install dependencies,
-  install browsers,
-  run tests,
-  generate HTML reports.

## This repository demonstrates:

-  scalable Playwright architecture,
-  modern TypeScript practices,
-  maintainable automated UI testing,
-  separation of concerns in test automation.
