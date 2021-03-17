import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import UiBarsStatusBarsOverridesBlackTime1 from "./UiBarsStatusBarsOverridesBlackTime1";
import CombinedShape5 from "./CombinedShape5";
import Wifi1 from "./Wifi1";
import MobileSignal1 from "./MobileSignal1";

function UiBarsStatusBarsBlackBase1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <UiBarsStatusBarsOverridesBlackTime1
        style={styles.uiBarsStatusBarsOverridesBlackTime1}
      ></UiBarsStatusBarsOverridesBlackTime1>
      <View style={styles.uiBarsStatusBarsOverridesBlackTime1Filler}></View>
      <View style={styles.battery1Row}>
        <View style={styles.battery1}>
          <View style={styles.rectangle17Row}>
            <View style={styles.rectangle17}>
              <View style={styles.rectangle18}></View>
            </View>
            <CombinedShape5 style={styles.combinedShape5}></CombinedShape5>
          </View>
        </View>
        <Wifi1 style={styles.wifi1}></Wifi1>
        <MobileSignal1 style={styles.mobileSignal1}></MobileSignal1>
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
  uiBarsStatusBarsOverridesBlackTime1: {
    height: 21,
    width: 54,
    backgroundColor: "transparent",
    marginLeft: 21,
    marginTop: 12
  },
  uiBarsStatusBarsOverridesBlackTime1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  battery1: {
    height: 12,
    width: 25,
    flexDirection: "row",
    marginRight: -45
  },
  rectangle17: {
    height: 11,
    width: 22,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.35)",
    borderRadius: 2.666666746139526,
    backgroundColor: "transparent"
  },
  rectangle18: {
    height: 7,
    width: 18,
    borderRadius: 1.333333373069763,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 2,
    marginLeft: 2
  },
  combinedShape5: {
    height: 4,
    width: 1,
    backgroundColor: "transparent",
    marginLeft: 1,
    marginTop: 4
  },
  rectangle17Row: {
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
  battery1Row: {
    height: 12,
    flexDirection: "row",
    marginRight: 14,
    marginTop: 17
  }
});

export default UiBarsStatusBarsBlackBase1;
