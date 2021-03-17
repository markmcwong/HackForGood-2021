import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path312(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20 9" style={styles.path2}>
        <Path
          strokeWidth={0}
          fill="rgba(230,230,230,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 6.36 C1.28 8.07 3.49 9.07 5.83 9.00 C8.78 8.88 11.24 7.07 13.45 5.35 L20.00 0.28 L15.67 0.09 C12.55 -0.04 9.35 -0.16 6.38 0.68 C3.41 1.53 0.68 3.56 0.13 6.26 "
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
  path2: {
    height: 9,
    width: 20
  }
});

export default Path312;
