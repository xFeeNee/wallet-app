import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Transaction } from "../types/Transaction";

interface TransactionProps extends Transaction {
  onDelete: () => void;
}

export default function TransactionItem({
  title,
  amount,
  category,
  date,
  onDelete,
}: TransactionProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onDelete}>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <View style={styles.details}>
        <Text
          style={[styles.amount, amount < 0 ? styles.expense : styles.income]}
        >
          {amount < 0 ? `- ${Math.abs(amount)} zł` : `+ ${amount} zł`}
        </Text>
        <Text style={styles.category}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  details: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  income: {
    color: "#4CAF50",
  },
  expense: {
    color: "#F44336",
  },
  category: {
    fontSize: 12,
    color: "#555",
  },
});
