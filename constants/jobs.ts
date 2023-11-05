// create enum of months starting with index 0 for january
export enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}


export const jobs = [
  {
    position: 'Frontend Developer',
    company: {
      name: 'Four of them',
      location: 'Zapresic, Croatia',
      url: 'https://www.4ofthem.eu/',
    },
    from: new Date(2022, Month.August),
    to: null,
    remote: true,
  },
  {
    position: 'Frontend Developer',
    company: {
      name: 'Cura4You',
      location: 'Cologne, Germany',
      url: 'https://cura4you.de',
    },
    from: new Date(2023, Month.June),
    to: new Date(2023, Month.October),
    remote: true,
  },
  {
    position: 'Junior Frontend Developer',
    company: {
      name: 'Three of them',
      location: 'Zapresic, Croatia ',
      url: 'https://www.3ofthem.eu/',
    },
    from: new Date(2021, Month.August),
    to: new Date(2022, Month.July),
    remote: true,
  },
  {
    position: 'Junior Full Stack Developer',
    company: {
      name: 'Infokarta',
      location: 'Split, Croatia',
      url: 'https://gis.infokarta.hr/',
    },
    from: new Date(2021, Month.May),
    to: new Date(2021, Month.July),
    remote: true,
  },
]
