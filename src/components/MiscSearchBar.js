import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsRawSearch from "./IconsRawSearch";

function MiscSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bg3}>
        <View style={styles.iconsRawSearch2Row}>
          <IconsRawSearch style={styles.iconsRawSearch2}></IconsRawSearch>
          <View style={styles.placeholderColor2}>
            <Text style={styles.placeholder2}>Search</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg3: {
    borderRadius: 23.5,
    backgroundColor: "rgba(237,241,250,1)",
    flexDirection: "row",
    flex: 1
  },
  iconsRawSearch2: {
    height: 24,
    width: 24,
    backgroundColor: "rgba(149,159,186,1)"
  },
  placeholderColor2: {
    height: 22,
    width: 50,
    marginLeft: 8,
    marginTop: 1
  },
  placeholder2: {
    backgroundColor: "transparent",
    color: "rgba(36,40,51,1)",
    fontSize: 16
  },
  iconsRawSearch2Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 232,
    marginLeft: 12,
    marginTop: 10
  }
});

export default MiscSearchBar;
