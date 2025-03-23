import React, { useState } from "react";
import { SafeAreaView, FlatList, Text, View, Button } from "react-native";
import { Transaction, Category } from "./types/Transaction";
import AddTransactionModal from "./components/AddTransactionModal";
import FilterModal from "./components/FilterModal"; // Importujemy FilterModal
import TransactionItem from "./components/TransactionItem"; // Importujemy TransactionItem
import { globalStyles } from "./styles/globalStyles";

export default function App() {
  // Stan dla transakcji
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

  // Stan dla modali
  const [isAddTransactionModalVisible, setAddTransactionModalVisible] =
    useState<boolean>(false);
  const [isFilterModalVisible, setFilterModalVisible] =
    useState<boolean>(false);

  // Stan dla filtrów
  const [filters, setFilters] = useState({
    category: "",
    minAmount: "",
    maxAmount: "",
    date: "",
  });

  // Funkcja do usuwania transakcji
  const handleDeleteTransaction = (id: number) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  // Funkcja do dodawania transakcji
  const addTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Funkcja do obliczania salda
  const calculateBalance = () => {
    return transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  };

  // Funkcja do filtrowania transakcji
  const filteredTransactions = transactions.filter((transaction) => {
    const { category, minAmount, maxAmount, date } = filters;

    const isCategoryMatch = category ? transaction.category === category : true;
    const isAmountMatch =
      (minAmount ? transaction.amount >= parseFloat(minAmount) : true) &&
      (maxAmount ? transaction.amount <= parseFloat(maxAmount) : true);
    const isDateMatch = date ? transaction.date === date : true;

    return isCategoryMatch && isAmountMatch && isDateMatch;
  });

  // Funkcja do zastosowania filtrów
  const handleApplyFilters = (newFilters: {
    category: string;
    minAmount: string;
    maxAmount: string;
    date: string;
  }) => {
    setFilters(newFilters);
    setFilterModalVisible(false); // Zamknięcie modala po zastosowaniu filtrów
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.title}>💰 Monitor Portfela</Text>

      <View style={globalStyles.balanceContainer}>
        <Text style={globalStyles.balanceTitle}>
          Saldo: {calculateBalance().toFixed(2)} zł
        </Text>
      </View>

      <Button
        title="➕ Dodaj transakcję"
        onPress={() => setAddTransactionModalVisible(true)}
      />
      <Button
        title="Filtruj transakcje"
        onPress={() => setFilterModalVisible(true)}
      />
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
            onDelete={() => handleDeleteTransaction(item.id)} // Funkcja do usuwania
          />
        )}
      />
    </SafeAreaView>
  );
}
