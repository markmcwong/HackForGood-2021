import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import CombinedShape1 from "./CombinedShape1";
import Conversations2 from "./Conversations2";
import Conversations3 from "./Conversations3";

function ElderlyHomepage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle7Stack}>
        <ImageBackground
          style={styles.rectangle7}
          imageStyle={styles.rectangle7_imageStyle}
          source={require("../assets/images/Gradient_p0tRLM9.png")}
        >
          <View style={styles.welcome1StackRow}>
            <View style={styles.welcome1Stack}>
              <Text style={styles.welcome1}>Welcome!</Text>
              <Text style={styles.morikawa}>Morikawa</Text>
            </View>
            <View style={styles.images28}>
              <View style={styles.rectangle13}>
                <View style={styles.images29Stack}>
                  <Image
                    source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=4562dca548d3c66604745754f77d27ad3fb6422e.png")}
                    resizeMode="cover"
                    style={styles.images29}
                  ></Image>
                  <Image
                    source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=ba9ba9b89ac491cb6ba86b9ac5131af05e8fb4f4.png")}
                    resizeMode="cover"
                    style={
                      styles.asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome2
                    }
                  ></Image>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.searchBar1Row}>
            <View style={styles.searchBar1}>
              <View style={styles.bg1}>
                <View style={styles.iconsRawSearch1Row}>
                  <View style={styles.iconsRawSearch1}>
                    <CombinedShape1
                      style={styles.combinedShape1}
                    ></CombinedShape1>
                  </View>
                  <View style={styles.placeholderColor1}>
                    <Text style={styles.placeholder1}>Search</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.group18}>
              <View style={styles.rectangle12}>
                <Text style={styles.style1}></Text>
                <Image
                  source={require("../assets/images/eff73ded09e9665f6e8c0d78ca5f0e0f3ee05ffc.png")}
                  resizeMode="cover"
                  style={styles.filter1}
                ></Image>
              </View>
            </View>
          </View>
          <View style={styles.annabel1Stack}>
            <TouchableOpacity style={styles.annabel1}>
              <View style={styles.rectangle344Stack}>
                <View style={styles.rectangle344}>
                  <View style={styles.images15}>
                    <View style={styles.images16}>
                      <View style={styles.images17}>
                        <View style={styles.rectangle8}>
                          <View
                            style={styles.c472Fb1B2Da260359Fd97F7Ed22E22Stack}
                          >
                            <Image
                              source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=e893c942f1761fb6d8508f8a779e83afa2b58ce9.png")}
                              resizeMode="cover"
                              style={styles.c472Fb1B2Da260359Fd97F7Ed22E22}
                            ></Image>
                            <Image
                              source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=e635ebdbf2c20eee1895630b64289c1ba9e8868f.png")}
                              resizeMode="cover"
                              style={
                                styles.asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome1
                              }
                            ></Image>
                            <Image
                              source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=4562dca548d3c66604745754f77d27ad3fb6422e.png")}
                              resizeMode="cover"
                              style={styles.images18}
                            ></Image>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.group34}>
                  <View style={styles.group94}>
                    <Text style={styles.amandaSmith1}>Amanda Smith</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.language4}>
              <View style={styles.group14Row}>
                <View style={styles.group14}>
                  <View style={styles.rectangleCopy913Stack}>
                    <View style={styles.rectangleCopy913}>
                      <View style={styles.rectangleCopy813}></View>
                    </View>
                    <Text style={styles.french1}>French</Text>
                  </View>
                </View>
                <View style={styles.group15}>
                  <View style={styles.rectangleCopy914Stack}>
                    <View style={styles.rectangleCopy914}>
                      <View style={styles.rectangleCopy814}></View>
                    </View>
                    <Text style={styles.japanese1}>Japanese</Text>
                  </View>
                </View>
                <View style={styles.group13}>
                  <View style={styles.rectangleCopy912Stack}>
                    <View style={styles.rectangleCopy912}>
                      <View style={styles.rectangleCopy812}></View>
                    </View>
                    <Text style={styles.english3}>English</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.faiChan2Stack}>
            <View style={styles.faiChan2}>
              <View style={styles.rectangle346}>
                <View style={styles.group36Stack}>
                  <View style={styles.group36}>
                    <View style={styles.group96Stack}>
                      <View style={styles.group96}>
                        <View style={styles.greentagCopy8Stack}>
                          <Image
                            source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=0157abb7b3f5d9519cbaa583f30bd9b8d7747eea.png")}
                            resizeMode="cover"
                            style={styles.greentagCopy8}
                          ></Image>
                          <Image
                            source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=87ea519c38dd7bb10ea9caa01ec31265b6529dbf.png")}
                            resizeMode="cover"
                            style={styles.greentagCopy9}
                          ></Image>
                        </View>
                      </View>
                      <Text style={styles.karenWong}>Karen Wong</Text>
                    </View>
                  </View>
                  <View style={styles.images22}>
                    <View style={styles.images23}>
                      <View style={styles.images24}>
                        <View style={styles.rectangle10}>
                          <View style={styles.ptSeniors481Stack}>
                            <Image
                              source={require("../assets/images/9e590173a7ef99263b7d21dfe8983006fad7282b.png")}
                              resizeMode="cover"
                              style={styles.ptSeniors481}
                            ></Image>
                            <Image
                              source={require("../assets/images/6e4de9d902f4166cd3834e484a59ae3fa83fbe21.png")}
                              resizeMode="cover"
                              style={styles.uoBtKxQ8400X400}
                            ></Image>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.language6}>
              <View style={styles.group23}>
                <View style={styles.rectangleCopy921Stack}>
                  <View style={styles.rectangleCopy921}>
                    <View style={styles.rectangleCopy821}></View>
                  </View>
                  <Text style={styles.arabic2}>Arabic</Text>
                </View>
              </View>
              <View style={styles.group24}>
                <View style={styles.rectangleCopy922Stack}>
                  <View style={styles.rectangleCopy922}>
                    <View style={styles.rectangleCopy822}></View>
                  </View>
                  <Text style={styles.cantonese2}>Cantonese</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.arjun1}>
            <View style={styles.rectangle347}>
              <View style={styles.group37Stack}>
                <View style={styles.group37}>
                  <View style={styles.group97Stack}>
                    <View style={styles.group97}>
                      <View style={styles.greentagCopy10Stack}>
                        <Image
                          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=0157abb7b3f5d9519cbaa583f30bd9b8d7747eea.png")}
                          resizeMode="cover"
                          style={styles.greentagCopy10}
                        ></Image>
                        <Image
                          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=87ea519c38dd7bb10ea9caa01ec31265b6529dbf.png")}
                          resizeMode="cover"
                          style={styles.greentagCopy11}
                        ></Image>
                      </View>
                    </View>
                    <Text style={styles.anoshaNair}>Anosha Nair</Text>
                    <View style={styles.group16}>
                      <View style={styles.rectangleCopy915Stack}>
                        <View style={styles.rectangleCopy915}>
                          <View style={styles.rectangleCopy815}></View>
                        </View>
                        <Text style={styles.hindi1}>Hindi</Text>
                      </View>
                    </View>
                    <View style={styles.group17}>
                      <View style={styles.rectangleCopy916Stack}>
                        <View style={styles.rectangleCopy916}>
                          <View style={styles.rectangleCopy816}></View>
                        </View>
                        <Text style={styles.english4}>English</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.images25}>
                  <View style={styles.images26}>
                    <View style={styles.images27}>
                      <View style={styles.rectangle11}>
                        <View style={styles.download1Stack}>
                          <Image
                            source={require("../assets/images/3dcd9c6adc80157486be9eb60213d48de089eb17.png")}
                            resizeMode="cover"
                            style={styles.download1}
                          ></Image>
                          <Image
                            source={require("../assets/images/9d18325c48047f2cfc0d2d7267b7bccd40cf95e0.png")}
                            resizeMode="cover"
                            style={styles.shutterstock145552537E14575241827191}
                          ></Image>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.navigationToolbarAction11}>
            <View style={styles.navigationBackgroundBar1Stack}>
              <View style={styles.navigationBackgroundBar1}>
                <View style={styles.home2Row}>
                  <ImageBackground
                    source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=1c1af56ede9d48bb4190e2d50883ea57bbca3adc.png")}
                    resizeMode="cover"
                    style={styles.home2}
                    imageStyle={styles.home2_imageStyle}
                  >
                    <Image
                      source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=dc56370fa412f92fb2197c10de157c58e0ba117f.png")}
                      resizeMode="cover"
                      style={styles.homeFilled2}
                    ></Image>
                  </ImageBackground>
                  <Conversations2
                    style={styles.conversations2}
                  ></Conversations2>
                  <Image
                    source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=cff48e4b76fbb56024353bf20c2798964efee344.png")}
                    resizeMode="cover"
                    style={styles.trophy12}
                  ></Image>
                  <Image
                    source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bfc006f499be00c51d87d55b239c17b8abcc5c20.png")}
                    resizeMode="cover"
                    style={styles.user2}
                  ></Image>
                </View>
              </View>
              <Conversations3 style={styles.conversations3}></Conversations3>
              <Image
                source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=cff48e4b76fbb56024353bf20c2798964efee344.png")}
                resizeMode="cover"
                style={styles.trophy13}
              ></Image>
              <ImageBackground
                source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=1c1af56ede9d48bb4190e2d50883ea57bbca3adc.png")}
                resizeMode="cover"
                style={styles.home3}
                imageStyle={styles.home3_imageStyle}
              >
                <Image
                  source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=dc56370fa412f92fb2197c10de157c58e0ba117f.png")}
                  resizeMode="cover"
                  style={styles.homeFilled3}
                ></Image>
              </ImageBackground>
              <Image
                source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=bfc006f499be00c51d87d55b239c17b8abcc5c20.png")}
                resizeMode="cover"
                style={styles.user3}
              ></Image>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.javierGordon2}>
          <View style={styles.rectangle345Stack}>
            <View style={styles.rectangle345}>
              <View style={styles.images19}>
                <View style={styles.images20}>
                  <View style={styles.images21}>
                    <View style={styles.rectangle9}>
                      <View
                        style={
                          styles.portraitPhotographySmilingSeniorCitizensIlyaNodia41Stack
                        }
                      >
                        <Image
                          source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=3855ed088f240e291d1965658d6ea2801d15c1f6.png")}
                          resizeMode="cover"
                          style={
                            styles.portraitPhotographySmilingSeniorCitizensIlyaNodia41
                          }
                        ></Image>
                        <Image
                          source={require("../assets/images/bc5e3201663bd490f3ce8159d3d854e6a414f6cc.png")}
                          resizeMode="cover"
                          style={
                            styles.afcccE6Ac11Ea8600Abe4F45458C9ImageHires174750
                          }
                        ></Image>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.group35}>
              <View style={styles.group95Stack}>
                <View style={styles.group95}>
                  <View style={styles.greentagCopy6Stack}>
                    <Image
                      source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=0157abb7b3f5d9519cbaa583f30bd9b8d7747eea.png")}
                      resizeMode="cover"
                      style={styles.greentagCopy6}
                    ></Image>
                    <Image
                      source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=87ea519c38dd7bb10ea9caa01ec31265b6529dbf.png")}
                      resizeMode="cover"
                      style={styles.greentagCopy7}
                    ></Image>
                  </View>
                </View>
                <Text style={styles.javierGordon3}>Mark Mohammed</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.language5}>
          <View style={styles.group21Row}>
            <View style={styles.group21}>
              <View style={styles.rectangleCopy919Stack}>
                <View style={styles.rectangleCopy919}>
                  <View style={styles.rectangleCopy819}></View>
                </View>
                <Text style={styles.cantonese1}>Cantonese</Text>
              </View>
            </View>
            <View style={styles.group22}>
              <View style={styles.rectangleCopy920Stack}>
                <View style={styles.rectangleCopy920}>
                  <View style={styles.rectangleCopy820}></View>
                </View>
                <Text style={styles.arabic1}>Arabic</Text>
              </View>
            </View>
            <View style={styles.group19}>
              <View style={styles.rectangleCopy917Stack}>
                <View style={styles.rectangleCopy917}>
                  <View style={styles.rectangleCopy817}></View>
                </View>
                <Text style={styles.spanish2}>Spanish</Text>
              </View>
            </View>
            <View style={styles.group20}>
              <View style={styles.rectangleCopy918Stack}>
                <View style={styles.rectangleCopy918}>
                  <View style={styles.rectangleCopy818}></View>
                </View>
                <Text style={styles.french2}>French</Text>
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
  rectangle7: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 896,
    width: 414,
    backgroundColor: "transparent"
  },
  rectangle7_imageStyle: {},
  welcome1: {
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
  morikawa: {
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
  welcome1Stack: {
    width: 272,
    height: 70
  },
  images28: {
    height: 59,
    width: 57,
    marginLeft: 34,
    marginTop: 8
  },
  rectangle13: {
    height: 59,
    width: 57,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 38,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)"
  },
  images29: {
    position: "absolute",
    top: 17,
    left: 8,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 107,
    width: 161,
    backgroundColor: "transparent"
  },
  images29Stack: {
    width: 161,
    height: 107,
    marginTop: -16,
    marginLeft: -43
  },
  welcome1StackRow: {
    height: 70,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 27,
    marginRight: 24
  },
  searchBar1: {
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
  bg1: {
    borderRadius: 29.5,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    flex: 1
  },
  iconsRawSearch1: {
    height: 19,
    width: 18,
    marginTop: 2
  },
  combinedShape1: {
    height: 18,
    width: 17,
    backgroundColor: "transparent"
  },
  placeholderColor1: {
    height: 23,
    width: 89,
    marginLeft: 14
  },
  placeholder1: {
    height: 22,
    width: 89,
    backgroundColor: "transparent",
    color: "rgba(154,166,200,1)",
    fontSize: 16,
    marginTop: 1
  },
  iconsRawSearch1Row: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    marginRight: 145,
    marginLeft: 22,
    marginTop: 18
  },
  group18: {
    height: 59,
    width: 59,
    marginLeft: 20
  },
  rectangle12: {
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
  style1: {
    backgroundColor: "transparent",
    color: "rgba(38,194,129,1)",
    fontSize: 36,
    marginTop: 10,
    marginLeft: 12,
    height: 0,
    width: 0,
    opacity: 0
  },
  filter1: {
    height: 29,
    width: 29,
    backgroundColor: "rgba(38,194,129,1)",
    marginTop: 6,
    marginLeft: 15
  },
  searchBar1Row: {
    height: 59,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 25,
    marginRight: 22
  },
  annabel1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 124,
    width: 369
  },
  rectangle344: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 124,
    width: 367,
    shadowColor: "rgba(0,0,0,0.2383956375655595)",
    shadowOffset: {
      height: 13,
      width: 0
    },
    shadowRadius: 25,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  images15: {
    height: 79,
    width: 76,
    marginTop: 21,
    marginLeft: 20
  },
  images16: {
    height: 79,
    width: 76
  },
  images17: {
    height: 79,
    width: 76
  },
  rectangle8: {
    height: 79,
    width: 76,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 23,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)"
  },
  c472Fb1B2Da260359Fd97F7Ed22E22: {
    position: "absolute",
    top: 0,
    left: 46,
    height: 107,
    width: 75,
    backgroundColor: "transparent"
  },
  asianElderlyWomanFeelingHappySmilingLookingCameraWhileRelaxKitchenHome1: {
    position: "absolute",
    top: 3,
    left: 17,
    height: 129,
    width: 171,
    backgroundColor: "transparent"
  },
  images18: {
    position: "absolute",
    top: 9,
    left: 0,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  c472Fb1B2Da260359Fd97F7Ed22E22Stack: {
    width: 188,
    height: 132,
    marginTop: -8,
    marginLeft: -47
  },
  group34: {
    position: "absolute",
    top: 27,
    left: 124,
    height: 28,
    width: 245
  },
  group94: {
    height: 28,
    width: 245
  },
  amandaSmith1: {
    height: 27,
    width: 244,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20,
    marginTop: 1,
    marginLeft: 1
  },
  rectangle344Stack: {
    width: 369,
    height: 124
  },
  language4: {
    position: "absolute",
    top: 62,
    left: 125,
    height: 28,
    width: 236,
    flexDirection: "row"
  },
  group14: {
    height: 28,
    width: 74
  },
  rectangleCopy913: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 28,
    width: 74
  },
  rectangleCopy813: {
    height: 28,
    width: 74,
    opacity: 0.6782691592261905,
    borderWidth: 2,
    borderColor: "rgba(49,184,128,1)",
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
  french1: {
    position: "absolute",
    top: 7,
    left: 4,
    height: 17,
    width: 65,
    color: "rgba(0,0,0,0.7761529242242133)",
    textAlign: "center",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy913Stack: {
    width: 74,
    height: 28
  },
  group15: {
    height: 28,
    width: 74,
    marginLeft: 7
  },
  rectangleCopy914: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 28,
    width: 74
  },
  rectangleCopy814: {
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
  japanese1: {
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
  rectangleCopy914Stack: {
    width: 74,
    height: 28
  },
  group13: {
    height: 28,
    width: 74,
    marginLeft: 7
  },
  rectangleCopy912: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 28,
    width: 74
  },
  rectangleCopy812: {
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
  english3: {
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
  rectangleCopy912Stack: {
    width: 74,
    height: 28
  },
  group14Row: {
    height: 28,
    flexDirection: "row",
    flex: 1
  },
  annabel1Stack: {
    width: 369,
    height: 124,
    marginTop: 68,
    marginLeft: 25
  },
  faiChan2: {
    position: "absolute",
    top: 83,
    left: 0,
    height: 124,
    width: 367
  },
  rectangle346: {
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
  group36: {
    position: "absolute",
    top: 8,
    left: 69,
    height: 62,
    width: 278
  },
  group96: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 62,
    width: 278
  },
  greentagCopy8: {
    position: "absolute",
    top: 24,
    left: 73,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  greentagCopy9: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  greentagCopy8Stack: {
    width: 278,
    height: 61,
    marginTop: 1
  },
  karenWong: {
    position: "absolute",
    top: 0,
    left: 34,
    height: 27,
    width: 244,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20
  },
  group96Stack: {
    width: 278,
    height: 62
  },
  images22: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 79,
    width: 79
  },
  images23: {
    height: 79,
    width: 79
  },
  images24: {
    height: 79,
    width: 79
  },
  rectangle10: {
    height: 79,
    width: 79,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 23,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)"
  },
  ptSeniors481: {
    position: "absolute",
    top: 13,
    left: 11,
    height: 77,
    width: 139,
    backgroundColor: "transparent"
  },
  uoBtKxQ8400X400: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 126,
    width: 126,
    backgroundColor: "transparent"
  },
  ptSeniors481Stack: {
    width: 150,
    height: 126,
    marginTop: -13,
    marginLeft: -24
  },
  group36Stack: {
    width: 347,
    height: 79,
    marginTop: 23,
    marginLeft: 20
  },
  language6: {
    position: "absolute",
    top: 0,
    left: 125,
    height: 182,
    width: 107
  },
  group23: {
    height: 36,
    width: 96
  },
  rectangleCopy921: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 96
  },
  rectangleCopy821: {
    height: 36,
    width: 96,
    opacity: 0.6782691592261905,
    borderWidth: 2,
    borderColor: "rgba(34,177,117,1)",
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
  arabic2: {
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
  rectangleCopy921Stack: {
    width: 96,
    height: 36
  },
  group24: {
    height: 36,
    width: 107,
    marginTop: 110
  },
  rectangleCopy922: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 107
  },
  rectangleCopy822: {
    height: 36,
    width: 107,
    opacity: 0.6782691592261905,
    borderWidth: 2,
    borderColor: "rgba(35,175,117,1)",
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
  cantonese2: {
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
  rectangleCopy922Stack: {
    width: 107,
    height: 36
  },
  faiChan2Stack: {
    width: 367,
    height: 207,
    marginTop: 77,
    marginLeft: 25
  },
  arjun1: {
    height: 124,
    width: 367,
    marginTop: 18,
    marginLeft: 25
  },
  rectangle347: {
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
  group37: {
    position: "absolute",
    top: 10,
    left: 67,
    height: 68,
    width: 278
  },
  group97: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 62,
    width: 278
  },
  greentagCopy10: {
    position: "absolute",
    top: 24,
    left: 73,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  greentagCopy11: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  greentagCopy10Stack: {
    width: 278,
    height: 61,
    marginTop: 1
  },
  anoshaNair: {
    position: "absolute",
    top: 0,
    left: 34,
    height: 27,
    width: 244,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20
  },
  group16: {
    position: "absolute",
    top: 32,
    left: 33,
    height: 36,
    width: 86
  },
  rectangleCopy915: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 86
  },
  rectangleCopy815: {
    height: 36,
    width: 86,
    opacity: 0.6782691592261905,
    borderWidth: 2,
    borderColor: "rgba(35,181,120,1)",
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
  hindi1: {
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
  rectangleCopy915Stack: {
    width: 86,
    height: 36
  },
  group17: {
    position: "absolute",
    top: 32,
    left: 127,
    height: 36,
    width: 89
  },
  rectangleCopy916: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 89
  },
  rectangleCopy816: {
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
  english4: {
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
  rectangleCopy916Stack: {
    width: 89,
    height: 36
  },
  group97Stack: {
    width: 278,
    height: 68
  },
  images25: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 79,
    width: 79
  },
  images26: {
    height: 79,
    width: 79
  },
  images27: {
    height: 79,
    width: 79
  },
  rectangle11: {
    height: 79,
    width: 79,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 23,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)"
  },
  download1: {
    position: "absolute",
    top: 11,
    left: 0,
    height: 117,
    width: 210,
    backgroundColor: "transparent"
  },
  shutterstock145552537E14575241827191: {
    position: "absolute",
    top: 0,
    left: 56,
    height: 98,
    width: 98,
    backgroundColor: "transparent"
  },
  download1Stack: {
    width: 210,
    height: 128,
    marginTop: -11,
    marginLeft: -66
  },
  group37Stack: {
    width: 345,
    height: 79,
    marginTop: 21,
    marginLeft: 22
  },
  navigationToolbarAction11: {
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
  navigationBackgroundBar1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 68,
    width: 414,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  home2: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
  },
  home2_imageStyle: {},
  homeFilled2: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(70,70,70,1)"
  },
  conversations2: {
    height: 35,
    width: 41,
    backgroundColor: "transparent",
    marginLeft: 121
  },
  trophy12: {
    backgroundColor: "rgba(111,111,111,1)",
    marginLeft: 17,
    height: 0,
    width: 0,
    opacity: 0
  },
  user2: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)",
    marginLeft: 69
  },
  home2Row: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: 30,
    marginLeft: 31,
    marginTop: 17
  },
  conversations3: {
    position: "absolute",
    top: 17,
    left: 187,
    height: 35,
    width: 41,
    backgroundColor: "transparent"
  },
  trophy13: {
    position: "absolute",
    top: 17,
    left: 245,
    backgroundColor: "rgba(111,111,111,1)",
    height: 0,
    width: 0,
    opacity: 0
  },
  home3: {
    position: "absolute",
    top: 17,
    left: 31,
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
  },
  home3_imageStyle: {},
  homeFilled3: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(70,70,70,1)"
  },
  user3: {
    position: "absolute",
    top: 17,
    left: 349,
    height: 35,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
  },
  navigationBackgroundBar1Stack: {
    width: 414,
    height: 68
  },
  javierGordon2: {
    position: "absolute",
    top: 378,
    left: 25,
    height: 124,
    width: 399
  },
  rectangle345: {
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
  images19: {
    height: 79,
    width: 79,
    marginTop: 23,
    marginLeft: 18
  },
  images20: {
    height: 79,
    width: 79
  },
  images21: {
    height: 79,
    width: 79
  },
  rectangle9: {
    height: 79,
    width: 79,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 23,
    overflow: "hidden",
    backgroundColor: "rgba(216,216,216,1)"
  },
  portraitPhotographySmilingSeniorCitizensIlyaNodia41: {
    position: "absolute",
    top: 10,
    left: 83,
    height: 111,
    width: 87,
    backgroundColor: "transparent"
  },
  afcccE6Ac11Ea8600Abe4F45458C9ImageHires174750: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 170,
    width: 170,
    backgroundColor: "transparent"
  },
  portraitPhotographySmilingSeniorCitizensIlyaNodia41Stack: {
    width: 170,
    height: 170,
    marginTop: -19,
    marginLeft: -88
  },
  group35: {
    position: "absolute",
    top: 28,
    left: 94,
    height: 68,
    width: 305
  },
  group95: {
    position: "absolute",
    top: 5,
    left: 0,
    height: 63,
    width: 305
  },
  greentagCopy6: {
    position: "absolute",
    top: 24,
    left: 80,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  greentagCopy7: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  greentagCopy6Stack: {
    width: 305,
    height: 61,
    marginTop: 1
  },
  javierGordon3: {
    position: "absolute",
    top: 0,
    left: 30,
    height: 27,
    width: 181,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20
  },
  group95Stack: {
    width: 305,
    height: 68
  },
  rectangle345Stack: {
    width: 399,
    height: 124
  },
  language5: {
    position: "absolute",
    top: 184,
    left: 27,
    height: 33,
    width: 407,
    flexDirection: "row"
  },
  group21: {
    height: 33,
    width: 109
  },
  rectangleCopy919: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 33,
    width: 109
  },
  rectangleCopy819: {
    height: 33,
    width: 109,
    borderWidth: 2,
    borderColor: "rgba(24,98,36,1)",
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
  cantonese1: {
    position: "absolute",
    top: 9,
    left: 4,
    height: 17,
    width: 101,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(24,98,36,1)",
    fontSize: 12,
    letterSpacing: -0.01192559999999999
  },
  rectangleCopy919Stack: {
    width: 109,
    height: 33
  },
  group22: {
    height: 30,
    width: 90,
    marginLeft: 12,
    marginTop: 2
  },
  rectangleCopy920: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 30,
    width: 90
  },
  rectangleCopy820: {
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
  arabic1: {
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
  rectangleCopy920Stack: {
    width: 90,
    height: 30
  },
  group19: {
    height: 30,
    width: 86,
    marginLeft: 12,
    marginTop: 2
  },
  rectangleCopy917: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 30,
    width: 86
  },
  rectangleCopy817: {
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
  spanish2: {
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
  rectangleCopy917Stack: {
    width: 86,
    height: 30
  },
  group20: {
    height: 30,
    width: 86,
    marginLeft: 12,
    marginTop: 2
  },
  rectangleCopy918: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 30,
    width: 86
  },
  rectangleCopy818: {
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
  french2: {
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
  rectangleCopy918Stack: {
    width: 86,
    height: 30
  },
  group21Row: {
    height: 33,
    flexDirection: "row",
    flex: 1
  },
  rectangle7Stack: {
    width: 434,
    height: 896
  }
});

export default ElderlyHomepage;
