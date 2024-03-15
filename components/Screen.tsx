import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import CalcButton from "./CalcButton";
import NumLock from "./NumLock";

export default function Screen() {
  const [operation, setOperation] = useState("");

  const handleAddChar = (c: string) => {
    setOperation((val) => val + c);
  };

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.operation}>{operation}</Text>
      </View>

      <View style={styles.row}>
        <NumLock />
        <CalcButton value="/" onPress={handleAddChar} />
        <CalcButton value="*" onPress={handleAddChar} />
        <CalcButton value="-" onPress={handleAddChar} />
      </View>

      <View style={styles.row}>
        <CalcButton value="7" onPress={handleAddChar} />
        <CalcButton value="8" onPress={handleAddChar} />
        <CalcButton value="9" onPress={handleAddChar} />
        <CalcButton value="+" onPress={handleAddChar} />
      </View>

      <View style={styles.row}>
        <CalcButton value="4" onPress={handleAddChar} />
        <CalcButton value="5" onPress={handleAddChar} />
        <CalcButton value="6" onPress={handleAddChar} />
        <CalcButton value="." onPress={handleAddChar} />
      </View>

      <View style={styles.row}>
        <CalcButton value="1" onPress={handleAddChar} />
        <CalcButton value="2" onPress={handleAddChar} />
        <CalcButton value="3" onPress={handleAddChar} />
        <CalcButton value="0" onPress={handleAddChar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  operation: {
    fontSize: 48,
    margin: 8,
    backgroundColor: "grey",
    borderRadius: 8,
    flex: 1,
    color: "yellow",
  },
});
