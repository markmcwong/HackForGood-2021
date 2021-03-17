import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import UiBarsStatusBarsOverridesBlackTime from "./UiBarsStatusBarsOverridesBlackTime";
import CombinedShape2 from "./CombinedShape2";
import Wifi from "./Wifi";
import MobileSignal from "./MobileSignal";

function UiBarsStatusBarsBlackBase(props) {
  return (
    <View style={[styles.container, props.style]}>
      <UiBarsStatusBarsOverridesBlackTime
        style={styles.uiBarsStatusBarsOverridesBlackTime}
      ></UiBarsStatusBarsOverridesBlackTime>
      <View style={styles.uiBarsStatusBarsOverridesBlackTimeFiller}></View>
      <View style={styles.batteryRow}>
        <View style={styles.battery}>
          <View style={styles.rectangle14Row}>
            <View style={styles.rectangle14}>
              <View style={styles.rectangle15}></View>
            </View>
            <CombinedShape2 style={styles.combinedShape2}></CombinedShape2>
          </View>
        </View>
        <Wifi style={styles.wifi1}></Wifi>
        <MobileSignal style={styles.mobileSignal1}></MobileSignal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  uiBarsStatusBarsOverridesBlackTime: {
    height: 21,
    width: 54,
    backgroundColor: "transparent",
    marginLeft: 21,
    marginTop: 12
  },
  uiBarsStatusBarsOverridesBlackTimeFiller: {
    flex: 1,
    flexDirection: "row"
  },
  battery: {
    height: 12,
    width: 25,
    flexDirection: "row",
    marginRight: -45
  },
  rectangle14: {
    height: 11,
    width: 22,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.35)",
    borderRadius: 2.666666746139526,
    backgroundColor: "transparent"
  },
  rectangle15: {
    height: 7,
    width: 18,
    borderRadius: 1.333333373069763,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 2,
    marginLeft: 2
  },
  combinedShape2: {
    height: 4,
    width: 1,
    backgroundColor: "transparent",
    marginLeft: 1,
    marginTop: 4
  },
  rectangle14Row: {
    height: 11,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  wifi1: {
    height: 11,
    width: 15,
    backgroundColor: "transparent",
    marginRight: -37
  },
  mobileSignal1: {
    height: 11,
    width: 17,
    backgroundColor: "transparent",
    marginRight: 50,
    marginTop: 1
  },
  batteryRow: {
    height: 12,
    flexDirection: "row",
    marginRight: 14,
    marginTop: 17
  }
});

export default UiBarsStatusBarsBlackBase;
