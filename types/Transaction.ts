// types/Transaction.ts
type Category =
  | "Jedzenie 🍔"
  | "Transport 🚗"
  | "Zakupy 🛍️"
  | "Rachunki 💳"
  | "Inne 🔄";

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: String;
  date: string;
}
