import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path, Defs, Mask } from "react-native-svg";

function MaskCopy51(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.85 -0.85 69.19 69.46" style={styles.maskCopy52}>
        <Defs>
          <Mask id="H80rRi" x={0} y={0} width={69} height={69}>
            <Path
              d="M32.90 66.07 C51.06 66.07 65.79 51.28 65.79 33.03 C65.79 14.79 51.06 0.00 32.90 0.00 C14.73 0.00 0.00 14.79 0.00 33.03 C0.00 51.28 14.73 66.07 32.90 66.07 Z"
              fill="white"
            />
          </Mask>
        </Defs>
        <Path
          strokeWidth={1.697142857142857}
          fill="transparent"
          stroke="rgba(38,194,129,1)"
          fillOpacity={1}
          strokeOpacity={1}
          mask="url(#H80rRi)"
          d="M33.74 71.47 C54.42 71.47 71.18 54.64 71.18 33.88 C71.18 13.12 54.42 -3.71 33.74 -3.71 C13.07 -3.71 -3.69 13.12 -3.69 33.88 C-3.69 54.64 13.07 71.47 33.74 71.47 Z"
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
  maskCopy52: {
    height: 75,
    width: 75
  }
});

export default MaskCopy51;
