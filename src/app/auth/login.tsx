import { KeyboardAwareScreen } from "@/components/kkeyboard-aware-screen";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/colors";
import { Image, ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { Eye, EyeSlash } from "iconsax-react-nativejs";
import { useState } from "react";
import {
  Linking,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const router = useRouter();
  const [passwordShows, setPasswordShown] = useState(false);

  const openLink = (link: string) => {
    Linking.openURL(link).catch((err) =>
      console.error("Failed to open URL:", err),
    );
  };
  return (
    <KeyboardAwareScreen
      containerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: Colors.white,
      }}
      contentContainerStyle={{
        backgroundColor: Colors.white,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      safeAreaBackgroundColor="#00000000"
      extraScrollHeight={100}
      scrollToInputOffset={80}
    >
      <ImageBackground
        source={require("@/assets/images/auth-mask.png")}
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView style={{ height: "100%", width: "85%", marginTop: 60 }}>
          <Image
            source={require("@/assets/images/carrot.png")}
            style={{ width: 60, height: 60, alignSelf: "center" }}
            contentFit="contain"
          />
          <View style={{ marginTop: 80, gap: 20 }}>
            <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>
              Sign In
            </ThemedText>
            <ThemedText style={{ fontSize: 16, color: "#7C7C7C" }}>
              Enter your email and password
            </ThemedText>
          </View>
          <View style={{ marginTop: 30, gap: 40 }}>
            <View>
              <ThemedText>Email</ThemedText>
              <TextInput
                style={{
                  borderBottomColor: "#181725",
                  borderBottomWidth: 1,
                  fontFamily: "Gilroy-Regular",
                  fontSize: 18,
                }}
                placeholder="hendrix@gmail.com"
              />
            </View>
            <View style={{ position: "relative" }}>
              <ThemedText>Password</ThemedText>
              <TextInput
                style={{
                  borderBottomColor: "#181725",
                  borderBottomWidth: 1,
                  fontFamily: "Gilroy-Regular",
                  fontSize: 18,
                }}
                placeholder="........"
                secureTextEntry={passwordShows}
              />
              <TouchableOpacity
                style={{ position: "absolute", right: 10, top: 20 }}
                onPress={() => setPasswordShown(!passwordShows)}
                activeOpacity={0.8}
              >
                {passwordShows ? (
                  <Eye size="25" color="#7c7c7c" />
                ) : (
                  <EyeSlash size="25" color="#7c7c7c" />
                )}
              </TouchableOpacity>
            </View>
            <ThemedText style={{ gap: 2, display: "flex" }}>
              By continuing you agree to our{" "}
              <ThemedText
                onPress={() => openLink("https://www.google.com")}
                style={{ color: Colors.green, marginHorizontal: 10 }}
              >
                Terms of Service
              </ThemedText>{" "}
              and{" "}
              <ThemedText
                onPress={() => openLink("https://www.google.com")}
                style={{ color: Colors.green, marginHorizontal: 10 }}
              >
                Privacy Policy
              </ThemedText>
            </ThemedText>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.green,
              borderRadius: 19,
              width: "100%",
              height: 67,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
              marginBottom: 20,
            }}
            onPress={() => {
              router.push("/(tabs)/shop");
            }}
          >
            <ThemedText
              style={{
                fontSize: 16,
                color: "white",
                textAlign: "center",
              }}
            >
              Sign In
            </ThemedText>
          </TouchableOpacity>
          <ThemedText style={{ textAlign: "center" }}>
            Don't have an account?
            <ThemedText
              onPress={() => router.push("/auth/register")}
              style={{ color: Colors.green }}
            >
              Sign up
            </ThemedText>
          </ThemedText>
        </ScrollView>
      </ImageBackground>
    </KeyboardAwareScreen>
  );
};

export default Login;
