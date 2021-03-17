import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function MaskCopy14(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 46.37 46" style={styles.maskCopy}>
        <Path
          strokeWidth={0}
          fill="transparent"
          fillOpacity={1}
          strokeOpacity={1}
          d="M23.18 46.00 C35.99 46.00 46.37 35.70 46.37 23.00 C46.37 10.30 35.99 0.00 23.18 0.00 C10.38 0.00 0.00 10.30 0.00 23.00 C0.00 35.70 10.38 46.00 23.18 46.00 Z"
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
  maskCopy: {
    height: 46,
    width: 46
  }
});

export default MaskCopy14;
