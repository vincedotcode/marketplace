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
import { LinearGradient } from "expo-linear-gradient";

const Onboarding = () => {
  const navigation = useNavigation();
  const handleNavigateToGetStarted = () => {
    navigation.navigate("GetStarted");
  };
  return (
    <SafeAreaView className="flex-1">
      
        <ImageBackground source={assets.getstarted} className="flex-1" resizeMode="cover" >
          {/* overlay background */}
          <LinearGradient
            colors={["transparent", "black", "black"]}
            locations={[0, 0.95, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
        <View className="h-full justify-end px-10 pb-10">
          <Text className="font-semibold text-white text-4xl pb-2">Buy From</Text>
          <Text className="font-semibold text-white text-4xl pb-5">Micro SMEs</Text>
          <Text className=" text-white text-lg pb-4">
            Discover Mauritius' micro SMEs. Shop local, find unique treasures,
            and support small businesses.
          </Text>
          
        <RectButton
          minWidth={250}
          fontSize={SIZES.font}
          backgroundColor={COLORS.transparent}
          showBorder
          borderColor={COLORS.white}
          handlePress={handleNavigateToGetStarted}
        >
          Get Started
        </RectButton>
        </View>
          </LinearGradient>

     </ImageBackground>
      
    </SafeAreaView>
  );
};
export default Onboarding;
