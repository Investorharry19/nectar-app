import { KeyboardAwareScreen } from "@/components/kkeyboard-aware-screen";
import ShopSlider from "@/components/shop-slider";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/colors";
import { Image } from "expo-image";
import { Location, SearchNormal } from "iconsax-react-nativejs";
import { TextInput, View } from "react-native";

const Home = () => {
  return (
    <KeyboardAwareScreen
      containerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: Colors.white,
        marginTop: 10,
      }}
      contentContainerStyle={{
        backgroundColor: Colors.white,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
      }}
      safeAreaBackgroundColor={Colors.white}
      extraScrollHeight={100}
      scrollToInputOffset={80}
      topEdge={true}
    >
      <Image
        source={require("@/assets/images/carrot.png")}
        style={{ width: 30, height: 30, alignSelf: "center" }}
        contentFit="contain"
      />
      <View
        style={{
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Location size="18" color="#7c7c7c" variant="Bold" />
        <ThemedText style={{ fontSize: 18 }}>Tanke, Ilorin</ThemedText>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "#F2F3F2",
          borderRadius: 15,
          position: "relative",
          alignSelf: "center",
          height: 50,
          marginTop: 15,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <SearchNormal
          size="20"
          color="#000000"
          style={{ position: "absolute", left: 10 }}
        />
        <TextInput
          style={{
            backgroundColor: "transparent",
            width: "100%",
            height: "100%",
            paddingLeft: 40,
            fontFamily: "Gilroy-Bold",
            fontSize: 14,
            color: "#7C7C7C",
          }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ShopSlider />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        <ThemedText style={{ fontSize: 24 }}>Exclusive Offer</ThemedText>
        <ThemedText style={{ color: Colors.green, fontSize: 16 }}>
          See all
        </ThemedText>
      </View>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
      <ThemedText style={{ marginTop: 50 }}>Hello from Home</ThemedText>
    </KeyboardAwareScreen>
  );
};

export default Home;
