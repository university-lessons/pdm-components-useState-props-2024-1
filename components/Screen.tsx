import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CalcButton from "./CalcButton";
import NumLock from "./NumLock";

export default function Screen() {
  return (
    <View>
      <View style={styles.row}>
        <NumLock />
        <CalcButton value="/" />
        <CalcButton value="*" />
        <CalcButton value="-" />
      </View>

      <View style={styles.row}>
        <CalcButton value="7" />
        <CalcButton value="8" />
        <CalcButton value="9" />
        <CalcButton value="+" />
      </View>

      <View style={styles.row}>
        <CalcButton value="4" />
        <CalcButton value="5" />
        <CalcButton value="6" />
        <CalcButton value="." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
