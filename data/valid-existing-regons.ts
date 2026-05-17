export const validExistingRegons = [
    {
      title: 'prawidłowy REGON 9-cyfrowy',
      regon: '350637551',
      expectedCompanyRegex: /RADIO MUZYKA FAKTY GRUPA RMF/i
    },
    {
      title: 'prawidłowy REGON 14-cyfrowy',
      regon: '01041897300057',
      expectedCompanyRegex: /TELEWIZJA POLSKA.*RZESZOWIE|TELEWIZJA POLSKA.*RZESZÓW/i
    }
]