import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function TextFolderGroup(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.subtitleColor}>
        <Text style={styles.subtitle}>Subtitle</Text>
      </View>
      <View style={styles.titleColor}>
        <Text style={styles.typeSomething}>Type something</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subtitleColor: {
    height: 20,
    width: 86,
    marginTop: 43
  },
  subtitle: {
    height: 20,
    width: 86,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(36,40,51,1)",
    fontSize: 14
  },
  titleColor: {
    height: 44,
    width: 86,
    marginTop: -64
  },
  typeSomething: {
    height: 44,
    width: 86,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(36,40,51,1)",
    fontSize: 16
  }
});

export default TextFolderGroup;
