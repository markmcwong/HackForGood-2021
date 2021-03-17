import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import MaskCopy9 from "../components/MaskCopy9";
import Oval6 from "../components/Oval6";
import OvalCopy from "../components/OvalCopy";
import Line2 from "../components/Line2";
import MaskCopy12 from "../components/MaskCopy12";
import MaskCopy5 from "../components/MaskCopy5";
import Oval7 from "../components/Oval7";
import Line21 from "../components/Line21";
import MaskCopy10 from "../components/MaskCopy10";
import Line22 from "../components/Line22";
import MaskCopy13 from "../components/MaskCopy13";
import { Image as SvgImage, Defs, Svg, Path, Mask } from "react-native-svg";
import MaskCopy51 from "../components/MaskCopy51";
import Line23 from "../components/Line23";
import MaskCopy11 from "../components/MaskCopy11";
import Line24 from "../components/Line24";
import UiBarsStatusBarsBlackBase from "../components/UiBarsStatusBarsBlackBase";
import Conversations8 from "../components/Conversations8";
import Conversations9 from "../components/Conversations9";

function ElderlyChatlist(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group11}>
        <View style={styles.group10}>
          <View style={styles.group6Copy2}>
            <View style={styles.group7Row}>
              <View style={styles.group7}>
                <MaskCopy9 style={styles.maskCopy9}></MaskCopy9>
              </View>
              <View style={styles.group4}>
                <View style={styles.yokoMatsumotoStack}>
                  <Text style={styles.yokoMatsumoto}>Yoko Matsumoto</Text>
                  <View style={styles.group5}>
                    <Text style={styles.pm}>5:30 PM</Text>
                    <View style={styles.youSentAStickerRow}>
                      <Text style={styles.youSentASticker}>
                        You sent a sticker
                      </Text>
                      <View style={styles.group15}>
                        <View style={styles.oval6Row}>
                          <Oval6 style={styles.oval6}></Oval6>
                          <OvalCopy style={styles.ovalCopy1}></OvalCopy>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Line2 style={styles.line21}></Line2>
          <View style={styles.group9}>
            <View style={styles.group6Copy4Row}>
              <View style={styles.group6Copy4}>
                <View style={styles.group73}>
                  <View style={styles.maskCopy12Stack}>
                    <MaskCopy12 style={styles.maskCopy12}></MaskCopy12>
                    <MaskCopy5 style={styles.maskCopy51}></MaskCopy5>
                  </View>
                </View>
              </View>
              <View style={styles.group43}>
                <View style={styles.samuelJoyceRow}>
                  <Text style={styles.samuelJoyce}>Samuel Joyce</Text>
                  <Text style={styles.pm1}>4:00 PM</Text>
                </View>
                <View style={styles.group53Row}>
                  <View style={styles.group53}>
                    <Text style={styles.samuelSentASticke}>
                      Samuel sent a sticker
                    </Text>
                  </View>
                  <Oval7 style={styles.oval7}></Oval7>
                </View>
              </View>
            </View>
          </View>
          <Line21 style={styles.line21}></Line21>
          <View style={styles.group6Copy6}>
            <View style={styles.group71Row}>
              <View style={styles.group71}>
                <MaskCopy10 style={styles.maskCopy10}></MaskCopy10>
              </View>
              <View style={styles.group41}>
                <View style={styles.yunaKimRow}>
                  <Text style={styles.yunaKim}>Yuna Kim</Text>
                  <Text style={styles.aug}>20 Aug</Text>
                </View>
                <View style={styles.group51}>
                  <Text style={styles.yunaSentAnAttachm}>
                    Yuna sent an attachment
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Line22 style={styles.line22}></Line22>
          <TouchableOpacity style={styles.group9Copy2}>
            <View style={styles.group6Copy41Row}>
              <View style={styles.group6Copy41}>
                <View style={styles.group74}>
                  <View style={styles.maskCopy13Stack}>
                    <MaskCopy13 style={styles.maskCopy13}></MaskCopy13>
                    <Svg
                      viewBox="0 0 65.79104477611938 66.06854838709707"
                      style={styles.photo20210317013205}
                    >
                      <Defs>
                        <Mask id="Me0BeoC" x={0} y={0}>
                          <Path
                            fill="white"
                            d={
                              "M32.90 66.07 C51.06 66.07 65.79 51.28 65.79 33.03 C65.79 14.79 51.06 0.00 32.90 0.00 C14.73 0.00 0.00 14.79 0.00 33.03 C0.00 51.28 14.73 66.07 32.90 66.07 Z"
                            }
                          />
                        </Mask>
                      </Defs>
                      <SvgImage
                        href={require("../assets/images/23236c78eb72f6d26f87405d3090ce2951b98ce1.png")}
                        x={-17.537313432835617}
                        y={-1.5564516129032882}
                        width={125}
                        height={94}
                        mask={"url(#Me0BeoC)"}
                      ></SvgImage>
                    </Svg>
                    <MaskCopy51 style={styles.maskCopy51}></MaskCopy51>
                  </View>
                </View>
              </View>
              <View style={styles.group44}>
                <View style={styles.amandaBrownRow}>
                  <Text style={styles.amandaBrown}>Amanda Brown</Text>
                  <Text style={styles.aug2}>21 Aug</Text>
                </View>
                <View style={styles.group54}>
                  <Text style={styles.youSticker}>You: Sticker</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Line23 style={styles.line23}></Line23>
          <View style={styles.group6Copy7}>
            <View style={styles.group72Row}>
              <View style={styles.group72}>
                <MaskCopy11 style={styles.maskCopy11}></MaskCopy11>
              </View>
              <View style={styles.group42}>
                <View style={styles.elvaChenRow}>
                  <Text style={styles.elvaChen}>Elva Chen</Text>
                  <Text style={styles.aug1}>22 Aug</Text>
                </View>
                <View style={styles.group52}>
                  <Text style={styles.elvaSentAnAttachm}>
                    Elva sent an attachment
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Line24 style={styles.line24}></Line24>
        </View>
      </View>
      <View style={styles.group2}>
        <View style={styles.rectangle}>
          <UiBarsStatusBarsBlackBase
            style={styles.uiBarsStatusBarsBlackBase}
          ></UiBarsStatusBarsBlackBase>
          <View style={styles.data}>
            <Text style={styles.chats}>Chats</Text>
          </View>
        </View>
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
              <Conversations8 style={styles.conversations8}></Conversations8>
              <Image
                source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=4e93ee24af88eec6185be2aaa9a4a9669640eeba.png")}
                resizeMode="cover"
                style={styles.conversationFilledCopy}
              ></Image>
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
                  source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=681336da3137934498f4207ca8c736d551a583b3.png")}
                  resizeMode="cover"
                  style={styles.userFilled}
                ></Image>
              </ImageBackground>
            </View>
          </View>
          <Conversations9 style={styles.conversations9}></Conversations9>
          <Image
            source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=4e93ee24af88eec6185be2aaa9a4a9669640eeba.png")}
            resizeMode="cover"
            style={styles.conversationFilledCopy1}
          ></Image>
          <Image
            source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=cff48e4b76fbb56024353bf20c2798964efee344.png")}
            resizeMode="cover"
            style={styles.trophy11}
          ></Image>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  group11: {
    height: 551,
    width: 387,
    marginTop: 133,
    marginLeft: 15
  },
  group10: {
    height: 551,
    width: 387
  },
  group6Copy2: {
    height: 76,
    width: 382,
    flexDirection: "row",
    marginLeft: 1
  },
  group7: {
    height: 76,
    width: 75
  },
  maskCopy9: {
    height: 75,
    width: 75,
    backgroundColor: "transparent"
  },
  group4: {
    height: 56,
    width: 292,
    marginLeft: 15,
    marginTop: 10
  },
  yokoMatsumoto: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 146,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(18,18,19,1)",
    fontSize: 17
  },
  group5: {
    position: "absolute",
    top: 3,
    left: 0,
    height: 52,
    width: 292
  },
  pm: {
    height: 18,
    width: 51,
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(123,135,165,1)",
    fontSize: 12,
    marginLeft: 239
  },
  youSentASticker: {
    height: 18,
    width: 121,
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(123,135,165,1)",
    fontSize: 14
  },
  group15: {
    height: 6,
    width: 19,
    flexDirection: "row",
    marginLeft: 151,
    marginTop: 7
  },
  oval6: {
    height: 6,
    width: 6,
    backgroundColor: "transparent"
  },
  ovalCopy1: {
    height: 6,
    width: 6,
    backgroundColor: "transparent",
    marginLeft: 6
  },
  oval6Row: {
    height: 6,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  youSentAStickerRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 15,
    marginRight: 1
  },
  yokoMatsumotoStack: {
    width: 292,
    height: 55,
    marginTop: 1
  },
  group7Row: {
    height: 76,
    flexDirection: "row",
    flex: 1
  },
  line21: {
    height: 1,
    width: 378,
    backgroundColor: "transparent",
    marginTop: 20,
    marginLeft: 1
  },
  group9: {
    height: 76,
    width: 381,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 1
  },
  group6Copy4: {
    height: 76,
    width: 75
  },
  group73: {
    height: 76,
    width: 75
  },
  maskCopy12: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 75,
    width: 74,
    backgroundColor: "transparent"
  },
  maskCopy51: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  maskCopy12Stack: {
    width: 74,
    height: 75,
    marginTop: 1,
    marginLeft: 1
  },
  group43: {
    height: 56,
    width: 291,
    marginLeft: 15,
    marginTop: 16
  },
  samuelJoyce: {
    height: 24,
    width: 120,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(18,18,19,1)",
    fontSize: 17
  },
  pm1: {
    height: 18,
    width: 51,
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(18,18,19,1)",
    fontSize: 12,
    marginLeft: 119,
    marginTop: 3
  },
  samuelJoyceRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 1,
    marginRight: 1
  },
  group53: {
    height: 19,
    width: 155
  },
  samuelSentASticke: {
    height: 18,
    width: 154,
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(18,18,19,1)",
    fontSize: 14
  },
  oval7: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    marginLeft: 125,
    marginTop: 5
  },
  group53Row: {
    height: 19,
    flexDirection: "row",
    marginTop: 11,
    marginRight: 1
  },
  group6Copy4Row: {
    height: 76,
    flexDirection: "row",
    flex: 1
  },
  group6Copy6: {
    height: 76,
    width: 381,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 1
  },
  group71: {
    height: 76,
    width: 75
  },
  maskCopy10: {
    height: 75,
    width: 75,
    backgroundColor: "transparent"
  },
  group41: {
    height: 56,
    width: 291,
    marginLeft: 15,
    marginTop: 10
  },
  yunaKim: {
    height: 24,
    width: 99,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(18,18,19,1)",
    fontSize: 17
  },
  aug: {
    height: 18,
    width: 44,
    backgroundColor: "transparent",
    lineHeight: 18,
    textAlign: "right",
    color: "rgba(123,135,165,1)",
    fontSize: 12,
    marginLeft: 147,
    marginTop: 4
  },
  yunaKimRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 1,
    marginRight: 1
  },
  group51: {
    height: 19,
    width: 166,
    marginTop: 11
  },
  yunaSentAnAttachm: {
    height: 18,
    width: 166,
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(123,135,165,1)",
    fontSize: 14
  },
  group71Row: {
    height: 76,
    flexDirection: "row",
    flex: 1
  },
  line22: {
    height: 1,
    width: 378,
    backgroundColor: "transparent",
    marginTop: 18,
    marginLeft: 1
  },
  group9Copy2: {
    height: 67,
    width: 385,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 2
  },
  group6Copy41: {
    height: 67,
    width: 67
  },
  group74: {
    height: 67,
    width: 67
  },
  maskCopy13: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  photo20210317013205: {
    position: "absolute",
    height: 67,
    width: 67
  },
  maskCopy13Stack: {
    width: 75,
    height: 75,
    marginTop: -4,
    marginLeft: -4
  },
  group44: {
    height: 57,
    width: 299,
    marginLeft: 19,
    marginTop: 6
  },
  amandaBrown: {
    height: 24,
    width: 136,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(18,18,19,1)",
    fontSize: 17
  },
  aug2: {
    height: 18,
    width: 44,
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(123,135,165,1)",
    fontSize: 12,
    marginLeft: 118,
    marginTop: 2
  },
  amandaBrownRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 1,
    marginRight: 1
  },
  group54: {
    height: 19,
    width: 130,
    marginTop: 12
  },
  youSticker: {
    height: 18,
    width: 129,
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(123,135,165,1)",
    fontSize: 14
  },
  group6Copy41Row: {
    height: 67,
    flexDirection: "row",
    flex: 1
  },
  line23: {
    height: 1,
    width: 378,
    backgroundColor: "transparent",
    marginTop: 24,
    marginLeft: 1
  },
  group6Copy7: {
    height: 76,
    width: 381,
    flexDirection: "row",
    marginTop: 17
  },
  group72: {
    height: 76,
    width: 75
  },
  maskCopy11: {
    height: 75,
    width: 75,
    backgroundColor: "transparent"
  },
  group42: {
    height: 56,
    width: 291,
    marginLeft: 15,
    marginTop: 10
  },
  elvaChen: {
    height: 24,
    width: 99,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(18,18,19,1)",
    fontSize: 17
  },
  aug1: {
    height: 18,
    width: 44,
    backgroundColor: "transparent",
    lineHeight: 18,
    textAlign: "right",
    color: "rgba(123,135,165,1)",
    fontSize: 12,
    marginLeft: 147,
    marginTop: 3
  },
  elvaChenRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 1,
    marginRight: 1
  },
  group52: {
    height: 19,
    width: 166,
    marginTop: 11
  },
  elvaSentAnAttachm: {
    height: 18,
    width: 166,
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(123,135,165,1)",
    fontSize: 14
  },
  group72Row: {
    height: 76,
    flexDirection: "row",
    flex: 1
  },
  line24: {
    height: 1,
    width: 378,
    backgroundColor: "transparent",
    marginTop: 19,
    marginLeft: 3
  },
  group2: {
    height: 106,
    width: 414,
    marginTop: -684
  },
  rectangle: {
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
  data: {
    height: 33,
    width: 70,
    marginTop: 11,
    marginLeft: 22
  },
  chats: {
    height: 32,
    width: 70,
    color: "rgba(38,194,129,1)",
    lineHeight: 32,
    textAlign: "center",
    fontSize: 24,
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
    marginTop: 722
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
  conversations8: {
    backgroundColor: "transparent",
    marginLeft: 68,
    height: 0,
    width: 0,
    opacity: 0
  },
  conversationFilledCopy: {
    height: 34,
    width: 41,
    backgroundColor: "transparent",
    marginLeft: 11
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
    backgroundColor: "rgba(70,70,70,1)",
    height: 0,
    width: 0,
    opacity: 0
  },
  homeRow: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 32,
    marginLeft: 31,
    marginTop: 17
  },
  conversations9: {
    position: "absolute",
    top: 17,
    left: 135,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  conversationFilledCopy1: {
    position: "absolute",
    top: 17,
    left: 187,
    height: 35,
    width: 41,
    backgroundColor: "transparent"
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
    backgroundColor: "rgba(70,70,70,1)",
    height: 0,
    width: 0,
    opacity: 0
  },
  navigationBackgroundBarStack: {
    width: 414,
    height: 68
  }
});

export default ElderlyChatlist;
