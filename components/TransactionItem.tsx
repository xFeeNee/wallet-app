import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { layoutStyles } from "../styles/layoutStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { typographyStyles } from "../styles/typographyStyles";
import { transactionStyles } from "../styles/transactionStyles";

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
    <View style={transactionStyles.transactionContainer}>
      <View style={transactionStyles.transactionInfo}>
        <Text style={transactionStyles.transactionTitle}>{title}</Text>
        <Text style={transactionStyles.transactionDate}>{date}</Text>
      </View>

      <View style={transactionStyles.transactionDetails}>
        <Text
          style={[
            transactionStyles.transactionAmount,
            amount < 0 ? transactionStyles.expense : transactionStyles.income,
          ]}
        >
          {amount < 0 ? `- ${Math.abs(amount)} zł` : `+ ${amount} zł`}
        </Text>
        <Text style={transactionStyles.transactionCategory}>{category}</Text>
      </View>

      <TouchableOpacity onPress={onDelete} style={buttonStyles.deleteButton}>
        <Text style={typographyStyles.deleteButtonText}>Usuń</Text>
      </TouchableOpacity>
    </View>
  );
}
