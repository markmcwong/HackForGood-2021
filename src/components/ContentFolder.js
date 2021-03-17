import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ShapesRoundedSquareSecondary from "./ShapesRoundedSquareSecondary";
import IconsRawMore from "./IconsRawMore";
import TextFolderGroup from "./TextFolderGroup";

function ContentFolder(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.shapesRoundedSquareSecondaryStack}>
        <ShapesRoundedSquareSecondary
          style={styles.shapesRoundedSquareSecondary}
        ></ShapesRoundedSquareSecondary>
        <IconsRawMore style={styles.iconsRawMore}></IconsRawMore>
        <TextFolderGroup style={styles.textFolderGroup}></TextFolderGroup>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shapesRoundedSquareSecondary: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    shadowColor: "rgba(0,0,0,0.253034685041521)",
    shadowOffset: {
      height: 6,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(245,247,252,1)"
  },
  iconsRawMore: {
    position: "absolute",
    top: 20,
    height: 24,
    width: 24,
    right: 15,
    backgroundColor: "rgba(149,159,186,1)"
  },
  textFolderGroup: {
    position: "absolute",
    top: 20,
    left: 49,
    height: 103,
    width: 150,
    backgroundColor: "transparent"
  },
  shapesRoundedSquareSecondaryStack: {
    flex: 1
  }
});

export default ContentFolder;
