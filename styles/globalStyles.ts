import { StyleSheet } from "react-native";
import AddTransactionModal from "../components/AddTransactionModal";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f8",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#1976D2",
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
  balanceTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1976D2",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
    width: "100%",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#F44336",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  filterContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    width: "90%",
    alignSelf: "center",
  },
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
    color: "#4CAF50", // Zielony dla przychodów
  },
  expense: {
    color: "#F44336", // Czerwony dla wydatków
  },
  transactionCategory: {
    fontSize: 12,
    color: "#555",
  },
  deleteButton: {
    backgroundColor: "#FF6347",
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  sortIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
    width: "50%",
    justifyContent: "center",
  },
  sortIconText: {
    marginLeft: 8,
    fontWeight: "600",
    color: "#1976D2",
  },
  filterButton: {
    backgroundColor: "#1976D2",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  cancelButton: {
    backgroundColor: "#F44336",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },
  resetIconText: {
    marginLeft: 8,
    fontWeight: "600",
    color: "#F44336",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
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
  addTransactionButton: {
    flexDirection: "row",
    backgroundColor: "#2196F3",
    paddingVertical: 8, // ⬇️ Zmniejszony padding (bardziej kompaktowe)
    paddingHorizontal: 15, // ⬇️ Mniejsze marginesy
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flex: 1, // Przyciski zajmują równą przestrzeń
    marginRight: 10,
    height: 45, // 🔄 Dopasowanie wysokości do ikonki filtra
  },
  addTransactionText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
  },
  filterButtonSmall: {
    backgroundColor: "#E3F2FD",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45, // 🔄 Ujednolicenie wysokości z przyciskiem "Dodaj Transakcję"
  },
});
