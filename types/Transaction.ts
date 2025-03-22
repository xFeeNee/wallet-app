export type Category =
  | "Jedzenie"
  | "Transport"
  | "Zakupy"
  | "Rachunki"
  | "Inne";

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: Category;
  date: string;
}

// 🔹 Lista dostępnych kategorii (dzięki export łatwo ją zaimportujesz w innych plikach)
export const categoryOptions: Category[] = [
  "Jedzenie",
  "Transport",
  "Zakupy",
  "Rachunki",
  "Inne",
];
