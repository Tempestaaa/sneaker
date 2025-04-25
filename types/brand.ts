export const BRANDS = [
  "Nike",
  "Adidas",
  "Puma",
  "New Balance",
  "Converse",
  "Vans",
  "Reebok",
  "ASICS",
  "Under Armour",
  "Balenciaga",
  "Alexander McQueen",
  "Gucci",
] as const;

export type Brand = (typeof BRANDS)[number] | string;
