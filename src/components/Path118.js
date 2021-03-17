import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path118(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 362 32" style={styles.path5}>
        <Path
          strokeWidth={0}
          fill="rgba(63,61,86,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 32.00 C0.00 32.00 38.85 -11.67 52.30 3.02 C65.75 17.71 122.53 21.62 127.77 20.75 C133.00 19.89 163.63 18.16 180.81 20.32 C198.00 22.48 355.65 14.27 362.00 32.00 Z"
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
  path5: {
    height: 32,
    width: 362
  }
});

export default Path118;
