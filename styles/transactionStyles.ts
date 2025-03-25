import { StyleSheet } from "react-native";

export const transactionStyles = StyleSheet.create({
  transactionContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  transactionDate: {
    fontSize: 12,
    color: "#888",
  },
  transactionDetails: {
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  income: {
    color: "#4CAF50",
  },
  expense: {
    color: "#F44336",
  },
  transactionCategory: {
    fontSize: 12,
    color: "#555",
  },

  balanceContainer: {
    backgroundColor: "#E3F2FD",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
});
