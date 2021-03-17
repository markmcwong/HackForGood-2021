import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path39(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 33 21" style={styles.path2}>
        <Path
          strokeWidth={0}
          fill="rgba(47,46,65,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M26.61 6.95 C27.52 5.95 28.36 4.88 29.13 3.76 C30.59 1.66 31.89 12.43 31.89 12.43 C31.89 12.43 33.30 16.80 32.94 18.99 C32.59 21.18 24.49 21.18 23.08 20.82 C21.68 20.45 14.63 20.82 14.63 20.82 L4.07 20.82 C-5.09 16.44 4.07 13.52 4.07 13.52 C6.89 13.16 16.39 4.03 16.39 4.03 L18.51 0.02 C19.91 -0.35 21.32 5.13 21.32 5.13 L26.61 6.95 Z"
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
    height: 21,
    width: 33
  }
});

export default Path39;
