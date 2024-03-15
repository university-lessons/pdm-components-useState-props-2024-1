import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

type CalcButtonProps = {
  value: string;
  onPress?: (value: string) => void;
};

export default function CalcButton({ value, onPress }: CalcButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "grey",
    borderRadius: 8,
    margin: 2,
    width: "23%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 48,
    color: "white",
  },
});
