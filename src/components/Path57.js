import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path57(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20 20" style={styles.path20}>
        <Path
          strokeWidth={0}
          fill="rgba(250,189,189,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M19.15 5.77 C18.12 7.16 17.29 8.69 16.68 10.33 C14.73 15.68 16.19 20.00 16.19 20.00 C16.19 20.00 -1.61 15.91 0.12 13.87 C1.16 12.63 2.02 7.86 2.54 4.29 C2.88 1.97 3.07 0.15 3.07 0.15 C3.07 0.15 24.48 -1.46 19.15 5.77 Z"
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
  path20: {
    height: 20,
    width: 20
  }
});

export default Path57;
