import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { globalStyles } from "../styles/globalStyles";

interface Filters {
  category: string;
  minAmount: string;
  maxAmount: string;
  date: string;
  sortOrder: "asc" | "desc";
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
  const [category, setCategory] = useState<string>("");
  const [minAmount, setMinAmount] = useState<string>("");
  const [maxAmount, setMaxAmount] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSortToggle = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
  };

  const handleResetFilters = () => {
    setCategory("");
    setMinAmount("");
    setMaxAmount("");
    setDate("");
    setSortOrder("asc");
  };

  const handleApplyFilters = () => {
    onApplyFilters({ category, minAmount, maxAmount, date, sortOrder });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={globalStyles.filterContainer}>
        <Text style={globalStyles.title}>🔎 Ustaw Filtr</Text>

        <TextInput
          style={globalStyles.input}
          placeholder="Kategoria"
          value={category}
          onChangeText={setCategory}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Min kwota"
          keyboardType="numeric"
          value={minAmount}
          onChangeText={setMinAmount}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Max kwota"
          keyboardType="numeric"
          value={maxAmount}
          onChangeText={setMaxAmount}
        />
        <View style={globalStyles.iconRow}>
          <TouchableOpacity
            onPress={handleSortToggle}
            style={globalStyles.sortIconContainer}
          >
            <Icon
              name={
                sortOrder === "asc" ? "sort-amount-asc" : "sort-amount-desc"
              }
              size={24}
              color="#1976D2"
            />
            <Text style={globalStyles.sortIconText}>
              {sortOrder === "asc" ? " Rosnąco" : " Malejąco"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleResetFilters}
            style={globalStyles.resetIconContainer}
          >
            <Icon name="undo" size={24} color="#F44336" />
            <Text style={globalStyles.resetIconText}>Resetuj</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={globalStyles.filterButton}
          onPress={handleApplyFilters}
        >
          <Text style={globalStyles.filterButtonText}>ZASTOSUJ FILTRY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.cancelButton} onPress={onClose}>
          <Text style={globalStyles.filterButtonText}>ANULUJ</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FilterModal;
