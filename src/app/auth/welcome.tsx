import { KeyboardAwareScreen } from "@/components/kkeyboard-aware-screen";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/colors";
import { Image, ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const Welcome = () => {
  const router = useRouter();
  return (
    <KeyboardAwareScreen
      containerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
      safeAreaBackgroundColor="#00000000"
    >
      <ImageBackground
        source={require("@/assets/images/welcome image.png")}
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/carrot white.png")}
          style={{ width: 55, height: 55, marginBottom: 10, marginTop: "auto" }}
          contentFit="contain"
        />
        <ThemedText
          style={{
            fontSize: 48,
            fontWeight: "bold",
            color: "white",
            width: "70%",
            textAlign: "center",
            lineHeight: 46,
          }}
        >
          Welcome to our store
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 16,
            color: "white",
            textAlign: "center",
          }}
        >
          Get your groceries in as fast as one hour
        </ThemedText>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.green,
            borderRadius: 19,
            width: "80%",
            height: 67,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            marginBottom: 60,
          }}
          onPress={() => {
            router.replace("/auth/register");
          }}
        >
          <ThemedText
            style={{
              fontSize: 16,
              color: "white",
              textAlign: "center",
            }}
          >
            Get Started
          </ThemedText>
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAwareScreen>
  );
};

export default Welcome;
