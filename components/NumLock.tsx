import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function NumLock() {
  const [active, setActive] = useState(false);

  const handlePress = () => {
    // setActive(!active); // pode causar erro!
    setActive((val) => !val);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={[styles.text, { color: active ? "lightgreen" : "white" }]}>
        Num Lock
      </Text>
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
    fontSize: 24,
  },
});
