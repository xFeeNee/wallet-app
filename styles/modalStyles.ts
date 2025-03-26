import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
  // Tło modalu
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Półprzezroczyste tło
  },

  // Kontener dla całego modalu
  modalContainer: {
    backgroundColor: "#fff", // Białe tło modalu
    width: "80%", // Szerokość modalu dostosowana do ekranu
    padding: 20,
    borderRadius: 15, // Zaokrąglone rogi
    alignItems: "center",
  },

  // Nagłówek modalu (dodajemy większy tytuł)
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#1976D2", // Kolor niebieski
  },

  // Styl dla przycisków w modalnym formularzu
  buttonContainer: {
    flexDirection: "column",
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },

  // Styl dla każdego Picker'a
  pickerContainer: {
    marginBottom: 20,
    width: "100%",
  },

  // Dodatkowe stylizowanie dla inputów
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
    width: "100%",
    backgroundColor: "#fff",
    color: "#333",
  },
  filterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Półprzezroczyste tło
    padding: 20,
  },
  // Ikona i tekst przycisku sortowania
  sortIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  // Styl dla ikon sortowania
  sortIconText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#1976D2", // Kolor niebieski
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 20,
    alignItems: "center",
  },
});
