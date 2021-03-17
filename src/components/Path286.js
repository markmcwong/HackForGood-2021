import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path286(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 37 19" style={styles.path3}>
        <Path
          strokeWidth={0}
          fill="rgba(242,242,242,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 19.00 C0.00 8.51 8.28 0.00 18.50 0.00 C28.72 0.00 37.00 8.51 37.00 19.00 "
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
  path3: {
    height: 19,
    width: 37
  }
});

export default Path286;
