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

  const categoryOptions = [
    "Jedzenie 🍔",
    "Transport 🚗",
    "Zakupy 🛍️",
    "Rachunki 💳",
    "Inne 🔄",
  ];

  const handleAddTransaction = () => {
    if (!title || !amount || !category || !date) {
      Alert.alert("Błąd", "Wszystkie pola są wymagane.");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title,
      amount:
        transactionType === "income" ? parseFloat(amount) : -parseFloat(amount),
      category,
      date,
    };

    onAddTransaction(newTransaction);
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    setTransactionType("income");
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
          {/* Nagłówek */}
          <View style={modalStyles.modalHeader}>
            <Text style={modalStyles.modalTitle}>➕ Dodaj nową transakcję</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="times" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Główna zawartość */}
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

            <TextInput
              style={layoutStyles.inputField}
              placeholder="Data (np. 22.03.2025)"
              value={date}
              onChangeText={setDate}
            />

            {/* Wybór kategorii */}
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
                <Text>{category ? category : "Wybierz kategorię"}</Text>
              </TouchableOpacity>
            ) : (
              <View style={layoutStyles.inputField}>
                <Picker
                  selectedValue={category}
                  onValueChange={(itemValue) => setCategory(itemValue)}
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

          {/* Wybór typu transakcji */}
          <View style={switchStyles.switchContainer}>
            <Text
              style={[
                switchStyles.switchLabel,
                !isExpense ? switchStyles.activeLabel : undefined,
              ]}
            >
              Przychód
            </Text>
            <Switch
              trackColor={{ false: "#4CAF50", true: "#F44336" }}
              thumbColor={isExpense ? "#fff" : "#fff"}
              ios_backgroundColor="#4CAF50"
              onValueChange={() => setIsExpense((prevState) => !prevState)}
              value={isExpense}
            />
            <Text
              style={[
                switchStyles.switchLabel,
                isExpense ? switchStyles.activeLabel : undefined,
              ]}
            >
              Wydatek
            </Text>
          </View>

          {/* Stopka z przyciskami */}
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
