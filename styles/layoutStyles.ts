// layoutStyles.ts
import { Platform, StyleSheet } from "react-native";

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8", // Jasne tło
  },
  selectedDateItem: {
    backgroundColor: "#f0f0f0",
  },
  datePickerContainer: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 4,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  datePicker: {
    ...Platform.select({
      ios: {
        top: -68,
        height: 80,
      },
      android: {
        height: 50,
        width: "100%",
      },
    }),
    width: "100%",
  },
  datePickerColumn: {
    flex: 1,
    marginHorizontal: 2,
    backgroundColor: "white",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    overflow: "hidden",
    ...Platform.select({
      android: {
        height: 60,
      },
      ios: {
        paddingTop: 20, // Dodaj padding na górze dla iOS
      },
    }),
  },

  datePickerLabel: {
    textAlign: "center",
    padding: 4,
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    fontWeight: "500",
    ...Platform.select({
      android: {
        position: "absolute",
        top: -25,
        left: 0,
        right: 0,
        zIndex: 1,
      },
      ios: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      },
    }),
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
  },
  addTransactionButton: {
    backgroundColor: "#1976D2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },

  filterButtonSmall: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: "#1976D2",
    borderWidth: 1,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ccc", // Jasne obramowanie
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
    color: "#333",
  },
});
