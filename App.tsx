import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { Transaction } from "./types/Transaction";
import AddTransactionModal from "./components/AddTransactionModal";
import FilterModal from "./components/FilterModal";
import TransactionItem from "./components/TransactionItem";
import Icon from "react-native-vector-icons/FontAwesome";
import { layoutStyles } from "./styles/layoutStyles";
import { typographyStyles } from "./styles/typographyStyles";
import { transactionStyles } from "./styles/transactionStyles";
import { buttonStyles } from "./styles/buttonStyles";

export default function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      title: "Zakupy",
      amount: -50,
      category: "Zakupy",
      date: "2025-03-22",
    },
    {
      id: 2,
      title: "Wypłata",
      amount: 3000,
      category: "Inne",
      date: "2025-03-23",
    },
    {
      id: 3,
      title: "Transport",
      amount: -100,
      category: "Transport",
      date: "2025-03-23",
    },
  ]);

  const [isAddTransactionModalVisible, setAddTransactionModalVisible] =
    useState<boolean>(false);
  const [isFilterModalVisible, setFilterModalVisible] =
    useState<boolean>(false);

  const [filters, setFilters] = useState({
    category: "",
    minAmount: "",
    maxAmount: "",
    date: "",
    sortOrder: "asc",
  });

  const handleDeleteTransaction = (id: number) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const addTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const calculateBalance = () => {
    return transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  };

  const handleApplyFilters = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setFilterModalVisible(false);
  };

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
      <Text style={typographyStyles.title}>💰 Monitor Portfela</Text>

      <View style={transactionStyles.balanceContainer}>
        <Text style={typographyStyles.balanceTitle}>
          Saldo: {calculateBalance().toFixed(2)} zł
        </Text>
      </View>

      <View style={layoutStyles.buttonRow}>
        <TouchableOpacity
          style={buttonStyles.addTransactionButton}
          onPress={() => setAddTransactionModalVisible(true)}
        >
          <Icon name="plus" size={18} color="#fff" />
          <Text style={typographyStyles.addTransactionText}>
            DODAJ TRANSAKCJĘ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setFilterModalVisible(true)}
          style={buttonStyles.filterButtonSmall}
        >
          <Icon name="sliders" size={18} color="#1976D2" />
        </TouchableOpacity>
      </View>

      <AddTransactionModal
        visible={isAddTransactionModalVisible}
        onClose={() => setAddTransactionModalVisible(false)}
        onAddTransaction={addTransaction}
      />

      <FilterModal
        visible={isFilterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        onApplyFilters={handleApplyFilters}
      />

      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TransactionItem
            id={item.id}
            title={item.title}
            amount={item.amount}
            category={item.category}
            date={item.date}
            onDelete={() => handleDeleteTransaction(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}
