import React from "react";
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { RectButton, TestButton } from "../components/index";

const GetStarted = () => {
  const navigation = useNavigation();
  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="items-center mx-5">
        <Image source={assets.getstarted} className=" my-5" />
        <View className=" flex items-center ">
          <Text className="font-semibold text-4xl pb-2">Launch Your</Text>
          <Text className="font-semibold text-4xl pb-5">Journey</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
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
          <Text className=" text-md ">
            Don't have an account?{" "}
            <Text className="font-semibold text-md ">Sign up</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default GetStarted;
