import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import Line6 from "../components/Line6";
import Oval1 from "../components/Oval1";

function ElderlyDetail(props) {
  return (
    <View style={styles.container}>
      <View
        style={
          styles.asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHomeStack
        }
      >
        <ImageBackground
          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=e635ebdbf2c20eee1895630b64289c1ba9e8868f.png")}
          resizeMode="cover"
          style={
            styles.asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome
          }
          imageStyle={
            styles.asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome_imageStyle
          }
        >
          <Text style={styles.languages}>Languages:</Text>
        </ImageBackground>
        <Text style={styles.style}>←</Text>
        <View style={styles.content}>
          <View style={styles.content1Stack}>
            <View style={styles.content1}>
              <View style={styles.bg}></View>
            </View>
            <View style={styles.bg1}></View>
          </View>
        </View>
        <Image
          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=cf25a4d40d7f4684c9b9cdad32e6df5bdf9c0bf1.png")}
          resizeMode="cover"
          style={styles.badgesRed}
        ></Image>
        <Text style={styles.badges}>Badges</Text>
        <Image
          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=d9747cc4df20fd5ac636c27cc3caa9643b9ef99f.png")}
          resizeMode="cover"
          style={styles.badgesGreen}
        ></Image>
        <Text style={styles.amandaHereWouldL}>
          Amanda here!{"\n"}Would love to hear your life stories and have a{" "}
          {"\n"}chill chat with afternoon tea!
        </Text>
        <View style={styles.language}>
          <View style={styles.group1Row}>
            <View style={styles.group1}>
              <View style={styles.rectangleCopy91Stack}>
                <View style={styles.rectangleCopy91}>
                  <View style={styles.rectangleCopy81}></View>
                </View>
                <Text style={styles.french}>French</Text>
              </View>
            </View>
            <View style={styles.group2}>
              <View style={styles.rectangleCopy92Stack}>
                <View style={styles.rectangleCopy92}>
                  <View style={styles.rectangleCopy82}></View>
                </View>
                <Text style={styles.japanese}>Japanese</Text>
              </View>
            </View>
            <View style={styles.group}>
              <View style={styles.rectangleCopy9Stack}>
                <View style={styles.rectangleCopy9}>
                  <View style={styles.rectangleCopy8}></View>
                </View>
                <Text style={styles.english}>English</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.language1}>
          <View style={styles.group4Row}>
            <View style={styles.group4}>
              <View style={styles.rectangleCopy94Stack}>
                <View style={styles.rectangleCopy94}>
                  <View style={styles.rectangleCopy84}></View>
                </View>
                <Text style={styles.classicalMusic}>Classical Music</Text>
              </View>
            </View>
            <View style={styles.group5}>
              <View style={styles.rectangleCopy95Stack}>
                <View style={styles.rectangleCopy95}>
                  <View style={styles.rectangleCopy85}></View>
                </View>
                <Text style={styles.desserts}>Desserts</Text>
              </View>
            </View>
            <View style={styles.group3}>
              <View style={styles.rectangleCopy93Stack}>
                <View style={styles.rectangleCopy93}>
                  <View style={styles.rectangleCopy83}></View>
                </View>
                <Text style={styles.origami}>Origami</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.amanda}>Amanda</Text>
        <Text style={styles.aboutMe}>About Me</Text>
        <Line6 style={styles.line6}></Line6>
        <TouchableOpacity style={styles.group2}>
          <View style={styles.oval1Stack}>
            <Oval1 style={styles.oval1}></Oval1>
            <Text style={styles.sendMaterial}></Text>
            <Image
              source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=9fe20f34bbf6e0ebb8c4b81ae06615dbce58bbac.png")}
              resizeMode="cover"
              style={styles.paperPlane}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 476,
    width: 635,
    backgroundColor: "transparent"
  },
  asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome_imageStyle: {},
  languages: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    letterSpacing: -0.01788839999999998,
    marginTop: 415,
    marginLeft: 78
  },
  style: {
    position: "absolute",
    top: 35,
    left: 78,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 36,
    letterSpacing: -0.03577679999999997
  },
  content: {
    position: "absolute",
    top: 332,
    left: 48,
    height: 592,
    width: 414
  },
  content1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 592,
    width: 414
  },
  bg: {
    height: 592,
    width: 414,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "rgba(38,194,129,1)"
  },
  bg1: {
    position: "absolute",
    top: 178,
    left: 0,
    height: 414,
    width: 414,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "rgba(255,255,255,1)"
  },
  content1Stack: {
    width: 414,
    height: 592
  },
  badgesRed: {
    position: "absolute",
    top: 765,
    left: 78,
    height: 46,
    width: 46,
    backgroundColor: "rgba(255,57,57,0.3524366258741259)"
  },
  badges: {
    position: "absolute",
    top: 729,
    left: 78,
    height: 27,
    width: 234,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20
  },
  badgesGreen: {
    position: "absolute",
    top: 765,
    left: 146,
    height: 46,
    width: 46,
    backgroundColor: "transparent"
  },
  amandaHereWouldL: {
    position: "absolute",
    top: 624,
    left: 78,
    height: 81,
    width: 325,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(0,0,0,0.7366375689739948)",
    fontSize: 14,
    letterSpacing: -0.01391319999999999
  },
  language: {
    position: "absolute",
    top: 448,
    left: 78,
    height: 40,
    width: 309,
    flexDirection: "row"
  },
  group1: {
    height: 40,
    width: 106
  },
  rectangleCopy91: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 106
  },
  rectangleCopy81: {
    height: 40,
    width: 106,
    opacity: 0.6782691592261905,
    borderWidth: 3,
    borderColor: "rgba(32,128,88,1)",
    borderRadius: 19,
    shadowColor: "rgba(138,149,158,0.3672318892045455)",
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  french: {
    position: "absolute",
    top: 13,
    left: 20,
    height: 17,
    width: 65,
    color: "rgba(0,0,0,0.7761529242242133)",
    textAlign: "center",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy91Stack: {
    width: 106,
    height: 40
  },
  group2: {
    position: "absolute",
    top: 811,
    left: 381,
    height: 60,
    width: 60,
    shadowColor: "rgba(0,0,0,0.2576490282178759)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 15,
    shadowOpacity: 1
  },
  rectangleCopy92: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 96
  },
  rectangleCopy82: {
    height: 40,
    width: 96,
    opacity: 0.6782691592261905,
    borderWidth: 1,
    borderColor: "rgba(23,45,85,1)",
    borderRadius: 19,
    shadowColor: "rgba(138,149,158,0.3672318892045455)",
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  japanese: {
    position: "absolute",
    top: 13,
    left: 19,
    height: 17,
    width: 59,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(23,49,71,1)",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy92Stack: {
    width: 96,
    height: 40
  },
  group: {
    height: 40,
    width: 90,
    marginLeft: 9
  },
  rectangleCopy9: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 90
  },
  rectangleCopy8: {
    height: 40,
    width: 90,
    opacity: 0.6782691592261905,
    borderWidth: 1,
    borderColor: "rgba(23,45,85,1)",
    borderRadius: 19,
    shadowColor: "rgba(138,149,158,0.3672318892045455)",
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  english: {
    position: "absolute",
    top: 13,
    left: 20,
    height: 17,
    width: 51,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(23,49,71,1)",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy9Stack: {
    width: 90,
    height: 40
  },
  group1Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  language1: {
    position: "absolute",
    top: 572,
    left: 78,
    height: 40,
    width: 333,
    flexDirection: "row"
  },
  group4: {
    height: 40,
    width: 129
  },
  rectangleCopy94: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 129
  },
  rectangleCopy84: {
    height: 40,
    width: 129,
    opacity: 0.6782691592261905,
    borderWidth: 2,
    borderColor: "rgba(38,194,129,1)",
    borderRadius: 19,
    shadowColor: "rgba(138,149,158,0.3672318892045455)",
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  classicalMusic: {
    position: "absolute",
    top: 13,
    left: 14,
    height: 17,
    width: 101,
    color: "rgba(0,0,0,0.7761529242242133)",
    textAlign: "center",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy94Stack: {
    width: 129,
    height: 40
  },
  group5: {
    height: 40,
    width: 96,
    marginLeft: 9
  },
  rectangleCopy95: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 96
  },
  rectangleCopy85: {
    height: 40,
    width: 96,
    opacity: 0.6782691592261905,
    borderWidth: 1,
    borderColor: "rgba(23,45,85,1)",
    borderRadius: 19,
    shadowColor: "rgba(138,149,158,0.3672318892045455)",
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  desserts: {
    position: "absolute",
    top: 13,
    left: 23,
    height: 17,
    width: 51,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(23,49,71,1)",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy95Stack: {
    width: 96,
    height: 40
  },
  group3: {
    height: 40,
    width: 90,
    marginLeft: 9
  },
  rectangleCopy93: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 90
  },
  rectangleCopy83: {
    height: 40,
    width: 90,
    opacity: 0.6782691592261905,
    borderWidth: 1,
    borderColor: "rgba(23,45,85,1)",
    borderRadius: 19,
    shadowColor: "rgba(138,149,158,0.3672318892045455)",
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  origami: {
    position: "absolute",
    top: 13,
    left: 20,
    height: 17,
    width: 51,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(23,49,71,1)",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy93Stack: {
    width: 90,
    height: 40
  },
  group4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  amanda: {
    position: "absolute",
    top: 365,
    left: 71,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    letterSpacing: -0.03577679999999997
  },
  aboutMe: {
    position: "absolute",
    top: 533,
    left: 78,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20,
    letterSpacing: -0.01987599999999998
  },
  line6: {
    position: "absolute",
    top: 717,
    left: 76,
    height: 1,
    width: 336,
    backgroundColor: "transparent"
  },
  oval1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 60,
    width: 60,
    backgroundColor: "transparent"
  },
  sendMaterial: {
    position: "absolute",
    top: 15,
    left: 16,
    transform: [
      {
        rotate: "-15.00deg"
      }
    ],
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    height: 0,
    width: 0,
    opacity: 0
  },
  paperPlane: {
    position: "absolute",
    top: 16,
    left: 14,
    height: 30,
    width: 30,
    backgroundColor: "rgba(255,255,255,1)"
  },
  oval1Stack: {
    width: 60,
    height: 60
  },
  asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHomeStack: {
    width: 635,
    height: 924,
    marginLeft: -49
  }
});

export default ElderlyDetail;
