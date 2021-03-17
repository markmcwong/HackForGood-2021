import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Oval12(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 111 45.51" style={styles.oval3}>
        <Path
          strokeWidth={0}
          fill="rgba(141,141,141,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M28.50 27.00 C30.99 27.00 33.00 24.99 33.00 22.50 C33.00 20.01 30.99 18.00 28.50 18.00 C26.01 18.00 24.00 20.01 24.00 22.50 C24.00 24.99 26.01 27.00 28.50 27.00 Z"
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
  oval3: {
    height: 9,
    width: 9
  }
});

export default Oval12;
