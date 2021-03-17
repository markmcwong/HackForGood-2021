import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path46(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20 29" style={styles.path9}>
        <Path
          strokeWidth={0}
          fill="rgba(249,168,38,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M12.93 0.75 C18.94 2.92 20.00 26.46 20.00 26.46 C12.93 22.48 4.44 29.00 4.44 29.00 C4.44 29.00 2.67 22.84 0.54 14.87 C-0.76 10.32 0.31 5.40 3.37 1.83 C3.37 1.83 6.91 -1.43 12.93 0.75 Z"
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
  path9: {
    height: 29,
    width: 20
  }
});

export default Path46;
