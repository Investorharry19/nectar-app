import ProductSlider from "@/components/details-page-slider";
import { KeyboardAwareScreen } from "@/components/kkeyboard-aware-screen";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/colors";
import { details } from "@/data/details.json";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { Minus, Star1 } from "iconsax-react-nativejs";
import { ChevronDown, ChevronLeft, Heart, Plus } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

const nutritionRanges: Record<string, number> = {
  calories: 200,
  carbohydrates: 60,
  fiber: 10,
  sugar: 30,
  protein: 10,
};

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
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#E2E2E2",
          marginVertical: 20,
        }}
      />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ThemedText style={{ fontSize: 16, fontWeight: "bold" }}>
            Product Details
          </ThemedText>
          <ChevronDown />
        </View>
        <ThemedText style={{ fontSize: 14, color: "#7C7C7C", marginTop: 10 }}>
          {details.apples.description}
        </ThemedText>
      </View>
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#E2E2E2",
          marginVertical: 20,
        }}
      />

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ThemedText style={{ fontSize: 16, fontWeight: "bold" }}>
            Nutritions
          </ThemedText>
          <ChevronDown />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          {details.apples.nutrition &&
            Object.entries(details.apples.nutrition).map(([key, value]) => {
              const range = nutritionRanges[key] ?? Math.max(value, 1);
              const progress = Math.min(
                Math.max((value / range) * 100, 0),
                100,
              );

              return (
                <View key={key} style={{ width: "100%", marginVertical: 7 }}>
                  <View
                    style={{
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 6,
                    }}
                  >
                    <ThemedText style={{ fontSize: 14, color: "#7C7C7C" }}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </ThemedText>
                    <ThemedText style={{ fontSize: 14, fontWeight: "bold" }}>
                      {value}
                    </ThemedText>
                  </View>
                  <View
                    style={{
                      height: 6,
                      width: "100%",
                      overflow: "hidden",
                      borderRadius: 3,
                      backgroundColor: "#E8F3EB",
                    }}
                  >
                    <View
                      style={{
                        height: "100%",
                        width: `${progress}%`,
                        borderRadius: 3,
                        backgroundColor: "#53B175",
                      }}
                    />
                  </View>
                </View>
              );
            })}
        </View>
      </View>

      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#E2E2E2",
          marginVertical: 20,
        }}
      />

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <ThemedText style={{ fontSize: 16, fontWeight: "bold" }}>
            Reviews
          </ThemedText>
          <ChevronDown />
        </View>
        <View>
          {details.apples.reviews &&
            details.apples.reviews.map((review, index) => (
              <View key={index} style={{ marginVertical: 10 }}>
                <ThemedText style={{ fontSize: 14, fontWeight: "bold" }}>
                  {review.user}
                </ThemedText>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  {[...Array(5)].map((_, i) => {
                    const isRated = i < review.rating;

                    return (
                      <Star1
                        key={i}
                        size={16}
                        color={isRated ? "#F4B400" : "#B3B3B3"}
                        variant={isRated ? "Bold" : "Linear"}
                      />
                    );
                  })}
                  <ThemedText style={{ fontSize: 12, marginLeft: 6 }}>
                    {review.rating}/5
                  </ThemedText>
                </View>
                <ThemedText
                  style={{ fontSize: 14, color: "#7C7C7C", marginTop: 5 }}
                >
                  {review.comment}
                </ThemedText>
              </View>
            ))}
        </View>
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
        }}
        onPress={() => {
          router.back();
        }}
      >
        <ThemedText
          style={{
            fontSize: 16,
            color: "white",
            textAlign: "center",
          }}
        >
          Back To Basket
        </ThemedText>
      </TouchableOpacity>
      <View style={{ marginTop: 40 }} />
    </KeyboardAwareScreen>
  );
};

export default ProductDetails;
