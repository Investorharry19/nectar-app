import { KeyboardAwareScreen } from "@/components/kkeyboard-aware-screen";
import ShopSlider from "@/components/shop-slider";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/colors";
import { bestSelling, exclusiveOffer } from "@/data/explore.json";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Add, Location, SearchNormal } from "iconsax-react-nativejs";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";

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
          marginTop: 25,
        }}
      >
        <ThemedText style={{ fontSize: 24 }}>Exclusive Offer</ThemedText>
        <ThemedText style={{ color: Colors.green, fontSize: 16 }}>
          See all
        </ThemedText>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
        data={exclusiveOffer}
        keyExtractor={(item, index) =>
          item.name?.toString() ?? index.toString()
        }
        style={{ marginTop: 15, alignSelf: "stretch" }}
        contentContainerStyle={{ paddingRight: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.replace("/(noTabs)/product_details")}
            activeOpacity={1}
            style={{
              marginRight: 15,
              borderWidth: 1,
              borderColor: "#E2E2E2",
              borderRadius: 18,
              overflow: "hidden",
              padding: 8,
              width: 160,
              height: 225,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginBottom: 10,
              }}
              contentFit="scale-down"
            />
            <ThemedText
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ fontWeight: "bold", fontSize: 15 }}
            >
              {item.name}
            </ThemedText>
            <ThemedText style={{ fontSize: 14, color: "#7C7C7C" }}>
              {item.quantity}
            </ThemedText>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ThemedText
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontWeight: "bold", fontSize: 15 }}
              >
                ${item.price.toFixed(2)}
              </ThemedText>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.green,
                  width: 45,
                  height: 45,
                  borderRadius: 18,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Add size="32" color="#ffffff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 25,
        }}
      >
        <ThemedText style={{ fontSize: 24 }}>Best Selling</ThemedText>
        <ThemedText style={{ color: Colors.green, fontSize: 16 }}>
          See all
        </ThemedText>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
        data={bestSelling}
        keyExtractor={(item, index) =>
          item.name?.toString() ?? index.toString()
        }
        style={{ marginTop: 15, alignSelf: "stretch" }}
        contentContainerStyle={{ paddingRight: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.replace("/(noTabs)/product_details")}
            activeOpacity={1}
            style={{
              marginRight: 15,
              borderWidth: 1,
              borderColor: "#E2E2E2",
              borderRadius: 18,
              overflow: "hidden",
              padding: 8,
              width: 160,
              height: 225,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginBottom: 10,
              }}
              contentFit="scale-down"
            />
            <ThemedText
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ fontWeight: "bold", fontSize: 15 }}
            >
              {item.name}
            </ThemedText>
            <ThemedText style={{ fontSize: 14, color: "#7C7C7C" }}>
              {item.quantity}
            </ThemedText>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ThemedText
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ fontWeight: "bold", fontSize: 15 }}
              >
                ${item.price.toFixed(2)}
              </ThemedText>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.green,
                  width: 45,
                  height: 45,
                  borderRadius: 18,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Add size="32" color="#ffffff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={{ marginTop: 100 }} />
    </KeyboardAwareScreen>
  );
};

export default Home;
