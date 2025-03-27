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
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { layoutStyles } from "../styles/layoutStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { typographyStyles } from "../styles/typographyStyles";
import { modalStyles } from "../styles/modalStyles";
import { Transaction, Category } from "../types/Transaction";

interface AddTransactionModalProps {
  visible: boolean;
  onClose: () => void;
  onAddTransaction: (newTransaction: Transaction) => void;
}
const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  visible,
  onClose,
  onAddTransaction,
}) => {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<Category | "">("");
  const [date, setDate] = useState<string>("");
  const [transactionType, setTransactionType] = useState<"income" | "expense">(
    "income"
  );

  const categoryOptions: Category[] = [
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

    const newTransaction: Transaction = {
      id: Date.now(),
      title,
      amount:
        transactionType === "income" ? parseFloat(amount) : -parseFloat(amount),
      category: category as Category,
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
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={modalStyles.modalBackground}
      >
        <View style={modalStyles.modalContainer}>
          <Text style={modalStyles.title}>➕ Dodaj nową transakcję</Text>

          <TextInput
            style={modalStyles.input}
            placeholder="Nazwa"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={modalStyles.input}
            placeholder="Kwota"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          {/* Picker dla kategorii */}
          <Picker
            selectedValue={category}
            onValueChange={(value) => setCategory(value as Category)}
            style={modalStyles.picker}
          >
            <Picker.Item label="Wybierz kategorię" value="" />
            {categoryOptions.map((option) => (
              <Picker.Item key={option} label={option} value={option} />
            ))}
          </Picker>

          {/* Picker dla typu transakcji */}
          <Picker
            selectedValue={transactionType}
            onValueChange={(value) =>
              setTransactionType(value as "income" | "expense")
            }
            style={modalStyles.picker}
          >
            <Picker.Item label="Przychód" value="income" />
            <Picker.Item label="Wydatek" value="expense" />
          </Picker>

          <TextInput
            style={modalStyles.input}
            placeholder="Data (np. 22.03.2025)"
            value={date}
            onChangeText={setDate}
          />

          <View style={modalStyles.buttonContainer}>
            <TouchableOpacity
              style={modalStyles.addTransactionButton}
              onPress={handleAddTransaction}
            >
              <Text style={typographyStyles.addTransactionText}>
                DODAJ TRANSAKCJĘ
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={modalStyles.cancelButton}
              onPress={onClose}
            >
              <Text style={typographyStyles.addTransactionText}>ANULUJ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddTransactionModal;
