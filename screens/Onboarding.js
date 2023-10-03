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

const Onboarding = () => {
  const navigation = useNavigation();
  const handleNavigateToGetStarted = () => {
    navigation.navigate("GetStarted");
  };
  return (
    <SafeAreaView className="">
      <View className="items-center">
        <Image source={assets.onboarding2} className="scale-125 my-10 h-75" />
        <View className="h-25 flex items-center self-end">
          <Text className="font-semibold text-4xl pb-2">Buy From</Text>
          <Text className="font-semibold text-4xl pb-5">Micro SMEs</Text>
          <Text className=" text-md pb-4 px-4">
            Discover Mauritius' micro SMEs. Shop local, find unique treasures,
            and support small businesses.
          </Text>
        </View>
        <RectButton
          minWidth={250}
          fontSize={SIZES.font}
          handlePress={handleNavigateToGetStarted}
        >
          Get Started
        </RectButton>
     
      </View>
    </SafeAreaView>
  );
};
export default Onboarding;
