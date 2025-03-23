import React, { useState } from "react";
import { Modal, View, Text, Button, TextInput } from "react-native";
import { Category, categoryOptions } from "../types/Transaction";
import { globalStyles } from "../styles/globalStyles";
import { Picker } from "@react-native-picker/picker";

// Definicja typu Filters w FilterModal.tsx
interface Filters {
  category: Category | "";
  minAmount: string;
  maxAmount: string;
  date: string;
}

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApplyFilters: (filters: Filters) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  onClose,
  onApplyFilters,
}) => {
  const [category, setCategory] = useState<Category | "">("");
  const [minAmount, setMinAmount] = useState<string>("");
  const [maxAmount, setMaxAmount] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleApplyFilters = () => {
    const newFilters: Filters = {
      category,
      minAmount,
      maxAmount,
      date,
    };
    onApplyFilters(newFilters); // Przekazujemy nowe filtry do App.tsx
    onClose(); // Zamknięcie modala po zastosowaniu filtrów
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={globalStyles.filterModalContainer}>
        <Text>Filtruj transakcje</Text>

        {/* Kategoria */}
        <Text>Kategoria:</Text>
        <Picker selectedValue={category} onValueChange={setCategory}>
          <Picker.Item label="Wybierz kategorię" value="" />
          {categoryOptions.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>

        {/* Kwota */}
        <Text>Minimalna kwota:</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Min kwota"
          value={minAmount}
          onChangeText={setMinAmount}
        />
        <Text>Maksymalna kwota:</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Max kwota"
          value={maxAmount}
          onChangeText={setMaxAmount}
        />

        {/* Data */}
        <Text>Data (format: YYYY-MM-DD):</Text>
        <TextInput
          placeholder="Wpisz datę"
          value={date}
          onChangeText={setDate}
        />

        {/* Przycisk zastosowania filtrów */}
        <Button title="Zastosuj filtry" onPress={handleApplyFilters} />
        <Button title="Anuluj" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default FilterModal;
