import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function IOsComposerBgVisible(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bg2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg2: {
    height: 52,
    width: 375,
    backgroundColor: "rgba(255,255,255,1)"
  }
});

export default IOsComposerBgVisible;
