import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import Oval8 from "../components/Oval8";

function YouthDetail(props) {
  return (
    <View style={styles.container}>
      <View
        style={
          styles.asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHomeStack
        }
      >
        <ImageBackground
          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=ba9ba9b89ac491cb6ba86b9ac5131af05e8fb4f4.png")}
          resizeMode="cover"
          style={
            styles.asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome
          }
          imageStyle={
            styles.asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome_imageStyle
          }
        >
          <Text style={styles.style}>←</Text>
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.content1Stack}>
            <View style={styles.content1}>
              <View style={styles.bg}></View>
            </View>
            <View style={styles.bg1}></View>
          </View>
        </View>
        <Text style={styles.iAmMorikawaFirst}>
          I am Morikawa.{"\n"}First time using this app.{"\n"}Hope to chat more
          with our young generation.
        </Text>
        <View style={styles.language}>
          <View style={styles.group1Row}>
            <View style={styles.group1}>
              <View style={styles.rectangleCopy91Stack}>
                <View style={styles.rectangleCopy91}>
                  <View style={styles.rectangleCopy81}></View>
                </View>
                <Text style={styles.japanese}>Japanese</Text>
              </View>
            </View>
            <View style={styles.group2}>
              <View style={styles.rectangleCopy92Stack}>
                <View style={styles.rectangleCopy92}>
                  <View style={styles.rectangleCopy82}></View>
                </View>
                <Text style={styles.mandarin}>Mandarin</Text>
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
                <Text style={styles.taiChi}>Tai Chi</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.morikawa}>Morikawa</Text>
        <Text style={styles.about}>About</Text>
        <Text style={styles.languages}>Languages:</Text>
        <TouchableOpacity style={styles.group2}>
          <View style={styles.oval8Stack}>
            <Oval8 style={styles.oval8}></Oval8>
            <Text style={styles.sendMaterial}></Text>
            <Image
              source={require("../assets/images/9fe20f34bbf6e0ebb8c4b81ae06615dbce58bbac.png")}
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
    height: 424,
    width: 635,
    backgroundColor: "transparent"
  },
  asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome_imageStyle: {},
  style: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 36,
    letterSpacing: -0.03577679999999997,
    marginTop: 35,
    marginLeft: 118
  },
  content: {
    position: "absolute",
    top: 380,
    left: 89,
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
    backgroundColor: "rgba(239,181,86,1)"
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
  iAmMorikawaFirst: {
    position: "absolute",
    top: 680,
    left: 127,
    height: 134,
    width: 325,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,0.7366375689739948)",
    fontSize: 14,
    letterSpacing: -0.01391319999999999
  },
  language: {
    position: "absolute",
    top: 489,
    left: 127,
    height: 40,
    width: 310,
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
    borderWidth: 2,
    borderColor: "rgba(245,166,35,1)",
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
    left: 21,
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
    top: 813,
    left: 422,
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
  mandarin: {
    position: "absolute",
    top: 12,
    left: 18,
    height: 17,
    width: 61,
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
    top: 619,
    left: 127,
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
    borderColor: "rgba(245,166,35,1)",
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
  taiChi: {
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
  morikawa: {
    position: "absolute",
    top: 409,
    left: 118,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    letterSpacing: -0.03577679999999997
  },
  about: {
    position: "absolute",
    top: 587,
    left: 127,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    letterSpacing: -0.01987599999999998
  },
  languages: {
    position: "absolute",
    top: 458,
    left: 127,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    letterSpacing: -0.01788839999999998
  },
  oval8: {
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
    top: 14,
    left: 13,
    height: 30,
    width: 30,
    backgroundColor: "rgba(255,255,255,1)"
  },
  oval8Stack: {
    width: 60,
    height: 60
  },
  asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHomeStack: {
    width: 635,
    height: 972,
    marginLeft: -89
  }
});

export default YouthDetail;
