import React, { useState } from "react";
import {
  Modal,
  View,
  TextInput,
  Button,
  Alert,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Transaction, Category } from "../types/Transaction";
import { layoutStyles } from "../styles/layoutStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { typographyStyles } from "../styles/typographyStyles";
import { modalStyles } from "../styles/modalStyles";
import { transactionStyles } from "../styles/transactionStyles";

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

  const categoryOptions: Category[] = [
    "Jedzenie",
    "Transport",
    "Zakupy",
    "Rachunki",
    "Inne",
  ];

  const handleAddTransaction = () => {
    if (!title || !amount || !category || !date) {
      Alert.alert("Błąd", "Wszystkie pola są wymagane.");
      return;
    }

    const newTransaction: Transaction = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category: category as Category,
      date,
    };

    onAddTransaction(newTransaction);

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
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
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Automatyczne dostosowanie dla iOS i Androida
        style={modalStyles.modalBackground}
      >
        <View style={modalStyles.modalContainer}>
          <Text style={typographyStyles.title}>➕ Dodaj nową transakcję</Text>

          <TextInput
            style={layoutStyles.input}
            placeholder="Nazwa"
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            style={layoutStyles.input}
            placeholder="Kwota"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          <Picker
            selectedValue={category}
            onValueChange={(value) => setCategory(value as Category)}
            style={layoutStyles.input}
          >
            <Picker.Item label="Wybierz kategorię" value="" />
            {categoryOptions.map((option) => (
              <Picker.Item key={option} label={option} value={option} />
            ))}
          </Picker>

          <TextInput
            style={layoutStyles.input}
            placeholder="Data (np. 22.03.2025)"
            value={date}
            onChangeText={setDate}
          />

          <Button title="Dodaj transakcję" onPress={handleAddTransaction} />
          <Button title="Anuluj" onPress={onClose} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddTransactionModal;
