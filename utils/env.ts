type Environment = {
  baseURL: string;
};

// ENVIRONMENTS: Record<string, Environment> - to jest typowanie obiektu ENVIRONMENTS, 
// gdzie klucz jest typu string, a wartość typu Environment. Dzięki temu TypeScript 
// będzie mógł zapewnić odp. typowanie i autouzupełnianie podczas korzystania z tego obiektu.
const ENVIRONMENTS: Record<string, Environment> = {
  prod: {
    baseURL: 'https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx'
  },
  staging: {
    baseURL: 'https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx'
  }
};

const selectedEnvironment = 'prod';

export const ENV = ENVIRONMENTS[selectedEnvironment];