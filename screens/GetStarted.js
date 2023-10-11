import React from "react";
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { RectButton, TestButton } from "../components/index";
import { LinearGradient } from "expo-linear-gradient";

const GetStarted = () => {
  const navigation = useNavigation();
  const handleNavigateToHome = () => {
    navigation.navigate("Signin");
  };
  return (
    <SafeAreaView className="flex-1">
     
      <ImageBackground source={assets.muCraft} className="flex-1" resizeMode="cover" >
      <LinearGradient
            colors={["rgba(0, 0, 0,0)", "rgba(255, 255, 255,0.9)", "white"]}
            locations={[0, 0.5, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
        <View className="h-full justify-end px-10 pb-5">
          <Text className="font-semibold text-center text-3xl pt-0 pb-2">Join Us Today!</Text>
          {/* <Text className="font-semibold text-4xl pb-2">Journey</Text> */}
          
          <TestButton  >
            Sign up with Facebook
          </TestButton>
          <TestButton  >
            Sign up with Google
          </TestButton>
         
          <View className="flex-row items-center mt-2 mb-4">
            <View className="h-px flex-1 bg-slate-300" />
            <View>
              <Text className="w-12 text-center font-semibold">or</Text>
            </View>
            <View className="h-px flex-1 bg-slate-300" />
          </View>
          <RectButton
            minWidth={250}
            fontSize={SIZES.font}
            handlePress={handleNavigateToHome}
          >
            Sign in with password
          </RectButton>
          <Text className="text-center text-md mt-4">
            Don't have an account?{" "}
            <Text className="font-semibold text-md ">Sign up</Text>
          </Text>
        </View>
        </LinearGradient>
        </ImageBackground>
    
    </SafeAreaView>
  );
};
export default GetStarted;
