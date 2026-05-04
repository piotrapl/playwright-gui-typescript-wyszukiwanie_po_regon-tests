import { test as base } from '@playwright/test';
import { allure } from 'allure-playwright';

import { SearchPage } from '../pages/search.page';
import { NegativeFlow } from '../flows/negative.flow';