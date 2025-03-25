import { StyleSheet } from "react-native";

export const typographyStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#1976D2",
  },
  balanceTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1976D2",
  },
  addTransactionText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resetIconText: {
    marginLeft: 8,
    fontWeight: "600",
    color: "#F44336",
  },
  sortIconText: {
    marginLeft: 8,
    fontWeight: "600",
    color: "#1976D2",
  },
  resetIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFEBEE",
    padding: 12,
    borderRadius: 10,
    width: "45%", // Dopasowanie szerokości
    justifyContent: "center",
  },

  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
