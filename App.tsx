import React, { useState } from "react";
import { SafeAreaView, FlatList, Text, View, Button } from "react-native";
import { Transaction } from "./types/Transaction";
import AddTransactionModal from "./components/AddTransactionModal"; // Import modal
import { globalStyles } from "./styles/globalStyles";

export default function App() {
  // Stan dla transakcji
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Stan do kontrolowania widoczności modala
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

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

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.title}>💰 Monitor Portfela</Text>

      {/* Pokazanie salda */}
      <View style={globalStyles.balanceContainer}>
        <Text style={globalStyles.balanceTitle}>
          Saldo: {calculateBalance().toFixed(2)} zł
        </Text>
      </View>

      {/* Przycisk do otwierania modala */}
      <Button
        title="➕ Dodaj transakcję"
        onPress={() => setModalVisible(true)}
      />

      {/* Modal do dodawania transakcji */}
      <AddTransactionModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)} // Funkcja zamykająca modal
        onAddTransaction={addTransaction} // Funkcja dodawania transakcji
      />

      {/* Lista transakcji */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.title} - {item.amount} zł
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
