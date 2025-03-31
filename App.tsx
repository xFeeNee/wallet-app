import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Transaction } from "./types/Transaction";
import AddTransactionModal from "./components/AddTransactionModal";
import FilterModal from "./components/FilterModal";
import Icon from "react-native-vector-icons/FontAwesome";
import { layoutStyles } from "./styles/layoutStyles";
import { typographyStyles } from "./styles/typographyStyles";
import { transactionStyles } from "./styles/transactionStyles";
import { buttonStyles } from "./styles/buttonStyles";

// Sample transaction data
const initialTransactions: Transaction[] = [
  {
    id: 1,
    title: "Shopping",
    amount: -50,
    category: "Shopping 🛍️", // Category with emoji
    date: "2025-03-22",
  },
  {
    id: 2,
    title: "Salary",
    amount: 3000,
    category: "Other 🔄", // Category with emoji
    date: "2025-03-23",
  },
  {
    id: 3,
    title: "Transport",
    amount: -100,
    category: "Transport 🚗", // Category with emoji
    date: "2025-03-23",
  },
];

export default function App() {
  // State storing transaction data
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);
  const [isAddTransactionModalVisible, setAddTransactionModalVisible] =
    useState(false);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  // Filter state
  const [filters, setFilters] = useState({
    category: "",
    minAmount: "",
    maxAmount: "",
    date: "",
    sortOrder: "asc",
  });

  // Function to delete a transaction
  const handleDeleteTransaction = (id: number) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  // Function to add a transaction
  const addTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Function to calculate balance
  const calculateBalance = () => {
    return transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  };

  // Apply filters
  const handleApplyFilters = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setFilterModalVisible(false);
  };

  // Filter transactions based on filters
  const filteredTransactions = [...transactions]
    .filter((transaction) => {
      const { category, minAmount, maxAmount, date } = filters;

      const isCategoryMatch = category
        ? transaction.category === category
        : true;
      const isAmountMatch =
        (minAmount ? transaction.amount >= parseFloat(minAmount) : true) &&
        (maxAmount ? transaction.amount <= parseFloat(maxAmount) : true);
      const isDateMatch = date ? transaction.date === date : true;

      return isCategoryMatch && isAmountMatch && isDateMatch;
    })
    .sort((a, b) =>
      filters.sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount
    );

  return (
    <SafeAreaView style={layoutStyles.container}>
      <Text style={typographyStyles.title}>💰 Wallet Monitor</Text>

      {/* Display balance */}
      <View style={transactionStyles.balanceContainer}>
        <Text style={typographyStyles.balanceTitle}>
          Balance: {calculateBalance().toFixed(2)} PLN
        </Text>
      </View>

      {/* Add transaction button */}
      <View style={layoutStyles.buttonRow}>
        <TouchableOpacity
          style={buttonStyles.addTransactionButton}
          onPress={() => setAddTransactionModalVisible(true)}
        >
          <Icon name="plus" size={18} color="#fff" />
          <Text style={typographyStyles.addTransactionText}>
            ADD TRANSACTION
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setFilterModalVisible(true)}
          style={buttonStyles.filterButtonSmall}
        >
          <Icon name="sliders" size={18} color="#1976D2" />
        </TouchableOpacity>
      </View>

      {/* Add transaction modal */}
      <AddTransactionModal
        visible={isAddTransactionModalVisible}
        onClose={() => setAddTransactionModalVisible(false)}
        onAddTransaction={addTransaction}
      />

      {/* Filter modal */}
      <FilterModal
        visible={isFilterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        onApplyFilters={handleApplyFilters}
      />

      {/* Transaction list */}
      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={transactionStyles.transactionContainer}>
            <View style={transactionStyles.transactionInfo}>
              <Text style={transactionStyles.transactionTitle}>
                {item.title}
              </Text>
              <Text style={transactionStyles.transactionDate}>{item.date}</Text>
            </View>

            <View style={transactionStyles.transactionDetails}>
              <Text
                style={[
                  transactionStyles.transactionAmount,
                  item.amount < 0
                    ? transactionStyles.expense
                    : transactionStyles.income,
                ]}
              >
                {item.amount < 0
                  ? `- ${Math.abs(item.amount)} PLN`
                  : `+ ${item.amount} PLN`}
              </Text>
              <Text style={transactionStyles.transactionCategory}>
                {item.category} {/* Displaying category with emoji */}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => handleDeleteTransaction(item.id)}
              style={transactionStyles.deleteButton}
            >
              <Text style={transactionStyles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
