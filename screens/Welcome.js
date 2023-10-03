import React from "react";
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Welcome = () => {
  const navigation = useNavigation();
  const handleNavigateToHome = () => {
    navigation.navigate("Onboarding");
  };
  return (
    <SafeAreaView className="flex-1">
      <TouchableOpacity className="flex-1" onPress={handleNavigateToHome}>
        <ImageBackground
          source={assets.onboarding1}
          resizeMode="cover"
          className="flex-1 "
        >
          {/* overlay background */}
          <LinearGradient
            colors={["transparent", "black", "black"]}
            locations={[0, 0.9, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View className="h-full justify-end px-10">
              <Text className="text-white text-4xl pb-5">
                Welcome to 👋<Text></Text>
              </Text>
              <Text className="text-white text-6xl pb-4 font-bold">
                MorisMart
              </Text>
              <Text className="text-white text-lg pb-4">
                The #1 marketplace in Mauritius
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;
