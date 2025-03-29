import React, { useState } from "react";
import {
  Modal,
  View,
  TextInput,
  Alert,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  Switch,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ActionSheetIOS } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { layoutStyles } from "../styles/layoutStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { typographyStyles } from "../styles/typographyStyles";
import { modalStyles, switchStyles } from "../styles/modalStyles";

interface AddTransactionModalProps {
  visible: boolean;
  onClose: () => void;
  onAddTransaction: (transaction: {
    id: number;
    title: string;
    amount: number;
    category: string;
    date: string;
  }) => void;
}

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  visible,
  onClose,
  onAddTransaction,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [transactionType, setTransactionType] = useState("income");
  const [isExpense, setIsExpense] = useState(false);
  const [showDateSelector, setShowDateSelector] = useState(false);

  // Generowanie danych dla selektora
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    "01 - Styczeń",
    "02 - Luty",
    "03 - Marzec",
    "04 - Kwiecień",
    "05 - Maj",
    "06 - Czerwiec",
    "07 - Lipiec",
    "08 - Sierpień",
    "09 - Wrzesień",
    "10 - Październik",
    "11 - Listopad",
    "12 - Grudzień",
  ];
  const years = Array.from({ length: 20 }, (_, i) => (2025 - i).toString());

  const categoryOptions = [
    "Jedzenie 🍔",
    "Transport 🚗",
    "Zakupy 🛍️",
    "Rachunki 💳",
    "Inne 🔄",
  ];

  const handleDateSelect = (day: string, month: string, year: string) => {
    const currentMonth = month.split(" - ")[0]; // Rozdziel miesiąc na numer i nazwę
    const formattedDate = `${day.padStart(2, "0")}.${currentMonth}.${year}`;
    setDate(formattedDate);
    setShowDateSelector(false);
  };

  const handleAddTransaction = () => {
    if (!title || !amount || !category || !date) {
      Alert.alert("Błąd", "Wszystkie pola są wymagane.");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title,
      amount: isExpense ? -parseFloat(amount) : parseFloat(amount),
      category,
      date,
    };

    onAddTransaction(newTransaction);
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    setIsExpense(false);
    onClose();
  };

  const DateSelectorModal = () => (
    <Modal visible={showDateSelector} transparent animationType="slide">
      <View style={modalStyles.modalBackground}>
        <View style={modalStyles.modalContainer}>
          <View style={modalStyles.modalHeader}>
            <Text style={modalStyles.modalTitle}>📅 Wybierz datę</Text>
            <TouchableOpacity onPress={() => setShowDateSelector(false)}>
              <Icon name="times" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", height: 200 }}>
            <FlatList
              data={days}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    layoutStyles.dateItem,
                    date.startsWith(item.padStart(2, "0")) &&
                      layoutStyles.selectedDateItem,
                  ]}
                  onPress={() =>
                    handleDateSelect(
                      item,
                      date.split(".")[1],
                      date.split(".")[2]
                    )
                  }
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />

            <FlatList
              data={months}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    layoutStyles.dateItem,
                    date.split(".")[1] === item.split(" - ")[0] &&
                      layoutStyles.selectedDateItem,
                  ]}
                  onPress={() =>
                    handleDateSelect(
                      date.split(".")[0],
                      item.split(" - ")[0],
                      date.split(".")[2]
                    )
                  }
                >
                  <Text>{item.split(" - ")[1]}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />

            <FlatList
              data={years}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    layoutStyles.dateItem,
                    date.endsWith(item) && layoutStyles.selectedDateItem,
                  ]}
                  onPress={() =>
                    handleDateSelect(
                      date.split(".")[0],
                      date.split(".")[1],
                      item
                    )
                  }
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={modalStyles.modalBackground}
      >
        <View style={modalStyles.modalContainer}>
          <View style={modalStyles.modalHeader}>
            <Text style={modalStyles.modalTitle}>➕ Dodaj nową transakcję</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="times" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <ScrollView style={modalStyles.modalBody}>
            <TextInput
              style={layoutStyles.inputField}
              placeholder="Nazwa"
              value={title}
              onChangeText={setTitle}
            />

            <TextInput
              style={layoutStyles.inputField}
              placeholder="Kwota"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />

            <TouchableOpacity
              style={layoutStyles.inputField}
              onPress={() => setShowDateSelector(true)}
            >
              <Text>{date || "Wybierz datę..."}</Text>
            </TouchableOpacity>

            {Platform.OS === "ios" ? (
              <TouchableOpacity
                style={layoutStyles.inputField}
                onPress={() =>
                  ActionSheetIOS.showActionSheetWithOptions(
                    {
                      options: [...categoryOptions, "Anuluj"],
                      cancelButtonIndex: categoryOptions.length,
                    },
                    (buttonIndex) => {
                      if (buttonIndex !== categoryOptions.length) {
                        setCategory(categoryOptions[buttonIndex]);
                      }
                    }
                  )
                }
              >
                <Text>{category || "Wybierz kategorię"}</Text>
              </TouchableOpacity>
            ) : (
              <View style={layoutStyles.inputField}>
                <Picker
                  selectedValue={category}
                  onValueChange={setCategory}
                  style={{ height: 50, width: "100%" }}
                >
                  <Picker.Item label="Wybierz kategorię" value="" />
                  {categoryOptions.map((option) => (
                    <Picker.Item label={option} value={option} key={option} />
                  ))}
                </Picker>
              </View>
            )}
          </ScrollView>

          <View style={switchStyles.switchContainer}>
            <Text
              style={[
                switchStyles.switchLabel,
                !isExpense && switchStyles.activeLabel,
              ]}
            >
              Przychód
            </Text>
            <Switch
              trackColor={{ false: "#4CAF50", true: "#F44336" }}
              thumbColor="#fff"
              onValueChange={() => setIsExpense(!isExpense)}
              value={isExpense}
            />
            <Text
              style={[
                switchStyles.switchLabel,
                isExpense && switchStyles.activeLabel,
              ]}
            >
              Wydatek
            </Text>
          </View>

          <View style={modalStyles.modalFooter}>
            <TouchableOpacity
              style={buttonStyles.primaryButton}
              onPress={handleAddTransaction}
            >
              <Text style={typographyStyles.filterButtonText}>
                DODAJ TRANSAKCJĘ
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={buttonStyles.secondaryButton}
              onPress={onClose}
            >
              <Text style={typographyStyles.filterButtonText}>ANULUJ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      <DateSelectorModal />
    </Modal>
  );
};

export default AddTransactionModal;
