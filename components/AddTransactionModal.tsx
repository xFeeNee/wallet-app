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

  // Generating data for iOS selector
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    "01 - January",
    "02 - February",
    "03 - March",
    "04 - April",
    "05 - May",
    "06 - June",
    "07 - July",
    "08 - August",
    "09 - September",
    "10 - October",
    "11 - November",
    "12 - December",
  ];
  const years = Array.from({ length: 20 }, (_, i) => (2025 - i).toString());

  const categoryOptions = [
    "Food 🍔",
    "Transport 🚗",
    "Shopping 🛍️",
    "Bills 💳",
    "Other 🔄",
  ];

  // Function to convert date format
  const formatDate = (dateObj: Date): string => {
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear().toString();
    return `${day}.${month}.${year}`;
  };

  // Function to parse date from string format to Date object
  const parseDate = (dateString: string): Date => {
    if (!dateString) {
      return new Date();
    }
    const [day, month, year] = dateString.split(".");
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  };

  // Handle date change in DatePicker for Android
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
      Alert.alert("Error", "All fields are required.");
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
            <Text style={modalStyles.modalTitle}>➕ Add new transaction</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="times" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          <ScrollView style={modalStyles.modalBody}>
            <TextInput
              style={layoutStyles.inputField}
              placeholder="Name"
              value={title}
              onChangeText={setTitle}
            />

            <TextInput
              style={layoutStyles.inputField}
              placeholder="Amount"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />

            {Platform.OS === "ios" ? (
              <View style={layoutStyles.datePickerContainer}>
                <View style={layoutStyles.datePickerColumn}>
                  <Text style={layoutStyles.datePickerLabel}>Day</Text>
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
                  <Text style={layoutStyles.datePickerLabel}>Month</Text>
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
                  <Text style={layoutStyles.datePickerLabel}>Year</Text>
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
                <Text>{date || "Select date"}</Text>
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
                      options: [...categoryOptions, "Cancel"],
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
                <Text>{category || "Select category"}</Text>
              </TouchableOpacity>
            ) : (
              <View style={layoutStyles.inputField}>
                <Picker
                  selectedValue={category}
                  onValueChange={setCategory}
                  style={{ height: 50, width: "100%" }}
                >
                  <Picker.Item label="Select category" value="" />
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
              Income
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
              Expense
            </Text>
          </View>

          <View style={modalStyles.modalFooter}>
            <TouchableOpacity
              style={buttonStyles.primaryButton}
              onPress={handleAddTransaction}
            >
              <Text style={typographyStyles.filterButtonText}>
                ADD TRANSACTION
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={buttonStyles.secondaryButton}
              onPress={onClose}
            >
              <Text style={typographyStyles.filterButtonText}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddTransactionModal;
