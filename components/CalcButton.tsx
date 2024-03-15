import { View, Text, StyleSheet } from "react-native";
import React from "react";

type CalcButtonProps = {
  value: string;
};

export default function CalcButton({ value }: CalcButtonProps) {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{value}</Text>
    </View>
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
