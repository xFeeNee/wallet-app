import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import { ActionSheetIOS } from "react-native";
import { layoutStyles } from "../styles/layoutStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { typographyStyles } from "../styles/typographyStyles";
import { modalStyles } from "../styles/modalStyles";

// Deklaracja interfejsów (przywrócona)
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
  const categoryOptions = [
    "Jedzenie 🍔",
    "Transport 🚗",
    "Zakupy 🛍️",
    "Rachunki 💳",
    "Inne 🔄",
  ];

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
            <Text style={modalStyles.modalTitle}>🔎 Ustaw Filtr</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="times" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Główna zawartość */}
          <View style={modalStyles.modalBody}>
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

            <TextInput
              style={layoutStyles.inputField}
              placeholder="Min kwota"
              keyboardType="numeric"
              value={minAmount}
              onChangeText={setMinAmount}
            />

            <TextInput
              style={layoutStyles.inputField}
              placeholder="Max kwota"
              keyboardType="numeric"
              value={maxAmount}
              onChangeText={setMaxAmount}
            />

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
          </View>

          {/* Stopka z przyciskami */}
          <View style={modalStyles.modalFooter}>
            <View style={buttonStyles.buttonContainerHorizontal}>
              <TouchableOpacity
                style={buttonStyles.primaryButton}
                onPress={handleApplyFilters}
              >
                <Text style={typographyStyles.filterButtonText}>
                  ZASTOSUJ FILTRY
                </Text>
              </TouchableOpacity>
            </View>

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

export default FilterModal;
