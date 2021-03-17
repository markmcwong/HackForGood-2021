import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import UiBarsStatusBarsBlackBase1 from "../components/UiBarsStatusBarsBlackBase1";
import Path from "../components/Path";
import Path1 from "../components/Path1";
import Path2 from "../components/Path2";
import Path19 from "../components/Path19";
import Path3 from "../components/Path3";
import Oval from "../components/Oval";
import Path9 from "../components/Path9";
import Path12 from "../components/Path12";
import Path13 from "../components/Path13";
import Path14 from "../components/Path14";
import Path4 from "../components/Path4";
import Path5 from "../components/Path5";
import Path8 from "../components/Path8";
import Path10 from "../components/Path10";
import Path11 from "../components/Path11";
import Shape from "../components/Shape";
import Shape1 from "../components/Shape1";
import Path15 from "../components/Path15";
import Path16 from "../components/Path16";
import Path17 from "../components/Path17";
import Path6 from "../components/Path6";
import Path7 from "../components/Path7";
import Path18 from "../components/Path18";
import Conversations4 from "../components/Conversations4";
import Conversations5 from "../components/Conversations5";
import Line from "../components/Line";
import Line1 from "../components/Line1";
import Line2 from "../components/Line2";
import Line3 from "../components/Line3";

function YouthAchievementPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectangleStack}>
        <ImageBackground
          style={styles.rectangle}
          imageStyle={styles.rectangle_imageStyle}
          source={require("../assets/images/Gradient_lS6HxeJ.png")}
        >
          <View style={styles.group2}>
            <View style={styles.rectangle1}>
              <UiBarsStatusBarsBlackBase1
                style={styles.uiBarsStatusBarsBlackBase1}
              ></UiBarsStatusBarsBlackBase1>
              <View style={styles.data}>
                <Text style={styles.achievement}>Achievement</Text>
              </View>
            </View>
          </View>
          <View style={styles.undrawChecklistRe2W7V}>
            <View style={styles.path1StackStack}>
              <View style={styles.path1Stack}>
                <Path style={styles.path1}></Path>
                <Path1 style={styles.path1}></Path1>
                <Path2 style={styles.path2}></Path2>
                <Path19 style={styles.path19}></Path19>
              </View>
              <View style={styles.path3StackStack}>
                <View style={styles.path3Stack}>
                  <Path3 style={styles.path3}></Path3>
                  <Oval style={styles.oval1}></Oval>
                  <Path9 style={styles.path9}></Path9>
                  <Path12 style={styles.path12}></Path12>
                  <Path13 style={styles.path13}></Path13>
                  <Path14 style={styles.path14}></Path14>
                </View>
                <View style={styles.path4Stack}>
                  <Path4 style={styles.path4}></Path4>
                  <Path5 style={styles.path5}></Path5>
                  <Path8 style={styles.path8}></Path8>
                  <Path10 style={styles.path10}></Path10>
                  <Path11 style={styles.path11}></Path11>
                  <Shape style={styles.shape1}></Shape>
                  <Shape1 style={styles.shape1}></Shape1>
                  <Path15 style={styles.path15}></Path15>
                  <Path16 style={styles.path16}></Path16>
                  <Path17 style={styles.path17}></Path17>
                </View>
                <View style={styles.path6Stack}>
                  <Path6 style={styles.path6}></Path6>
                  <Path7 style={styles.path7}></Path7>
                </View>
              </View>
            </View>
            <Path18 style={styles.path18}></Path18>
          </View>
          <View style={styles.navigationToolbarAction1}>
            <View style={styles.navigationBackgroundBar1Stack}>
              <View style={styles.navigationBackgroundBar1}>
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
                  <Conversations4
                    style={styles.conversations4}
                  ></Conversations4>
                  <ImageBackground
                    source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=cff48e4b76fbb56024353bf20c2798964efee344.png")}
                    resizeMode="cover"
                    style={styles.trophy1}
                    imageStyle={styles.trophy1_imageStyle}
                  >
                    <ImageBackground
                      source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bc801738243b278605190c0427102bc7009d6d9d.png")}
                      resizeMode="cover"
                      style={styles.trophy2}
                      imageStyle={styles.trophy2_imageStyle}
                    >
                      <ImageBackground
                        source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bd256a8481b7bc92a225a50bf853a298bf6f91ba.png")}
                        resizeMode="cover"
                        style={styles.trophy3}
                        imageStyle={styles.trophy3_imageStyle}
                      >
                        <Image
                          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bc801738243b278605190c0427102bc7009d6d9d.png")}
                          resizeMode="cover"
                          style={styles.trophy4}
                        ></Image>
                      </ImageBackground>
                    </ImageBackground>
                  </ImageBackground>
                  <ImageBackground
                    source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bfc006f499be00c51d87d55b239c17b8abcc5c20.png")}
                    resizeMode="cover"
                    style={styles.user}
                    imageStyle={styles.user_imageStyle}
                  >
                    <Image
                      source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=681336da3137934498f4207ca8c736d551a583b3.png")}
                      resizeMode="cover"
                      style={styles.userFilled}
                    ></Image>
                  </ImageBackground>
                </View>
              </View>
              <Conversations5 style={styles.conversations5}></Conversations5>
              <ImageBackground
                source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=cff48e4b76fbb56024353bf20c2798964efee344.png")}
                resizeMode="cover"
                style={styles.trophy11}
                imageStyle={styles.trophy11_imageStyle}
              >
                <ImageBackground
                  source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bc801738243b278605190c0427102bc7009d6d9d.png")}
                  resizeMode="cover"
                  style={styles.trophy21}
                  imageStyle={styles.trophy21_imageStyle}
                >
                  <ImageBackground
                    source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bd256a8481b7bc92a225a50bf853a298bf6f91ba.png")}
                    resizeMode="cover"
                    style={styles.trophy31}
                    imageStyle={styles.trophy31_imageStyle}
                  >
                    <Image
                      source={require("../assets/images/bc801738243b278605190c0427102bc7009d6d9d.png")}
                      resizeMode="cover"
                      style={styles.trophy41}
                    ></Image>
                  </ImageBackground>
                </ImageBackground>
              </ImageBackground>
              <ImageBackground
                source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=1c1af56ede9d48bb4190e2d50883ea57bbca3adc.png")}
                resizeMode="cover"
                style={styles.home1}
                imageStyle={styles.home1_imageStyle}
              >
                <Image
                  source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=dc56370fa412f92fb2197c10de157c58e0ba117f.png")}
                  resizeMode="cover"
                  style={styles.homeFilled1}
                ></Image>
              </ImageBackground>
              <ImageBackground
                source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bfc006f499be00c51d87d55b239c17b8abcc5c20.png")}
                resizeMode="cover"
                style={styles.user1}
                imageStyle={styles.user1_imageStyle}
              >
                <Image
                  source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=681336da3137934498f4207ca8c736d551a583b3.png")}
                  resizeMode="cover"
                  style={styles.userFilled1}
                ></Image>
              </ImageBackground>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.topGroup}>
          <View style={styles.navigationBackgroundBar}></View>
        </View>
        <View style={styles.rectangle2}>
          <View style={styles.badgeRow}>
            <Image
              source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=a1f0b4a38e62bdc59090ac67ba6183acdc2785c8.png")}
              resizeMode="cover"
              style={styles.badge}
            ></Image>
            <View style={styles.languageExpertColumn}>
              <Text style={styles.languageExpert}>Language Expert!</Text>
              <Text style={styles.chatWithElderlies}>
                Chat with elderlies in 10 different lang
              </Text>
            </View>
            <View style={styles.rectangle3}>
              <Text style={styles.style}>3</Text>
            </View>
          </View>
          <Line style={styles.line1}></Line>
          <View style={styles.badgesRedRow}>
            <Image
              source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=cf25a4d40d7f4684c9b9cdad32e6df5bdf9c0bf1.png")}
              resizeMode="cover"
              style={styles.badgesRed}
            ></Image>
            <View style={styles.extrovertColumn}>
              <Text style={styles.extrovert}>Extrovert!</Text>
              <Text style={styles.chatWith3Elderlie}>
                Chat with 3 elderlies
              </Text>
            </View>
            <View style={styles.rectangle4}>
              <Text style={styles.style1}>1</Text>
            </View>
          </View>
          <Line1 style={styles.line1}></Line1>
          <View style={styles.badgesBlueCopyRow}>
            <Image
              source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=2b93b9d00e42e3ff1de4afcbd17af6560c15753c.png")}
              resizeMode="cover"
              style={styles.badgesBlueCopy}
            ></Image>
            <View style={styles.rectangle5StackStack}>
              <View style={styles.rectangle5Stack}>
                <View style={styles.rectangle5}>
                  <Text style={styles.style2}>2</Text>
                </View>
                <Text style={styles.chatWithElderlies1}>
                  Chat with elderlies more than 60 minutes
                </Text>
              </View>
              <Text style={styles.veryTalkative}>Very Talkative!</Text>
            </View>
          </View>
          <Line2 style={styles.line2}></Line2>
          <View style={styles.badgesGreenRow}>
            <Image
              source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=d9747cc4df20fd5ac636c27cc3caa9643b9ef99f.png")}
              resizeMode="cover"
              style={styles.badgesGreen}
            ></Image>
            <View style={styles.inviterColumn}>
              <Text style={styles.inviter}>Inviter!</Text>
              <Text style={styles.inviteAndShareThi}>
                Invite and share this app to 5 friends
              </Text>
            </View>
            <View style={styles.rectangle6}>
              <Text style={styles.style3}>1</Text>
            </View>
          </View>
          <Line3 style={styles.line3}></Line3>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 896,
    width: 414,
    backgroundColor: "transparent"
  },
  rectangle_imageStyle: {},
  group2: {
    height: 106,
    width: 414
  },
  rectangle1: {
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
  data: {
    height: 32,
    width: 156,
    marginTop: 11,
    marginLeft: 22
  },
  achievement: {
    height: 32,
    width: 156,
    color: "rgba(255,114,0,1)",
    lineHeight: 32,
    textAlign: "center",
    fontSize: 24
  },
  undrawChecklistRe2W7V: {
    height: 157,
    width: 231,
    marginTop: 35,
    marginLeft: 89
  },
  path1: {
    position: "absolute",
    top: 1,
    left: 6,
    height: 54,
    width: 33,
    backgroundColor: "transparent"
  },
  path2: {
    position: "absolute",
    top: 10,
    left: 41,
    height: 45,
    width: 62,
    backgroundColor: "transparent"
  },
  path19: {
    position: "absolute",
    top: 41,
    left: 41,
    height: 14,
    width: 44,
    backgroundColor: "transparent"
  },
  path1Stack: {
    top: 0,
    left: 101,
    width: 110,
    height: 55,
    position: "absolute"
  },
  path3: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 48,
    backgroundColor: "transparent"
  },
  oval1: {
    position: "absolute",
    top: 6,
    left: 30,
    height: 14,
    width: 14,
    backgroundColor: "transparent"
  },
  path9: {
    position: "absolute",
    top: 23,
    left: 31,
    height: 23,
    width: 20,
    backgroundColor: "transparent"
  },
  path12: {
    position: "absolute",
    top: 25,
    left: 28,
    height: 35,
    width: 10,
    backgroundColor: "transparent"
  },
  path13: {
    position: "absolute",
    top: 21,
    left: 40,
    height: 25,
    width: 27,
    backgroundColor: "transparent"
  },
  path14: {
    position: "absolute",
    top: 5,
    left: 30,
    height: 7,
    width: 14,
    backgroundColor: "transparent"
  },
  path3Stack: {
    top: 0,
    left: 0,
    width: 67,
    height: 60,
    position: "absolute"
  },
  path4: {
    position: "absolute",
    top: 84,
    left: 6,
    height: 14,
    width: 5,
    backgroundColor: "transparent"
  },
  path5: {
    position: "absolute",
    top: 96,
    left: 0,
    height: 4,
    width: 11,
    backgroundColor: "transparent"
  },
  path8: {
    position: "absolute",
    top: 31,
    left: 0,
    height: 56,
    width: 45,
    backgroundColor: "transparent"
  },
  path10: {
    position: "absolute",
    top: 41,
    left: 11,
    height: 11,
    width: 7,
    backgroundColor: "transparent"
  },
  path11: {
    position: "absolute",
    top: 29,
    left: 40,
    height: 9,
    width: 10,
    backgroundColor: "transparent"
  },
  shape1: {
    position: "absolute",
    top: 15,
    left: 62,
    height: 34,
    width: 34,
    backgroundColor: "transparent"
  },
  path15: {
    position: "absolute",
    top: 21,
    left: 111,
    height: 7,
    width: 74,
    backgroundColor: "transparent"
  },
  path16: {
    position: "absolute",
    top: 36,
    left: 111,
    height: 7,
    width: 74,
    backgroundColor: "transparent"
  },
  path17: {
    position: "absolute",
    top: 24,
    left: 70,
    height: 16,
    width: 18,
    backgroundColor: "transparent"
  },
  path4Stack: {
    top: 11,
    left: 22,
    width: 198,
    height: 100,
    position: "absolute"
  },
  path6: {
    position: "absolute",
    top: 0,
    left: 5,
    height: 14,
    width: 5,
    backgroundColor: "transparent"
  },
  path7: {
    position: "absolute",
    top: 12,
    left: 0,
    height: 4,
    width: 11,
    backgroundColor: "transparent"
  },
  path6Stack: {
    top: 95,
    left: 51,
    width: 11,
    height: 16,
    position: "absolute"
  },
  path3StackStack: {
    top: 44,
    left: 0,
    width: 220,
    height: 111,
    position: "absolute"
  },
  path1StackStack: {
    width: 220,
    height: 155,
    marginLeft: 11
  },
  path18: {
    height: 1,
    width: 110,
    backgroundColor: "transparent",
    marginTop: 1
  },
  navigationToolbarAction1: {
    height: 68,
    width: 414,
    shadowColor: "rgba(151,151,151,1)",
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowRadius: 15,
    shadowOpacity: 1,
    marginTop: 530
  },
  navigationBackgroundBar1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 68,
    width: 414,
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
    height: 35,
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
  conversations4: {
    height: 35,
    width: 41,
    backgroundColor: "transparent",
    marginLeft: 69
  },
  trophy1: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)",
    marginLeft: 69
  },
  trophy1_imageStyle: {},
  trophy2: {
    height: 35,
    width: 35,
    backgroundColor: "transparent"
  },
  trophy2_imageStyle: {},
  trophy3: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
  },
  trophy3_imageStyle: {},
  trophy4: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(70,70,70,1)"
  },
  user: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)",
    marginLeft: 69
  },
  user_imageStyle: {},
  userFilled: {
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  homeRow: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: 30,
    marginLeft: 31,
    marginTop: 17
  },
  conversations5: {
    position: "absolute",
    top: 17,
    left: 135,
    height: 35,
    width: 41,
    backgroundColor: "transparent"
  },
  trophy11: {
    position: "absolute",
    top: 17,
    left: 245,
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
  },
  trophy11_imageStyle: {},
  trophy21: {
    height: 35,
    width: 35,
    backgroundColor: "transparent"
  },
  trophy21_imageStyle: {},
  trophy31: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
  },
  trophy31_imageStyle: {},
  trophy41: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(70,70,70,1)"
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
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  navigationBackgroundBar1Stack: {
    width: 414,
    height: 68
  },
  topGroup: {
    position: "absolute",
    top: 0,
    left: 1,
    height: 86,
    width: 414
  },
  navigationBackgroundBar: {
    height: 86,
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
    backgroundColor: "rgba(255,255,255,1)"
  },
  rectangle2: {
    position: "absolute",
    top: 298,
    left: 1,
    height: 760,
    width: 414,
    borderRadius: 37,
    backgroundColor: "rgba(255,255,255,1)"
  },
  badge: {
    height: 46,
    width: 46,
    shadowColor: "rgba(255,154,0,1)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    backgroundColor: "transparent"
  },
  languageExpert: {
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20
  },
  chatWithElderlies: {
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 14,
    marginTop: 4
  },
  languageExpertColumn: {
    width: 243,
    marginLeft: 13,
    marginBottom: 2
  },
  rectangle3: {
    height: 33,
    width: 33,
    borderRadius: 7,
    backgroundColor: "rgba(255,212,132,1)",
    marginLeft: 17,
    marginTop: 6
  },
  style: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 1,
    marginLeft: 9
  },
  badgeRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 54,
    marginLeft: 30,
    marginRight: 32
  },
  line1: {
    height: 1,
    width: 336,
    backgroundColor: "transparent",
    marginTop: 31,
    marginLeft: 36
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
  rectangle4: {
    height: 33,
    width: 33,
    borderRadius: 7,
    backgroundColor: "rgba(255,212,132,1)",
    marginLeft: 128,
    marginTop: 7
  },
  style1: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 2,
    marginLeft: 9
  },
  badgesRedRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 44,
    marginLeft: 30,
    marginRight: 32
  },
  badgesBlueCopy: {
    height: 46,
    width: 46,
    backgroundColor: "transparent",
    marginTop: 1
  },
  rectangle5: {
    position: "absolute",
    top: 0,
    left: 261,
    height: 33,
    width: 33,
    borderRadius: 7,
    backgroundColor: "rgba(255,212,132,1)"
  },
  style2: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginLeft: 9
  },
  chatWithElderlies1: {
    position: "absolute",
    top: 20,
    left: 0,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 14
  },
  rectangle5Stack: {
    top: 7,
    left: 0,
    width: 294,
    height: 37,
    position: "absolute"
  },
  veryTalkative: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20
  },
  rectangle5StackStack: {
    width: 294,
    height: 44,
    marginLeft: 13
  },
  badgesBlueCopyRow: {
    height: 47,
    flexDirection: "row",
    marginTop: 43,
    marginLeft: 30,
    marginRight: 31
  },
  line2: {
    height: 1,
    width: 336,
    backgroundColor: "transparent",
    marginTop: 36,
    marginLeft: 39
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
  rectangle6: {
    height: 33,
    width: 33,
    borderRadius: 7,
    backgroundColor: "rgba(255,212,132,1)",
    marginLeft: 25,
    marginTop: 7
  },
  style3: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 1,
    marginLeft: 10
  },
  badgesGreenRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 32
  },
  line3: {
    height: 1,
    width: 336,
    backgroundColor: "transparent",
    marginTop: 45,
    marginLeft: 39
  },
  rectangleStack: {
    width: 415,
    height: 1058
  }
});

export default YouthAchievementPage;
