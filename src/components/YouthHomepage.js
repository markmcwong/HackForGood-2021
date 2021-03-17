import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import CombinedShape from "./CombinedShape";
import Conversations from "./Conversations";
import Conversations1 from "./Conversations1";

function YouthHomepage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangleStack}>
        <ImageBackground
          style={styles.rectangle}
          imageStyle={styles.rectangle_imageStyle}
          source={require("../assets/images/Gradient_TJVJe5l.png")}
        >
          <View style={styles.welcomeStackRow}>
            <View style={styles.welcomeStack}>
              <Text style={styles.welcome}>Welcome!</Text>
              <Text style={styles.amandaSmith}>Amanda Smith</Text>
            </View>
            <View style={styles.images13}>
              <View style={styles.rectangle6}>
                <View style={styles.c472Fb1B2Da260359Fd97F7Ed22E21Stack}>
                  <Image
                    source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=e635ebdbf2c20eee1895630b64289c1ba9e8868f.png")}
                    resizeMode="cover"
                    style={styles.c472Fb1B2Da260359Fd97F7Ed22E21}
                  ></Image>
                  <Image
                    source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=4562dca548d3c66604745754f77d27ad3fb6422e.png")}
                    resizeMode="cover"
                    style={styles.images14}
                  ></Image>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.searchBarRow}>
            <View style={styles.searchBar}>
              <View style={styles.bg}>
                <View style={styles.iconsRawSearchRow}>
                  <View style={styles.iconsRawSearch}>
                    <CombinedShape
                      style={styles.combinedShape1}
                    ></CombinedShape>
                  </View>
                  <View style={styles.placeholderColor}>
                    <Text style={styles.placeholder}>Search</Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.group4}>
              <View style={styles.rectangle5}>
                <Text style={styles.style}></Text>
                <Image
                  source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=eff73ded09e9665f6e8c0d78ca5f0e0f3ee05ffc.png")}
                  resizeMode="cover"
                  style={styles.filter}
                ></Image>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.annabelStack}>
            <View style={styles.annabel}>
              <View style={styles.rectangle34}>
                <View style={styles.imagesRow}>
                  <View style={styles.images}>
                    <View style={styles.images1}>
                      <View style={styles.images2}>
                        <View style={styles.rectangle1}>
                          <View
                            style={styles.c472Fb1B2Da260359Fd97F7Ed22E2Stack}
                          >
                            <Image
                              source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=e893c942f1761fb6d8508f8a779e83afa2b58ce9.png")}
                              resizeMode="cover"
                              style={styles.c472Fb1B2Da260359Fd97F7Ed22E2}
                            ></Image>
                            <Image
                              source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=4562dca548d3c66604745754f77d27ad3fb6422e.png")}
                              resizeMode="cover"
                              style={styles.images3}
                            ></Image>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.group3}>
                    <View style={styles.group9}>
                      <Text style={styles.annabelMcdermott}>
                        Annabel Mcdermott
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.javierGordon}>
              <View style={styles.language}>
                <View style={styles.groupRow}>
                  <View style={styles.group}>
                    <View style={styles.rectangleCopy9Stack}>
                      <View style={styles.rectangleCopy9}>
                        <View style={styles.rectangleCopy8}></View>
                      </View>
                      <Text style={styles.english}>English</Text>
                    </View>
                  </View>
                  <View style={styles.group1}>
                    <View style={styles.rectangleCopy91Stack}>
                      <View style={styles.rectangleCopy91}>
                        <View style={styles.rectangleCopy81}></View>
                      </View>
                      <Text style={styles.spanish}>Spanish</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.rectangle341Stack}>
                <TouchableOpacity style={styles.rectangle341}>
                  <View style={styles.images4}>
                    <View style={styles.images5}>
                      <View style={styles.images6}>
                        <View style={styles.rectangle2}>
                          <View
                            style={
                              styles.portraitPhotographySmilingSeniorCitizensIlyaNodia4Stack
                            }
                          >
                            <Image
                              source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=3855ed088f240e291d1965658d6ea2801d15c1f6.png")}
                              resizeMode="cover"
                              style={
                                styles.portraitPhotographySmilingSeniorCitizensIlyaNodia4
                              }
                            ></Image>
                            <Image
                              source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=ba9ba9b89ac491cb6ba86b9ac5131af05e8fb4f4.png")}
                              resizeMode="cover"
                              style={
                                styles.asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome
                              }
                            ></Image>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.group31}>
                  <View style={styles.group91Stack}>
                    <View style={styles.group91}>
                      <View style={styles.greentagCopyStack}>
                        <Image
                          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=0157abb7b3f5d9519cbaa583f30bd9b8d7747eea.png")}
                          resizeMode="cover"
                          style={styles.greentagCopy}
                        ></Image>
                        <Image
                          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=87ea519c38dd7bb10ea9caa01ec31265b6529dbf.png")}
                          resizeMode="cover"
                          style={styles.greentagCopy1}
                        ></Image>
                      </View>
                    </View>
                    <Text style={styles.javierGordon1}>Morikawa</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.language3}>
              <View style={styles.group11Row}>
                <View style={styles.group11}>
                  <View style={styles.rectangleCopy910Stack}>
                    <View style={styles.rectangleCopy910}>
                      <View style={styles.rectangleCopy810}></View>
                    </View>
                    <Text style={styles.japanese}>Japanese</Text>
                  </View>
                </View>
                <View style={styles.group12}>
                  <View style={styles.rectangleCopy911Stack}>
                    <View style={styles.rectangleCopy911}>
                      <View style={styles.rectangleCopy811}></View>
                    </View>
                    <Text style={styles.mandarin1}>Mandarin</Text>
                  </View>
                </View>
                <View style={styles.group10}>
                  <View style={styles.rectangleCopy99Stack}>
                    <View style={styles.rectangleCopy99}>
                      <View style={styles.rectangleCopy89}></View>
                    </View>
                    <Text style={styles.english2}>English</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.faiChanStack}>
            <View style={styles.faiChan}>
              <View style={styles.rectangle342}>
                <View style={styles.group32Stack}>
                  <View style={styles.group32}>
                    <View style={styles.group92Stack}>
                      <View style={styles.group92}>
                        <View style={styles.greentagCopy2Stack}>
                          <Image
                            source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=0157abb7b3f5d9519cbaa583f30bd9b8d7747eea.png")}
                            resizeMode="cover"
                            style={styles.greentagCopy2}
                          ></Image>
                          <Image
                            source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=87ea519c38dd7bb10ea9caa01ec31265b6529dbf.png")}
                            resizeMode="cover"
                            style={styles.greentagCopy3}
                          ></Image>
                        </View>
                      </View>
                      <Text style={styles.faiChan1}>Fai Chan</Text>
                    </View>
                  </View>
                  <View style={styles.images7}>
                    <View style={styles.images8}>
                      <View style={styles.images9}>
                        <View style={styles.rectangle3}>
                          <Image
                            source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=9e590173a7ef99263b7d21dfe8983006fad7282b.png")}
                            resizeMode="cover"
                            style={styles.ptSeniors48}
                          ></Image>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.language2}>
              <View style={styles.group9}>
                <View style={styles.rectangleCopy98Stack}>
                  <View style={styles.rectangleCopy98}>
                    <View style={styles.rectangleCopy88}></View>
                  </View>
                  <Text style={styles.mandarin}>Mandarin</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.arjun}>
            <View style={styles.rectangle343}>
              <View style={styles.group33Stack}>
                <View style={styles.group33}>
                  <View style={styles.group93Stack}>
                    <View style={styles.group93}>
                      <View style={styles.greentagCopy4Stack}>
                        <Image
                          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=0157abb7b3f5d9519cbaa583f30bd9b8d7747eea.png")}
                          resizeMode="cover"
                          style={styles.greentagCopy4}
                        ></Image>
                        <Image
                          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=87ea519c38dd7bb10ea9caa01ec31265b6529dbf.png")}
                          resizeMode="cover"
                          style={styles.greentagCopy5}
                        ></Image>
                      </View>
                    </View>
                    <Text style={styles.arjunKapadia}>Arjun Kapadia</Text>
                    <View style={styles.group2}>
                      <View style={styles.rectangleCopy92Stack}>
                        <View style={styles.rectangleCopy92}>
                          <View style={styles.rectangleCopy82}></View>
                        </View>
                        <Text style={styles.hindi}>Hindi</Text>
                      </View>
                    </View>
                    <View style={styles.group3}>
                      <View style={styles.rectangleCopy93Stack}>
                        <View style={styles.rectangleCopy93}>
                          <View style={styles.rectangleCopy83}></View>
                        </View>
                        <Text style={styles.english1}>English</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.images10}>
                  <View style={styles.images11}>
                    <View style={styles.images12}>
                      <View style={styles.rectangle4}>
                        <Image
                          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=3dcd9c6adc80157486be9eb60213d48de089eb17.png")}
                          resizeMode="cover"
                          style={styles.download}
                        ></Image>
                      </View>
                    </View>
                  </View>
                </View>
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
                  <Conversations style={styles.conversations1}></Conversations>
                  <ImageBackground
                    source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=cff48e4b76fbb56024353bf20c2798964efee344.png")}
                    resizeMode="cover"
                    style={styles.trophy1}
                    imageStyle={styles.trophy1_imageStyle}
                  >
                    <Image
                      source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bd256a8481b7bc92a225a50bf853a298bf6f91ba.png")}
                      resizeMode="cover"
                      style={styles.trophy3}
                    ></Image>
                  </ImageBackground>
                  <Image
                    source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bfc006f499be00c51d87d55b239c17b8abcc5c20.png")}
                    resizeMode="cover"
                    style={styles.user}
                  ></Image>
                </View>
              </View>
              <Conversations1 style={styles.conversations1}></Conversations1>
              <ImageBackground
                source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=cff48e4b76fbb56024353bf20c2798964efee344.png")}
                resizeMode="cover"
                style={styles.trophy11}
                imageStyle={styles.trophy11_imageStyle}
              >
                <Image
                  source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bd256a8481b7bc92a225a50bf853a298bf6f91ba.png")}
                  resizeMode="cover"
                  style={styles.trophy31}
                ></Image>
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
              <Image
                source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bfc006f499be00c51d87d55b239c17b8abcc5c20.png")}
                resizeMode="cover"
                style={styles.user1}
              ></Image>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.language1}>
          <View style={styles.group7Row}>
            <View style={styles.group7}>
              <View style={styles.rectangleCopy96Stack}>
                <View style={styles.rectangleCopy96}>
                  <View style={styles.rectangleCopy86}></View>
                </View>
                <Text style={styles.cantonese}>Cantonese</Text>
              </View>
            </View>
            <View style={styles.group8}>
              <View style={styles.rectangleCopy97Stack}>
                <View style={styles.rectangleCopy97}>
                  <View style={styles.rectangleCopy87}></View>
                </View>
                <Text style={styles.arabic}>Arabic</Text>
              </View>
            </View>
            <View style={styles.group5}>
              <View style={styles.rectangleCopy94Stack}>
                <View style={styles.rectangleCopy94}>
                  <View style={styles.rectangleCopy84}></View>
                </View>
                <Text style={styles.spanish1}>Spanish</Text>
              </View>
            </View>
            <View style={styles.group6}>
              <View style={styles.rectangleCopy95Stack}>
                <View style={styles.rectangleCopy95}>
                  <View style={styles.rectangleCopy85}></View>
                </View>
                <Text style={styles.french}>French</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
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
  welcome: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 70,
    width: 272,
    backgroundColor: "transparent",
    lineHeight: 35,
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  amandaSmith: {
    position: "absolute",
    top: 28,
    left: 0,
    height: 42,
    width: 272,
    backgroundColor: "transparent",
    lineHeight: 35,
    color: "rgba(255,255,255,1)",
    fontSize: 28
  },
  welcomeStack: {
    width: 272,
    height: 70
  },
  images13: {
    height: 59,
    width: 57,
    marginLeft: 36,
    marginTop: 11
  },
  rectangle6: {
    height: 59,
    width: 57,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 38,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)"
  },
  c472Fb1B2Da260359Fd97F7Ed22E21: {
    position: "absolute",
    top: 0,
    left: 15,
    height: 89,
    width: 119,
    backgroundColor: "transparent"
  },
  images14: {
    position: "absolute",
    top: 1,
    left: 0,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  c472Fb1B2Da260359Fd97F7Ed22E21Stack: {
    width: 134,
    height: 89,
    marginLeft: -35
  },
  welcomeStackRow: {
    height: 70,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 25,
    marginRight: 24
  },
  searchBar: {
    height: 59,
    width: 288,
    shadowColor: "rgba(0,0,0,0.2886126324847028)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1
  },
  bg: {
    borderRadius: 29.5,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    flex: 1
  },
  iconsRawSearch: {
    height: 19,
    width: 18,
    marginTop: 2
  },
  combinedShape1: {
    height: 18,
    width: 17,
    backgroundColor: "transparent"
  },
  placeholderColor: {
    height: 23,
    width: 89,
    marginLeft: 14
  },
  placeholder: {
    height: 22,
    width: 89,
    backgroundColor: "transparent",
    color: "rgba(154,166,200,1)",
    fontSize: 16,
    marginTop: 1
  },
  iconsRawSearchRow: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    marginRight: 145,
    marginLeft: 22,
    marginTop: 18
  },
  group4: {
    height: 59,
    width: 59,
    marginLeft: 20
  },
  rectangle5: {
    height: 59,
    width: 59,
    borderRadius: 28.5,
    shadowColor: "rgba(0,0,0,0.2886126324847028)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  style: {
    backgroundColor: "transparent",
    color: "rgba(245,166,35,1)",
    fontSize: 36,
    marginTop: 10,
    marginLeft: 12,
    height: 0,
    width: 0,
    opacity: 0
  },
  filter: {
    height: 29,
    width: 29,
    backgroundColor: "rgba(255,153,103,1)",
    marginTop: 6,
    marginLeft: 15
  },
  searchBarRow: {
    height: 59,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 25,
    marginRight: 22
  },
  annabel: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 124,
    width: 367
  },
  rectangle34: {
    height: 124,
    width: 367,
    borderRadius: 22,
    shadowColor: "rgba(0,0,0,0.2383956375655595)",
    shadowOffset: {
      height: 13,
      width: 0
    },
    shadowRadius: 25,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  images: {
    height: 79,
    width: 76
  },
  images1: {
    height: 79,
    width: 76
  },
  images2: {
    height: 79,
    width: 76
  },
  rectangle1: {
    height: 79,
    width: 76,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 23,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)"
  },
  c472Fb1B2Da260359Fd97F7Ed22E2: {
    position: "absolute",
    top: 0,
    left: 46,
    height: 107,
    width: 75,
    backgroundColor: "transparent"
  },
  images3: {
    position: "absolute",
    top: 9,
    left: 0,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  c472Fb1B2Da260359Fd97F7Ed22E2Stack: {
    width: 135,
    height: 107,
    marginTop: -8,
    marginLeft: -47
  },
  group3: {
    position: "absolute",
    top: 32,
    left: 127,
    height: 36,
    width: 89
  },
  group9: {
    height: 36,
    width: 107
  },
  annabelMcdermott: {
    height: 27,
    width: 244,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20,
    marginTop: 1,
    marginLeft: 1
  },
  imagesRow: {
    height: 79,
    flexDirection: "row",
    flex: 1,
    marginLeft: 20,
    marginTop: 21
  },
  javierGordon: {
    position: "absolute",
    top: 62,
    left: 0,
    height: 203,
    width: 368
  },
  language: {
    height: 36,
    width: 193,
    flexDirection: "row",
    marginLeft: 122
  },
  group: {
    height: 36,
    width: 96
  },
  rectangleCopy9: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 96
  },
  rectangleCopy8: {
    height: 36,
    width: 96,
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
  english: {
    position: "absolute",
    top: 11,
    left: 13,
    height: 17,
    width: 71,
    color: "rgba(0,0,0,0.7761529242242133)",
    textAlign: "center",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy9Stack: {
    width: 96,
    height: 36
  },
  group1: {
    height: 36,
    width: 90,
    marginLeft: 7
  },
  rectangleCopy91: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 90
  },
  rectangleCopy81: {
    height: 36,
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
  spanish: {
    position: "absolute",
    top: 11,
    left: 20,
    height: 17,
    width: 51,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(23,49,71,1)",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy91Stack: {
    width: 90,
    height: 36
  },
  groupRow: {
    height: 36,
    flexDirection: "row",
    flex: 1
  },
  rectangle341: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 124,
    width: 367,
    borderRadius: 22,
    shadowColor: "rgba(0,0,0,0.12)",
    shadowOffset: {
      height: 13,
      width: 0
    },
    shadowRadius: 25,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  images4: {
    height: 79,
    width: 79,
    marginTop: 23,
    marginLeft: 18
  },
  images5: {
    height: 79,
    width: 79
  },
  images6: {
    height: 79,
    width: 79
  },
  rectangle2: {
    height: 79,
    width: 79,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 23,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)"
  },
  portraitPhotographySmilingSeniorCitizensIlyaNodia4: {
    position: "absolute",
    top: 36,
    left: 76,
    height: 111,
    width: 87,
    backgroundColor: "transparent"
  },
  asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 182,
    width: 273,
    backgroundColor: "transparent"
  },
  portraitPhotographySmilingSeniorCitizensIlyaNodia4Stack: {
    width: 273,
    height: 182,
    marginTop: -45,
    marginLeft: -81
  },
  group31: {
    position: "absolute",
    top: 28,
    left: 90,
    height: 67,
    width: 278
  },
  group91: {
    position: "absolute",
    top: 4,
    left: 0,
    height: 63,
    width: 278
  },
  greentagCopy: {
    position: "absolute",
    top: 24,
    left: 73,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  greentagCopy1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  greentagCopyStack: {
    width: 278,
    height: 61,
    marginTop: 1
  },
  javierGordon1: {
    position: "absolute",
    top: 0,
    left: 34,
    height: 27,
    width: 140,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20
  },
  group91Stack: {
    width: 278,
    height: 67
  },
  rectangle341Stack: {
    width: 368,
    height: 124,
    marginTop: 43
  },
  language3: {
    position: "absolute",
    top: 197,
    left: 125,
    height: 28,
    width: 236,
    flexDirection: "row"
  },
  group11: {
    height: 28,
    width: 74
  },
  rectangleCopy910: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 28,
    width: 74
  },
  rectangleCopy810: {
    height: 28,
    width: 74,
    opacity: 0.6782691592261905,
    borderWidth: 2,
    borderColor: "rgba(255,184,66,1)",
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
    top: 5,
    left: 5,
    height: 17,
    width: 65,
    color: "rgba(0,0,0,0.7761529242242133)",
    textAlign: "center",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy910Stack: {
    width: 74,
    height: 28
  },
  group12: {
    height: 28,
    width: 74,
    marginLeft: 7
  },
  rectangleCopy911: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 28,
    width: 74
  },
  rectangleCopy811: {
    height: 28,
    width: 74,
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
  mandarin1: {
    position: "absolute",
    top: 6,
    left: 8,
    height: 17,
    width: 59,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(23,49,71,1)",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy911Stack: {
    width: 74,
    height: 28
  },
  group10: {
    height: 28,
    width: 74,
    marginLeft: 7
  },
  rectangleCopy99: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 28,
    width: 74
  },
  rectangleCopy89: {
    height: 28,
    width: 74,
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
  english2: {
    position: "absolute",
    top: 7,
    left: 12,
    height: 17,
    width: 51,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(23,49,71,1)",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy99Stack: {
    width: 74,
    height: 28
  },
  group11Row: {
    height: 28,
    flexDirection: "row",
    flex: 1
  },
  annabelStack: {
    width: 368,
    height: 265,
    marginTop: 68,
    marginLeft: 25
  },
  faiChan: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 124,
    width: 367
  },
  rectangle342: {
    height: 124,
    width: 367,
    borderRadius: 22,
    shadowColor: "rgba(0,0,0,0.12)",
    shadowOffset: {
      height: 13,
      width: 0
    },
    shadowRadius: 25,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  group32: {
    position: "absolute",
    top: 8,
    left: 69,
    height: 62,
    width: 278
  },
  group92: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 62,
    width: 278
  },
  greentagCopy2: {
    position: "absolute",
    top: 24,
    left: 73,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  greentagCopy3: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  greentagCopy2Stack: {
    width: 278,
    height: 61,
    marginTop: 1
  },
  faiChan1: {
    position: "absolute",
    top: 0,
    left: 34,
    height: 27,
    width: 244,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20
  },
  group92Stack: {
    width: 278,
    height: 62
  },
  images7: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 79,
    width: 79
  },
  images8: {
    height: 79,
    width: 79
  },
  images9: {
    height: 79,
    width: 79
  },
  rectangle3: {
    height: 79,
    width: 79,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 23,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)"
  },
  ptSeniors48: {
    height: 77,
    width: 139,
    backgroundColor: "transparent",
    marginLeft: -13
  },
  group32Stack: {
    width: 347,
    height: 79,
    marginTop: 23,
    marginLeft: 20
  },
  language2: {
    position: "absolute",
    top: 63,
    left: 125,
    height: 36,
    width: 107
  },
  rectangleCopy98: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 107
  },
  rectangleCopy88: {
    height: 36,
    width: 107,
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
  mandarin: {
    position: "absolute",
    top: 11,
    left: 19,
    height: 17,
    width: 71,
    color: "rgba(0,0,0,0.7761529242242133)",
    textAlign: "center",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy98Stack: {
    width: 107,
    height: 36
  },
  faiChanStack: {
    width: 367,
    height: 124,
    marginTop: 19,
    marginLeft: 25
  },
  arjun: {
    height: 124,
    width: 367,
    marginTop: 18,
    marginLeft: 25
  },
  rectangle343: {
    height: 124,
    width: 367,
    borderRadius: 22,
    shadowColor: "rgba(0,0,0,0.12)",
    shadowOffset: {
      height: 13,
      width: 0
    },
    shadowRadius: 25,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  group33: {
    position: "absolute",
    top: 10,
    left: 67,
    height: 68,
    width: 278
  },
  group93: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 62,
    width: 278
  },
  greentagCopy4: {
    position: "absolute",
    top: 24,
    left: 73,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  greentagCopy5: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  greentagCopy4Stack: {
    width: 278,
    height: 61,
    marginTop: 1
  },
  arjunKapadia: {
    position: "absolute",
    top: 0,
    left: 34,
    height: 27,
    width: 244,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20
  },
  group2: {
    position: "absolute",
    top: 32,
    left: 33,
    height: 36,
    width: 86
  },
  rectangleCopy92: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 86
  },
  rectangleCopy82: {
    height: 36,
    width: 86,
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
  hindi: {
    position: "absolute",
    top: 11,
    left: 8,
    height: 17,
    width: 71,
    color: "rgba(0,0,0,0.7761529242242133)",
    textAlign: "center",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy92Stack: {
    width: 86,
    height: 36
  },
  rectangleCopy93: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 89
  },
  rectangleCopy83: {
    height: 36,
    width: 89,
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
  english1: {
    position: "absolute",
    top: 11,
    left: 19,
    height: 17,
    width: 51,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(23,49,71,1)",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy93Stack: {
    width: 89,
    height: 36
  },
  group93Stack: {
    width: 278,
    height: 68
  },
  images10: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 79,
    width: 79
  },
  images11: {
    height: 79,
    width: 79
  },
  images12: {
    height: 79,
    width: 79
  },
  rectangle4: {
    height: 79,
    width: 79,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 23,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)"
  },
  download: {
    height: 117,
    width: 210,
    backgroundColor: "transparent",
    marginLeft: -66
  },
  group33Stack: {
    width: 345,
    height: 79,
    marginTop: 21,
    marginLeft: 22
  },
  navigationToolbarAction1: {
    height: 68,
    width: 414,
    shadowColor: "rgba(0,0,0,0.473284527972028)",
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowRadius: 15,
    shadowOpacity: 1,
    marginTop: 41
  },
  navigationBackgroundBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 68,
    width: 414,
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
    height: 35,
    width: 35,
    backgroundColor: "rgba(70,70,70,1)"
  },
  conversations1: {
    position: "absolute",
    top: 17,
    left: 135,
    height: 35,
    width: 41,
    backgroundColor: "transparent"
  },
  trophy1: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)",
    marginLeft: 69
  },
  trophy1_imageStyle: {},
  trophy3: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
  },
  user: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)",
    marginLeft: 69
  },
  homeRow: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: 30,
    marginLeft: 31,
    marginTop: 17
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
  trophy31: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
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
    height: 35,
    width: 35,
    backgroundColor: "rgba(70,70,70,1)"
  },
  user1: {
    position: "absolute",
    top: 17,
    left: 349,
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
  },
  navigationBackgroundBarStack: {
    width: 414,
    height: 68
  },
  language1: {
    position: "absolute",
    top: 184,
    left: 27,
    height: 33,
    width: 407,
    flexDirection: "row"
  },
  group7: {
    height: 33,
    width: 109
  },
  rectangleCopy96: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 33,
    width: 109
  },
  rectangleCopy86: {
    height: 33,
    width: 109,
    borderWidth: 2,
    borderColor: "rgba(212,115,50,1)",
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
  cantonese: {
    position: "absolute",
    top: 9,
    left: 4,
    height: 17,
    width: 101,
    color: "rgba(245,117,35,1)",
    textAlign: "center",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy96Stack: {
    width: 109,
    height: 33
  },
  group8: {
    height: 30,
    width: 90,
    marginLeft: 12,
    marginTop: 2
  },
  rectangleCopy97: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 30,
    width: 90
  },
  rectangleCopy87: {
    height: 30,
    width: 90,
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
  arabic: {
    position: "absolute",
    top: 7,
    left: 20,
    height: 17,
    width: 51,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(23,49,71,1)",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy97Stack: {
    width: 90,
    height: 30
  },
  group5: {
    height: 30,
    width: 86,
    marginLeft: 12,
    marginTop: 2
  },
  rectangleCopy94: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 30,
    width: 86
  },
  rectangleCopy84: {
    height: 30,
    width: 86,
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
  spanish1: {
    position: "absolute",
    top: 7,
    left: 17,
    height: 17,
    width: 51,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(23,49,71,1)",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy94Stack: {
    width: 86,
    height: 30
  },
  group6: {
    height: 30,
    width: 86,
    marginLeft: 12,
    marginTop: 2
  },
  rectangleCopy95: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 30,
    width: 86
  },
  rectangleCopy85: {
    height: 30,
    width: 86,
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
  french: {
    position: "absolute",
    top: 7,
    left: 17,
    height: 17,
    width: 51,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(23,49,71,1)",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy95Stack: {
    width: 86,
    height: 30
  },
  group7Row: {
    height: 33,
    flexDirection: "row",
    flex: 1
  },
  rectangleStack: {
    width: 434,
    height: 896
  }
});

export default YouthHomepage;
