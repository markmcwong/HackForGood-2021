import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Conversations10(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 41 34.53" style={styles.conversations}>
        <Path
          strokeWidth={0}
          fill="rgba(111,111,111,1)"
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
  conversations: {
    height: 35,
    width: 41
  }
});

export default Conversations10;
