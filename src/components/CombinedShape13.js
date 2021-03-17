import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function CombinedShape13(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 302 44.52" style={styles.combinedShape7}>
        <Path
          strokeWidth={0}
          fill="rgba(38,194,129,1)"
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
  combinedShape7: {
    height: 45,
    width: 302
  }
});

export default CombinedShape13;
