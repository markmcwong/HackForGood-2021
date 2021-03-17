import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import UiBarsStatusBarsBlackBase from "../components/UiBarsStatusBarsBlackBase";
import Path28 from "../components/Path28";
import Line7 from "../components/Line7";
import Line8 from "../components/Line8";

function ElderlyBadgesPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group2Stack}>
        <View style={styles.group2}>
          <View style={styles.rectangleStack}>
            <View style={styles.rectangle}>
              <View style={styles.data}>
                <Text style={styles.badges}>Badges</Text>
              </View>
            </View>
            <UiBarsStatusBarsBlackBase
              style={styles.uiBarsStatusBarsBlackBase}
            ></UiBarsStatusBarsBlackBase>
          </View>
        </View>
        <Path28 style={styles.path28}></Path28>
      </View>
      <View style={styles.group}>
        <View style={styles.badgesRedRow}>
          <Image
            source={require("../assets/images/cf25a4d40d7f4684c9b9cdad32e6df5bdf9c0bf1.png")}
            resizeMode="cover"
            style={styles.badgesRed}
          ></Image>
          <View style={styles.extrovertColumn}>
            <Text style={styles.extrovert}>Extrovert!</Text>
            <Text style={styles.chatWith3Elderlie}>Chat with 3 elderlies</Text>
          </View>
        </View>
        <Line7 style={styles.line7}></Line7>
        <View style={styles.badgesGreenRow}>
          <Image
            source={require("../assets/images/d9747cc4df20fd5ac636c27cc3caa9643b9ef99f.png")}
            resizeMode="cover"
            style={styles.badgesGreen}
          ></Image>
          <View style={styles.inviterColumn}>
            <Text style={styles.inviter}>Inviter!</Text>
            <Text style={styles.inviteAndShareThi}>
              Invite and share this app to 5 friends
            </Text>
          </View>
        </View>
        <Line8 style={styles.line8}></Line8>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  group2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 106,
    width: 419
  },
  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 106,
    width: 414,
    shadowColor: "rgba(163,168,180,0.25)",
    shadowOffset: {
      height: 6,
      width: 0
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  data: {
    height: 32,
    width: 87,
    marginTop: 58,
    marginLeft: 64
  },
  badges: {
    height: 32,
    width: 87,
    color: "rgba(38,194,129,1)",
    lineHeight: 32,
    textAlign: "center",
    fontSize: 24
  },
  uiBarsStatusBarsBlackBase: {
    position: "absolute",
    top: 0,
    left: 5,
    height: 49,
    width: 414,
    backgroundColor: "transparent"
  },
  rectangleStack: {
    width: 419,
    height: 106
  },
  path28: {
    position: "absolute",
    top: 64,
    left: 27,
    height: 22,
    width: 13,
    backgroundColor: "transparent"
  },
  group2Stack: {
    width: 419,
    height: 106,
    marginLeft: -5
  },
  group: {
    height: 179,
    width: 342,
    marginTop: 45,
    marginLeft: 28
  },
  badgesRed: {
    height: 46,
    width: 46,
    backgroundColor: "rgba(255,57,57,0.3524366258741259)"
  },
  extrovert: {
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20
  },
  chatWith3Elderlie: {
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 14,
    marginTop: 4
  },
  extrovertColumn: {
    width: 132,
    marginLeft: 13,
    marginTop: 1,
    marginBottom: 1
  },
  badgesRedRow: {
    height: 46,
    flexDirection: "row",
    marginRight: 151
  },
  line7: {
    height: 1,
    width: 336,
    backgroundColor: "transparent",
    marginTop: 31,
    marginLeft: 6
  },
  badgesGreen: {
    height: 46,
    width: 46,
    backgroundColor: "transparent"
  },
  inviter: {
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20
  },
  inviteAndShareThi: {
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 14,
    marginTop: 4
  },
  inviterColumn: {
    width: 235,
    marginLeft: 13,
    marginBottom: 2
  },
  badgesGreenRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 1,
    marginRight: 47
  },
  line8: {
    height: 1,
    width: 336,
    backgroundColor: "transparent",
    marginTop: 24,
    marginLeft: 6
  }
});

export default ElderlyBadgesPage;
