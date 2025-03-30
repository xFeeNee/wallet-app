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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ActionSheetIOS } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { layoutStyles } from "../styles/layoutStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { typographyStyles } from "../styles/typographyStyles";
import { modalStyles, switchStyles } from "../styles/modalStyles";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

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
  const [isExpense, setIsExpense] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Generowanie danych dla selektora iOS
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

  // Funkcja do konwersji formatu daty
  const formatDate = (dateObj: Date): string => {
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear().toString();
    return `${day}.${month}.${year}`;
  };

  // Funkcja do parsowania daty z formatu string do obiektu Date
  const parseDate = (dateString: string): Date => {
    if (!dateString) {
      return new Date();
    }
    const [day, month, year] = dateString.split(".");
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  };

  // Obsługa zmiany daty w DatePicker dla Androida
  const onDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ): void => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(formatDate(selectedDate));
    }
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

            {Platform.OS === "ios" ? (
              <View style={layoutStyles.datePickerContainer}>
                <View style={layoutStyles.datePickerColumn}>
                  <Text style={layoutStyles.datePickerLabel}>Dzień</Text>
                  <Picker
                    selectedValue={date.split(".")[0] || "01"}
                    onValueChange={(value) => {
                      const parts = date.split(".");
                      setDate(
                        `${value}.${parts[1] || "01"}.${parts[2] || "2025"}`
                      );
                    }}
                    style={layoutStyles.datePicker}
                  >
                    {days.map((day) => (
                      <Picker.Item
                        key={day}
                        label={day}
                        value={day.padStart(2, "0")}
                      />
                    ))}
                  </Picker>
                </View>

                <View style={layoutStyles.datePickerColumn}>
                  <Text style={layoutStyles.datePickerLabel}>Miesiąc</Text>
                  <Picker
                    selectedValue={date.split(".")[1] || "01"}
                    onValueChange={(value) => {
                      const parts = date.split(".");
                      setDate(
                        `${parts[0] || "01"}.${value}.${parts[2] || "2025"}`
                      );
                    }}
                    style={layoutStyles.datePicker}
                  >
                    {months.map((month) => (
                      <Picker.Item
                        key={month}
                        label={month.split(" - ")[1]}
                        value={month.split(" - ")[0]}
                      />
                    ))}
                  </Picker>
                </View>

                <View style={layoutStyles.datePickerColumn}>
                  <Text style={layoutStyles.datePickerLabel}>Rok</Text>
                  <Picker
                    selectedValue={date.split(".")[2] || "2025"}
                    onValueChange={(value) => {
                      const parts = date.split(".");
                      setDate(
                        `${parts[0] || "01"}.${parts[1] || "01"}.${value}`
                      );
                    }}
                    style={layoutStyles.datePicker}
                  >
                    {years.map((year) => (
                      <Picker.Item key={year} label={year} value={year} />
                    ))}
                  </Picker>
                </View>
              </View>
            ) : (
              <TouchableOpacity
                style={layoutStyles.inputField}
                onPress={() => setShowDatePicker(true)}
              >
                <Text>{date || "Wybierz datę"}</Text>
              </TouchableOpacity>
            )}

            {Platform.OS === "android" && showDatePicker && (
              <DateTimePicker
                value={parseDate(date)}
                mode="date"
                display="default"
                onChange={onDateChange}
              />
            )}

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
    </Modal>
  );
};

export default AddTransactionModal;
