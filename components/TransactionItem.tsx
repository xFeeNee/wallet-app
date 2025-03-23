import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles"; // Importujemy style globalne

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
  onDelete: () => void;
}

export default function TransactionItem({
  id,
  title,
  amount,
  category,
  date,
  onDelete,
}: TransactionProps) {
  return (
    <View style={globalStyles.transactionContainer}>
      <View style={globalStyles.transactionInfo}>
        <Text style={globalStyles.transactionTitle}>{title}</Text>
        <Text style={globalStyles.transactionDate}>{date}</Text>
      </View>

      <View style={globalStyles.transactionDetails}>
        <Text
          style={[
            globalStyles.transactionAmount,
            amount < 0 ? globalStyles.expense : globalStyles.income,
          ]}
        >
          {amount < 0 ? `- ${Math.abs(amount)} zł` : `+ ${amount} zł`}
        </Text>
        <Text style={globalStyles.transactionCategory}>{category}</Text>
      </View>

      <TouchableOpacity onPress={onDelete} style={globalStyles.deleteButton}>
        <Text style={globalStyles.deleteButtonText}>Usuń</Text>
      </TouchableOpacity>
    </View>
  );
}
