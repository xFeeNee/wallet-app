// modalStyles.ts
import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    width: "85%", // Szerokość modal
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderColor: "#1976D2",
    borderWidth: 1,
  },
  picker: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderColor: "#1976D2",
    borderWidth: 1,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },
  sortIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  filterContainer: {
    padding: 20,
    alignItems: "center",
  },

  // Zaktualizowanie przycisków z obramowaniem i zaokrąglonymi rogami
  filterButton: {
    backgroundColor: "#1976D2",
    paddingVertical: 16,
    borderRadius: 12,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
    borderColor: "#1976D2", // Dodanie obramowania
    borderWidth: 1, // Obramowanie przycisku
  },
  cancelButton: {
    backgroundColor: "#F44336",
    paddingVertical: 16,
    borderRadius: 12,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
    borderColor: "#F44336", // Obramowanie przycisku
    borderWidth: 1, // Obramowanie przycisku
  },
  addTransactionButton: {
    backgroundColor: "#1976D2",
    paddingVertical: 16,
    borderRadius: 12,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
    borderColor: "#1976D2", // Dodane obramowanie
    borderWidth: 1, // Obramowanie przycisku
  },
});
