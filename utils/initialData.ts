import { Transaction } from "../types/Transaction";

export const initialTransactions: Transaction[] = [
  {
    id: 1,
    title: "Wypłata",
    amount: 3000,
    category: "Inne",
    date: "22.03.2025",
  },
  {
    id: 2,
    title: "Zakupy",
    amount: -50,
    category: "Zakupy",
    date: "22.03.2025",
  },
  {
    id: 3,
    title: "Kino",
    amount: -20,
    category: "Inne",
    date: "22.03.2025",
  },
];
