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
import { layoutStyles } from "../styles/layoutStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { typographyStyles } from "../styles/typographyStyles";
import { modalStyles } from "../styles/modalStyles";

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
      <View style={modalStyles.filterContainer}>
        <Text style={typographyStyles.title}>🔎 Ustaw Filtr</Text>

        <TextInput
          style={layoutStyles.input}
          placeholder="Kategoria"
          value={category}
          onChangeText={setCategory}
        />

        <TextInput
          style={layoutStyles.input}
          placeholder="Min kwota"
          keyboardType="numeric"
          value={minAmount}
          onChangeText={setMinAmount}
        />

        <TextInput
          style={layoutStyles.input}
          placeholder="Max kwota"
          keyboardType="numeric"
          value={maxAmount}
          onChangeText={setMaxAmount}
        />

        {/* Kontener na ikonę sortowania */}
        <View style={modalStyles.iconRow}>
          <TouchableOpacity
            onPress={handleSortToggle}
            style={modalStyles.sortIconContainer}
          >
            <Icon
              name={
                sortOrder === "asc" ? "sort-amount-asc" : "sort-amount-desc"
              }
              size={24}
              color="#1976D2"
            />
            <Text style={typographyStyles.sortIconText}>
              {sortOrder === "asc" ? " Rosnąco" : " Malejąco"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleResetFilters}
            style={typographyStyles.resetIconContainer}
          >
            <Icon name="undo" size={24} color="#F44336" />
            <Text style={typographyStyles.resetIconText}>Resetuj</Text>
          </TouchableOpacity>
        </View>

        {/* Przyciski: zastosuj filtry i anuluj */}
        <View style={modalStyles.buttonContainer}>
          <TouchableOpacity
            style={buttonStyles.filterButton}
            onPress={handleApplyFilters}
          >
            <Text style={typographyStyles.filterButtonText}>
              ZASTOSUJ FILTRY
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={buttonStyles.cancelButton} onPress={onClose}>
            <Text style={typographyStyles.filterButtonText}>ANULUJ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
