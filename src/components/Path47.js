import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path47(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 23 20" style={styles.path10}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M21.32 19.06 C19.92 17.92 18.00 20.00 18.00 20.00 L16.88 9.70 C16.88 9.70 9.88 10.56 5.40 9.41 C0.92 8.27 0.22 13.56 0.22 13.56 C-0.01 11.42 -0.06 9.27 0.08 7.12 C0.36 4.55 4.00 1.97 10.44 0.26 C16.88 -1.46 20.25 5.98 20.25 5.98 C24.73 8.27 22.72 20.21 21.32 19.06 Z"
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
  path10: {
    height: 20,
    width: 23
  }
});

export default Path47;
