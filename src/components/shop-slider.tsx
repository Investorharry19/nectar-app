import { Colors } from "@/constants/colors";
import { Image } from "expo-image";
import { useRef } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  Pagination,
  type ICarouselInstance,
} from "react-native-reanimated-carousel";

const data = ["First", "Second", "Third"];
const imageSources = [
  require("@/assets/images/slider1.jpg"),
  require("@/assets/images/slider2.jpg"),
  require("@/assets/images/slider3.jpg"),
];

export default function ShopSlider() {
  const { width } = useWindowDimensions();
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        width={width - 40}
        height={135}
        data={data}
        // loop
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        style={{ width, alignSelf: "center" }}
        renderItem={({ item, index }) => (
          <View style={styles.slide}>
            <Image
              source={imageSources[index]}
              style={{
                width: "100%",
                height: "100%",
                alignSelf: "center",
                borderRadius: 15,
              }}
              //   contentFit="contain"
            />
          </View>
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        containerStyle={styles.paginationContainer}
        onPress={(index) => {
          ref.current?.scrollTo({ index, animated: true });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", marginTop: 15, position: "relative" },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 15,
  },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#D9D9D9" },
  activeDot: { backgroundColor: Colors.green },
  paginationContainer: { gap: 6, marginTop: 10, bottom: 25 },
});
