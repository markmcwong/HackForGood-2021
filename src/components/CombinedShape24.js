import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function CombinedShape24(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 17.12 18.12" style={styles.combinedShape}>
        <Path
          strokeWidth={0}
          fill="rgba(126,139,174,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d=""
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0
  },
  combinedShape: {
    height: 18,
    width: 17
  }
});

export default CombinedShape24;
