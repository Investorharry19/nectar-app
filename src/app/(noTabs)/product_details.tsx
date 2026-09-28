import ProductSlider from "@/components/details-page-slider";
import { KeyboardAwareScreen } from "@/components/kkeyboard-aware-screen";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/colors";
import { details } from "@/data/details.json";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { Minus } from "iconsax-react-nativejs";
import { ChevronLeft, Heart, Plus } from "lucide-react-native";
import { View } from "react-native";

const ProductDetails = () => {
  const { productName } = useLocalSearchParams();

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
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ChevronLeft size={30} onPress={() => router.back()} />
        <Image
          source={require("@/assets/images/share.png")}
          style={{ height: 18, width: 18 }}
        />
      </View>
      <ProductSlider images={details.apples.images} />
      <View style={{ width: "100%", marginTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: 20,
            }}
          >
            <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>
              {details.apples.name}
            </ThemedText>
            <Heart size="32" color="#FF8A65" />
          </View>
        </View>
      </View>
      <ThemedText style={{ fontSize: 18, color: "#7C7C7C" }}>
        1kg, per lb
      </ThemedText>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Minus color="#B3B3B3" size={30} />
          <View
            style={{
              height: 45,
              width: 45,
              borderColor: "#E2E2E2",
              borderWidth: 2,
              borderRadius: 17,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThemedText style={{ fontSize: 18, fontWeight: "bold" }}>
              2
            </ThemedText>
          </View>
          <Plus color="#53B175" size={30} />
        </View>
        <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>
          $30
        </ThemedText>
      </View>
    </KeyboardAwareScreen>
  );
};

export default ProductDetails;
