export const invalidRegons = [

    {
        regon: '12345678   ',
        description: 'Liczba znaków w polu REGON (8) jest inna niż 9 lub 14',
        expectedRegex: /długość|liczba|zawiera|zawierać|.*9.*14|znaków/i
    },
    {
      title: 'Liczba znaków w polu REGON (10) jest inna niż 9 lub 14',
      regon: '1234567891',
      expectedRegex: /długość|liczba|zawiera|zawierać|.*9.*14|znaków/i
    }

]