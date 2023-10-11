import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  TextInput,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { RectButton, TestButton } from "../components/index";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/authSlice';


const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(null);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);


  useEffect(() => {
    if (user) {
      navigation.navigate("Home");
    }
    if (error) {
      setLoginError(error);
    }
  }, [user, error]);

  const handleLogin = () => {
    setLoginError(null);
    dispatch(loginUser({ email, password }));
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={assets.wallpaperlogin} style={{ flex: 1 }} resizeMode="cover">
        <LinearGradient
          colors={["rgba(0, 0, 0,0.3)", "rgba(255, 255, 255,0.7)", "white"]}
          locations={[0, 0.3, 0.7]}
          style={{ flex: 1 }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
            <ScrollView
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 10 }}
            >
              <View>
                <Image source={assets.logo} style={{ alignSelf: 'center', marginBottom: 15, width: 300, height: 150 }} resizeMode="contain" />
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30, paddingBottom: 20 }}>
                  Connect to our platform!
                </Text>
                <TextInput
                  style={{
                    ...SHADOWS.default,
                    padding: 12,
                    borderRadius: 8,
                    marginBottom: 10,
                    height: 50,
                    backgroundColor: 'white',
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                  }}
                  placeholder="Enter your Email"
                  placeholderTextColor="black"
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  style={{
                    ...SHADOWS.default,
                    padding: 12,
                    borderRadius: 8,
                    marginBottom: 20,
                    height: 50,
                    backgroundColor: 'white',
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                  }}
                  placeholder="Enter your Password"
                  placeholderTextColor="black"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
                {loginError && (
                  <View style={{ padding: 10, marginBottom: 10, borderRadius: 8, backgroundColor: 'rgba(255,0,0,0.1)', borderColor: 'red', borderWidth: 1 }}>
                    <Text style={{ color: 'red', textAlign: 'center' }}>{loginError.message}</Text>
                  </View>
                )}
                <RectButton
                  minWidth={250}
                  fontSize={SIZES.font}
                  handlePress={handleLogin}
                >
                  {isLoading ? "Loading..." : "Sign in with password"}
                </RectButton>
                <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 10 }}>
                  Don't have an account? {" "}
                  <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Sign up
                  </Text>
                </Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignIn;
