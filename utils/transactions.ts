import { Alert } from "react-native";
import { Transaction } from "../types/Transaction";

/**
 * Funkcja usuwająca transakcję po ID
 */
export const deleteTransaction = (
  transactions: Transaction[],
  id: number,
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
) => {
  Alert.alert("Usuń Transakcję", "Czy na pewno chcesz usunąć tę transakcję?", [
    { text: "Anuluj", style: "cancel" },
    {
      text: "Usuń",
      onPress: () => {
        setTransactions(
          transactions.filter((transaction) => transaction.id !== id)
        );
      },
      style: "destructive",
    },
  ]);
};
