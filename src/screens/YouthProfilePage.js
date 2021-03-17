import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import Line4 from "../components/Line4";
import Line5 from "../components/Line5";
import Conversations6 from "../components/Conversations6";
import Conversations7 from "../components/Conversations7";
import UiBarsStatusBarsBlackBase1 from "../components/UiBarsStatusBarsBlackBase1";

function YouthProfilePage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectangleStack}>
        <ImageBackground
          style={styles.rectangle}
          imageStyle={styles.rectangle_imageStyle}
          source={require("../assets/images/Gradient_v6dkobY.png")}
        >
          <View style={styles.profilePic}>
            <View style={styles.rectangle2}>
              <Image
                source={require("../assets/images/4596f0f9ec3b81fe010f3c331d0e31c62caa3ca1.png")}
                resizeMode="cover"
                style={styles.teenBoyHaircuts11}
              ></Image>
            </View>
            <Text style={styles.robeJobs}>Robe Jobs</Text>
            <Text style={styles.joined1Y3M}>Joined 1Y 3M</Text>
          </View>
          <TouchableOpacity style={styles.data1}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.rectangle1}>
          <View style={styles.languages}>
            <View style={styles.greentagCopyRow}>
              <ImageBackground
                source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=0d11458cc9c15a4157256a373016c19c1a15c530.png")}
                resizeMode="cover"
                style={styles.greentagCopy}
                imageStyle={styles.greentagCopy_imageStyle}
              >
                <Text style={styles.english}>English</Text>
              </ImageBackground>
              <ImageBackground
                source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=5232733fd27c6534e08e35ff04ea3c3c0fd9bd75.png")}
                resizeMode="cover"
                style={styles.orangetagCopy}
                imageStyle={styles.orangetagCopy_imageStyle}
              >
                <Text style={styles.spanish}>Spanish</Text>
              </ImageBackground>
            </View>
          </View>
          <Line4 style={styles.line4}></Line4>
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
                      <Text style={styles.basketball}>Basketball</Text>
                    </View>
                  </View>
                  <View style={styles.group}>
                    <View style={styles.rectangleCopy9Stack}>
                      <View style={styles.rectangleCopy9}>
                        <View style={styles.rectangleCopy8}></View>
                      </View>
                      <Text style={styles.origami}>Origami</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.helloMyFriends}>
                Hello my friends :){"\n"}I am Robe Jobs, would love to make some
                new friends {"\n"}while learning some languages!{"\n"}I always
                find elderly like you interesting, as you have SO{"\n"}MUCH
                experiences and stories that I do not possess!{"\n"}Would always
                love to chat with you and know more about{"\n"}your lives ;)
              </Text>
              <Line5 style={styles.line5}></Line5>
              <Text style={styles.badges}>Badges</Text>
              <View style={styles.badgesRedRow}>
                <Image
                  source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=cf25a4d40d7f4684c9b9cdad32e6df5bdf9c0bf1.png")}
                  resizeMode="cover"
                  style={styles.badgesRed}
                ></Image>
                <Image
                  source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=d9747cc4df20fd5ac636c27cc3caa9643b9ef99f.png")}
                  resizeMode="cover"
                  style={styles.badgesGreen}
                ></Image>
                <Image
                  source={require("../assets/images/2b93b9d00e42e3ff1de4afcbd17af6560c15753c.png")}
                  resizeMode="cover"
                  style={styles.badgesBlueCopy}
                ></Image>
                <Image
                  source={require("../assets/images/a1f0b4a38e62bdc59090ac67ba6183acdc2785c8.png")}
                  resizeMode="cover"
                  style={styles.badge}
                ></Image>
                <Image
                  source={require("../assets/images/ckn9hx4680ocogow8w0088w0sckkos?fileName=d9747cc4df20fd5ac636c27cc3caa9643b9ef99f.png")}
                  resizeMode="cover"
                  style={styles.badgesGreen1}
                ></Image>
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
                    <Conversations6
                      style={styles.conversations6}
                    ></Conversations6>
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
                <Conversations7 style={styles.conversations7}></Conversations7>
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
        </View>
        <View style={styles.group2}>
          <View style={styles.rectangle4}>
            <UiBarsStatusBarsBlackBase1
              style={styles.uiBarsStatusBarsBlackBase1}
            ></UiBarsStatusBarsBlackBase1>
            <View style={styles.data}>
              <Text style={styles.profile}>Profile</Text>
            </View>
          </View>
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
    backgroundColor: "transparent"
  },
  rectangle_imageStyle: {},
  profilePic: {
    height: 207,
    width: 181,
    marginTop: 125,
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
  teenBoyHaircuts11: {
    height: 189,
    width: 189,
    backgroundColor: "transparent",
    marginLeft: -27
  },
  robeJobs: {
    height: 41,
    width: 181,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(70,69,76,1)",
    fontSize: 30,
    marginTop: 9
  },
  joined1Y3M: {
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 14,
    marginLeft: 46
  },
  data1: {
    height: 32,
    width: 89,
    marginTop: -272,
    marginLeft: 301
  },
  logout: {
    height: 32,
    width: 89,
    color: "rgba(255,153,103,1)",
    lineHeight: 32,
    textAlign: "center",
    fontSize: 24
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
    width: 194,
    flexDirection: "row",
    marginTop: 117,
    marginLeft: 104
  },
  greentagCopy: {
    height: 30,
    width: 92,
    backgroundColor: "transparent"
  },
  greentagCopy_imageStyle: {},
  english: {
    height: 19,
    width: 49,
    color: "rgba(113,113,113,1)",
    fontSize: 14,
    marginTop: 6,
    marginLeft: 30
  },
  orangetagCopy: {
    height: 30,
    width: 92,
    backgroundColor: "transparent",
    marginLeft: 10
  },
  orangetagCopy_imageStyle: {},
  spanish: {
    height: 19,
    width: 49,
    color: "rgba(113,113,113,1)",
    fontSize: 14,
    marginTop: 6,
    marginLeft: 31
  },
  greentagCopyRow: {
    height: 30,
    flexDirection: "row",
    flex: 1
  },
  line4: {
    height: 1,
    width: 336,
    backgroundColor: "transparent",
    marginTop: 29,
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
    borderColor: "rgba(255,154,80,1)",
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
    height: 106,
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
  basketball: {
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
  rectangleCopy9Stack: {
    width: 90,
    height: 40
  },
  group1Row: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  helloMyFriends: {
    backgroundColor: "transparent",
    lineHeight: 24,
    textAlign: "justify",
    color: "rgba(70,69,76,1)",
    fontSize: 14,
    marginTop: 19,
    marginLeft: 27
  },
  line5: {
    height: 1,
    width: 336,
    backgroundColor: "transparent",
    marginTop: 16,
    marginLeft: 26
  },
  badges: {
    height: 27,
    width: 234,
    backgroundColor: "transparent",
    color: "rgba(70,69,76,1)",
    fontSize: 20,
    marginTop: 17,
    marginLeft: 27
  },
  badgesRed: {
    height: 46,
    width: 46,
    backgroundColor: "rgba(255,57,57,0.3524366258741259)"
  },
  badgesGreen: {
    height: 46,
    width: 46,
    backgroundColor: "transparent",
    marginLeft: 33
  },
  badgesBlueCopy: {
    height: 46,
    width: 46,
    backgroundColor: "transparent",
    marginLeft: 33
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
    backgroundColor: "transparent",
    marginLeft: 34
  },
  badgesGreen1: {
    height: 46,
    width: 46,
    backgroundColor: "rgba(216,216,216,1)",
    marginLeft: 34,
    marginTop: 1
  },
  badgesRedRow: {
    height: 47,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 22,
    marginRight: 28
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
  conversations6: {
    height: 34,
    width: 41,
    backgroundColor: "transparent",
    marginLeft: 68
  },
  trophy1: {
    height: 34,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)",
    marginLeft: 69
  },
  trophy1_imageStyle: {},
  trophy3: {
    height: 34,
    width: 35,
    backgroundColor: "rgba(111,111,111,1)"
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
    width: 35,
    backgroundColor: "rgba(70,70,70,1)"
  },
  homeRow: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 32,
    marginLeft: 31,
    marginTop: 17
  },
  conversations7: {
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
    width: 35,
    backgroundColor: "rgba(70,70,70,1)"
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
  uiBarsStatusBarsBlackBase1: {
    height: 49,
    width: 414,
    backgroundColor: "transparent"
  },
  data: {
    height: 32,
    width: 83,
    marginTop: 11,
    marginLeft: 22
  },
  profile: {
    height: 32,
    width: 83,
    color: "rgba(255,153,103,1)",
    lineHeight: 32,
    textAlign: "center",
    fontSize: 24
  },
  rectangleStack: {
    width: 415,
    height: 1086
  }
});

export default YouthProfilePage;
