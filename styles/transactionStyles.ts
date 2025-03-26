import { StyleSheet } from "react-native";

export const transactionStyles = StyleSheet.create({
  // Kontener dla salda
  balanceContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
  },

  balanceTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1976D2",
  },

  // Kontener dla pojedynczej transakcji
  transactionContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    width: "100%",
    maxWidth: 360,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "flex-start",
  },

  // Sekcja z informacjami o transakcji
  transactionInfo: {
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  transactionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  transactionDate: {
    fontSize: 14,
    color: "#888",
  },

  // Szczegóły transakcji (kwota i kategoria)
  transactionDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },

  // Kwota transakcji (pozytywna/negatywna)
  transactionAmount: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 10,
  },

  expense: {
    color: "#F44336", // Czerwony dla wydatków
  },

  income: {
    color: "#4CAF50", // Zielony dla przychodów
  },

  // Kategoria transakcji (tekst z emoji)
  transactionCategory: {
    fontSize: 18, // Zwiększenie rozmiaru czcionki
    color: "#1976D2", // Kolor niebieski dla kategorii
    fontFamily: "Poppins", // Opcjonalnie użyj czcionki Poppins
    fontWeight: "600", // Pogrubienie
    textTransform: "capitalize", // Pierwsza litera dużą
    marginLeft: 10, // Odstęp od kwoty
    letterSpacing: 0.5, // Rozstawienie liter
    lineHeight: 24, // Wyrównanie tekstu
    alignItems: "center", // Wyrównanie emoji i tekstu w poziomie
  },

  // Przycisk "Usuń"
  deleteButton: {
    backgroundColor: "#F44336", // Czerwony
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },

  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  // Poprawienie emoji
  emoji: {
    fontSize: 24, // Zwiększenie rozmiaru emoji
    marginRight: 5, // Lekki odstęp od tekstu
  },
});
