import { StyleSheet, View } from "react-native";

import { KeyboardAwareScreen } from "@/components/kkeyboard-aware-screen";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/colors";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  setTimeout(() => {
    console.log("Navigating to welcome screen...");
    router.push("/(tabs)/shop");
  }, 3000);

  return (
    <KeyboardAwareScreen
      style={styles.container}
      safeAreaBackgroundColor={Colors.green}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={require("@/assets/images/carrot white.png")}
            style={{ width: 60, height: 60 }}
            contentFit="contain"
          />
          <View style={{ justifyContent: "center" }}>
            <ThemedText
              style={{
                fontWeight: "bold",
                fontSize: 70,
                lineHeight: 60,
                color: Colors.white,
              }}
            >
              nectar
            </ThemedText>
            <ThemedText
              style={{ fontSize: 20, color: Colors.white, letterSpacing: 4 }}
            >
              online groceries
            </ThemedText>
          </View>
        </View>
      </View>
    </KeyboardAwareScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.green,
  },
});
