interface navLink {
  route: string;
  name: string;
}

export const navLinks: navLink[] = [
  {
    route: '/',
    name: 'Store',
  },
  {
    route: '/apparel',
    name: 'Apparel',
  },
  {
    route: '/music',
    name: 'Music',
  },
  {
    route: '/contact',
    name: 'Contact',
  },
];

export const availableCountries: string[] = ['Rwanda', 'Burundi', 'uganda'];

export const availableCities: string[] = ['Huye', 'Kigali', 'Musanze', 'Nyabihu'];
