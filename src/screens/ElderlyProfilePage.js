import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import UiBarsStatusBarsBlackBase from "../components/UiBarsStatusBarsBlackBase";
import Line12 from "../components/Line12";
import Line13 from "../components/Line13";
import Conversations12 from "../components/Conversations12";
import Conversations13 from "../components/Conversations13";
import UiBarsStatusBarsBlackBase1 from "../components/UiBarsStatusBarsBlackBase1";

function ElderlyProfilePage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectangleStack}>
        <View style={styles.rectangle}>
          <View style={styles.dataStack}>
            <View style={styles.data}>
              <Text style={styles.profile}>Profile</Text>
            </View>
            <View style={styles.group21}>
              <View style={styles.rectangle4}>
                <UiBarsStatusBarsBlackBase
                  style={styles.uiBarsStatusBarsBlackBase}
                ></UiBarsStatusBarsBlackBase>
                <View style={styles.data1}>
                  <Text style={styles.profile1}>Profile</Text>
                </View>
              </View>
            </View>
            <View style={styles.group22}>
              <View style={styles.rectangle5}>
                <UiBarsStatusBarsBlackBase
                  style={styles.uiBarsStatusBarsBlackBase1}
                ></UiBarsStatusBarsBlackBase>
                <View style={styles.data2Row}>
                  <View style={styles.data2}>
                    <Text style={styles.profile2}>Profile</Text>
                  </View>
                  <TouchableOpacity style={styles.data3}>
                    <Text style={styles.logout}>Logout</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.profilePic}>
            <View style={styles.rectangle2}>
              <Image
                source={require("../assets/images/ba9ba9b89ac491cb6ba86b9ac5131af05e8fb4f4.png")}
                resizeMode="cover"
                style={
                  styles.asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome
                }
              ></Image>
            </View>
            <Text style={styles.morikawa}>Morikawa</Text>
            <Text style={styles.joined0Y8M}>Joined 0Y 8M</Text>
          </View>
        </View>
        <View style={styles.rectangle1}>
          <View style={styles.languages}>
            <View style={styles.greentagCopyRow}>
              <ImageBackground
                source={require("../assets/images/0d11458cc9c15a4157256a373016c19c1a15c530.png")}
                resizeMode="cover"
                style={styles.greentagCopy}
                imageStyle={styles.greentagCopy_imageStyle}
              >
                <Text style={styles.japanese}>Japanese</Text>
              </ImageBackground>
              <ImageBackground
                source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=5232733fd27c6534e08e35ff04ea3c3c0fd9bd75.png")}
                resizeMode="cover"
                style={styles.orangetagCopy}
                imageStyle={styles.orangetagCopy_imageStyle}
              >
                <Text style={styles.mandarin}>Mandarin</Text>
              </ImageBackground>
              <ImageBackground
                source={require("../assets/images/5232733fd27c6534e08e35ff04ea3c3c0fd9bd75.png")}
                resizeMode="cover"
                style={styles.orangetagCopy1}
                imageStyle={styles.orangetagCopy1_imageStyle}
              >
                <Text style={styles.english}>English</Text>
              </ImageBackground>
            </View>
          </View>
          <Line12 style={styles.line12}></Line12>
          <View style={styles.rectangle3Stack}>
            <View style={styles.rectangle3}>
              <Text style={styles.aboutMe}>About Me</Text>
              <View style={styles.language}>
                <View style={styles.group1Row}>
                  <View style={styles.group1}>
                    <View style={styles.rectangleCopy91Stack}>
                      <View style={styles.rectangleCopy91}>
                        <View style={styles.rectangleCopy81}></View>
                      </View>
                      <Text style={styles.classicalMusic}>Classical Music</Text>
                    </View>
                  </View>
                  <View style={styles.group2}>
                    <View style={styles.rectangleCopy92Stack}>
                      <View style={styles.rectangleCopy92}>
                        <View style={styles.rectangleCopy82}></View>
                      </View>
                      <Text style={styles.desserts}>Desserts</Text>
                    </View>
                  </View>
                  <View style={styles.group}>
                    <View style={styles.rectangleCopy9Stack}>
                      <View style={styles.rectangleCopy9}>
                        <View style={styles.rectangleCopy8}></View>
                      </View>
                      <Text style={styles.taiChi}>Tai Chi</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.iAmMorikawaFirst}>
                I am Morikawa.{"\n"}First time using this app.{"\n"}Hope to chat
                more with our young generation.
              </Text>
              <Line13 style={styles.line13}></Line13>
            </View>
            <View style={styles.navigationToolbarAction1}>
              <View style={styles.navigationBackgroundBarStack}>
                <View style={styles.navigationBackgroundBar}>
                  <View style={styles.homeRow}>
                    <ImageBackground
                      source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=1c1af56ede9d48bb4190e2d50883ea57bbca3adc.png")}
                      resizeMode="cover"
                      style={styles.home}
                      imageStyle={styles.home_imageStyle}
                    >
                      <Image
                        source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=dc56370fa412f92fb2197c10de157c58e0ba117f.png")}
                        resizeMode="cover"
                        style={styles.homeFilled}
                      ></Image>
                    </ImageBackground>
                    <View style={styles.conversations12Stack}>
                      <Conversations12
                        style={styles.conversations12}
                      ></Conversations12>
                      <Image
                        source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=4e93ee24af88eec6185be2aaa9a4a9669640eeba.png")}
                        resizeMode="cover"
                        style={styles.conversationFilledCopy}
                      ></Image>
                    </View>
                    <Image
                      source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=cff48e4b76fbb56024353bf20c2798964efee344.png")}
                      resizeMode="cover"
                      style={styles.trophy1}
                    ></Image>
                    <ImageBackground
                      source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bfc006f499be00c51d87d55b239c17b8abcc5c20.png")}
                      resizeMode="cover"
                      style={styles.user}
                      imageStyle={styles.user_imageStyle}
                    >
                      <Image
                        source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=e7ffc50adfe0b0123c8a663725a30d1899a562b1.png")}
                        resizeMode="cover"
                        style={styles.userFilled}
                      ></Image>
                    </ImageBackground>
                  </View>
                </View>
                <Conversations13
                  style={styles.conversations13}
                ></Conversations13>
                <Image
                  source={require("../assets/images/4e93ee24af88eec6185be2aaa9a4a9669640eeba.png")}
                  resizeMode="cover"
                  style={styles.conversationFilledCopy1}
                ></Image>
                <Image
                  source={require("../assets/images/cff48e4b76fbb56024353bf20c2798964efee344.png")}
                  resizeMode="cover"
                  style={styles.trophy11}
                ></Image>
                <ImageBackground
                  source={require("../assets/images/1c1af56ede9d48bb4190e2d50883ea57bbca3adc.png")}
                  resizeMode="cover"
                  style={styles.home1}
                  imageStyle={styles.home1_imageStyle}
                >
                  <Image
                    source={require("../assets/images/dc56370fa412f92fb2197c10de157c58e0ba117f.png")}
                    resizeMode="cover"
                    style={styles.homeFilled1}
                  ></Image>
                </ImageBackground>
                <ImageBackground
                  source={require("../assets/images/bfc006f499be00c51d87d55b239c17b8abcc5c20.png")}
                  resizeMode="cover"
                  style={styles.user1}
                  imageStyle={styles.user1_imageStyle}
                >
                  <Image
                    source={require("../assets/images/e7ffc50adfe0b0123c8a663725a30d1899a562b1.png")}
                    resizeMode="cover"
                    style={styles.userFilled1}
                  ></Image>
                </ImageBackground>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group2}>
          <UiBarsStatusBarsBlackBase1
            style={styles.uiBarsStatusBarsBlackBase1}
          ></UiBarsStatusBarsBlackBase1>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 1086,
    width: 414,
    backgroundColor: "rgba(38,194,129,1)"
  },
  data: {
    position: "absolute",
    top: 60,
    left: 22,
    height: 32,
    width: 88
  },
  profile: {
    height: 32,
    width: 88,
    color: "rgba(38,194,129,1)",
    lineHeight: 32,
    textAlign: "center",
    fontSize: 24
  },
  group21: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 106,
    width: 414
  },
  rectangle4: {
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
  uiBarsStatusBarsBlackBase: {
    height: 49,
    width: 414,
    backgroundColor: "transparent"
  },
  data1: {
    height: 32,
    width: 87,
    marginTop: 11,
    marginLeft: 22
  },
  profile1: {
    height: 32,
    width: 87,
    color: "rgba(38,194,129,1)",
    lineHeight: 32,
    textAlign: "center",
    fontSize: 24
  },
  group22: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 106,
    width: 414
  },
  rectangle5: {
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
  uiBarsStatusBarsBlackBase1: {
    height: 49,
    width: 414,
    backgroundColor: "transparent"
  },
  data2: {
    height: 32,
    width: 89
  },
  profile2: {
    height: 32,
    width: 89,
    color: "rgba(38,194,129,1)",
    lineHeight: 32,
    textAlign: "center",
    fontSize: 24
  },
  data3: {
    height: 32,
    width: 89,
    marginLeft: 197
  },
  logout: {
    height: 32,
    width: 89,
    color: "rgba(38,194,129,1)",
    lineHeight: 32,
    textAlign: "center",
    fontSize: 24
  },
  data2Row: {
    height: 32,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 22,
    marginRight: 17
  },
  dataStack: {
    width: 414,
    height: 106
  },
  profilePic: {
    height: 207,
    width: 181,
    marginTop: 19,
    marginLeft: 117
  },
  rectangle2: {
    height: 138,
    width: 138,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 37,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)",
    marginLeft: 21
  },
  asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome: {
    height: 317,
    width: 476,
    backgroundColor: "transparent",
    marginTop: -68,
    marginLeft: -144
  },
  morikawa: {
    height: 41,
    width: 181,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(70,69,76,1)",
    fontSize: 30,
    marginTop: 9
  },
  joined0Y8M: {
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 14,
    marginLeft: 46
  },
  rectangle1: {
    position: "absolute",
    top: 224,
    left: 0,
    height: 717,
    width: 415,
    borderWidth: 1,
    borderColor: "rgba(229,229,229,1)",
    borderRadius: 37,
    backgroundColor: "rgba(255,250,239,1)"
  },
  languages: {
    height: 30,
    width: 300,
    flexDirection: "row",
    marginTop: 125,
    marginLeft: 54
  },
  greentagCopy: {
    height: 30,
    width: 98,
    backgroundColor: "transparent"
  },
  greentagCopy_imageStyle: {},
  japanese: {
    height: 19,
    width: 62,
    color: "rgba(113,113,113,1)",
    fontSize: 14,
    marginTop: 6,
    marginLeft: 30
  },
  orangetagCopy: {
    height: 30,
    width: 92,
    backgroundColor: "transparent",
    marginLeft: 9
  },
  orangetagCopy_imageStyle: {},
  mandarin: {
    height: 19,
    width: 62,
    color: "rgba(113,113,113,1)",
    fontSize: 14,
    marginTop: 6,
    marginLeft: 25
  },
  orangetagCopy1: {
    height: 30,
    width: 92,
    backgroundColor: "transparent",
    marginLeft: 9
  },
  orangetagCopy1_imageStyle: {},
  english: {
    height: 19,
    width: 49,
    color: "rgba(113,113,113,1)",
    fontSize: 14,
    marginTop: 6,
    marginLeft: 28
  },
  greentagCopyRow: {
    height: 30,
    flexDirection: "row",
    flex: 1
  },
  line12: {
    height: 1,
    width: 336,
    backgroundColor: "transparent",
    marginTop: 21,
    marginLeft: 27
  },
  rectangle3: {
    position: "absolute",
    top: 0,
    left: 1,
    height: 496,
    width: 414,
    backgroundColor: "rgba(255,255,255,1)"
  },
  aboutMe: {
    height: 27,
    width: 234,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20,
    marginTop: 19,
    marginLeft: 27
  },
  language: {
    height: 40,
    width: 349,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 27
  },
  group1: {
    height: 40,
    width: 129
  },
  rectangleCopy91: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 129
  },
  rectangleCopy81: {
    height: 40,
    width: 129,
    opacity: 0.6782691592261905,
    borderWidth: 2,
    borderColor: "rgba(38,194,129,1)",
    borderRadius: 19,
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
  rectangleCopy91Stack: {
    width: 129,
    height: 40
  },
  group2: {
    position: "absolute",
    top: 0,
    left: 1,
    height: 49,
    width: 414
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
    backgroundColor: "rgba(255,255,255,1)"
  },
  desserts: {
    position: "absolute",
    top: 13,
    left: 16,
    height: 17,
    width: 65,
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
    marginLeft: 17
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
  rectangleCopy9Stack: {
    width: 90,
    height: 40
  },
  group1Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  iAmMorikawaFirst: {
    backgroundColor: "transparent",
    lineHeight: 24,
    textAlign: "justify",
    color: "rgba(70,69,76,1)",
    fontSize: 14,
    marginTop: 19,
    marginLeft: 27
  },
  line13: {
    height: 1,
    width: 336,
    backgroundColor: "transparent",
    marginTop: 38,
    marginLeft: 26
  },
  navigationToolbarAction1: {
    position: "absolute",
    top: 426,
    left: 0,
    height: 68,
    width: 414,
    shadowColor: "rgba(151,151,151,1)",
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowRadius: 15,
    shadowOpacity: 1
  },
  navigationBackgroundBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 68,
    width: 414,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    shadowColor: "rgba(235,235,235,1)",
    shadowOffset: {
      height: -1,
      width: 0
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  home: {
    height: 34,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
  },
  home_imageStyle: {},
  homeFilled: {
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  conversations12: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 34,
    width: 41,
    backgroundColor: "transparent"
  },
  conversationFilledCopy: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  conversations12Stack: {
    width: 41,
    height: 34,
    marginLeft: 120
  },
  trophy1: {
    backgroundColor: "rgba(111,111,111,1)",
    marginLeft: 17,
    height: 0,
    width: 0,
    opacity: 0
  },
  user: {
    height: 34,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)",
    marginLeft: 68
  },
  user_imageStyle: {},
  userFilled: {
    height: 34,
    width: 29,
    backgroundColor: "rgba(70,70,70,1)",
    marginLeft: 3
  },
  homeRow: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 32,
    marginLeft: 31,
    marginTop: 17
  },
  conversations13: {
    position: "absolute",
    top: 17,
    left: 187,
    height: 35,
    width: 41,
    backgroundColor: "transparent"
  },
  conversationFilledCopy1: {
    position: "absolute",
    top: 17,
    left: 187,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  trophy11: {
    position: "absolute",
    top: 17,
    left: 245,
    backgroundColor: "rgba(111,111,111,1)",
    height: 0,
    width: 0,
    opacity: 0
  },
  home1: {
    position: "absolute",
    top: 17,
    left: 31,
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
  },
  home1_imageStyle: {},
  homeFilled1: {
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  user1: {
    position: "absolute",
    top: 17,
    left: 349,
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
  },
  user1_imageStyle: {},
  userFilled1: {
    height: 35,
    width: 29,
    backgroundColor: "rgba(70,70,70,1)",
    marginLeft: 3
  },
  navigationBackgroundBarStack: {
    width: 414,
    height: 68
  },
  rectangle3Stack: {
    width: 415,
    height: 496,
    marginTop: 1
  },
  rectangleStack: {
    width: 415,
    height: 1086
  }
});

export default ElderlyProfilePage;
