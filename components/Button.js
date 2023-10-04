import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({
  minWidth,
  fontSize,
  handlePress,
  children,
  backgroundColor, 
  textColor,showBorder,borderColor,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor || COLORS.primary, // Use the provided backgroundColor or default to COLORS.primary
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        borderWidth: showBorder ? 1 : 0, // Conditionally set borderWidth
        borderColor: showBorder ? borderColor : 'transparent', // Conditionally set borderColor
        ...props,
        cursor: "pointer",
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: textColor || COLORS.white,
          textAlign: "center",
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
export const TestButton = ({ handlePress, children }) => {
  return (
    <TouchableOpacity
   
      className="border rounded-xl border-slate-300 w-80 px-6 py-4 my-2"
      onPress={handlePress}
    >
      <Text className="font-semibold">{children}</Text>
    </TouchableOpacity>
  );
};
