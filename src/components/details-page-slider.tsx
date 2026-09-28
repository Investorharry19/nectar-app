import { Colors } from "@/constants/colors";
import { Image } from "expo-image";
import { useRef } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  type SharedValue,
} from "react-native-reanimated";
import Carousel, {
  type ICarouselInstance,
} from "react-native-reanimated-carousel";

type Props = {
  images: any[]; // require(...) sources or { uri: string }
  height?: number;
};

const DOT_SIZE = 6;
const ACTIVE_DOT_WIDTH = 22;

function Dot({
  index,
  progress,
  length,
  onPress,
}: {
  index: number;
  progress: SharedValue<number>;
  length: number;
  onPress: () => void;
}) {
  const animatedStyle = useAnimatedStyle(() => {
    // Handle looping: distance wraps around the ends
    let distance = Math.abs(progress.value - index);
    distance = Math.min(distance, length - distance);

    return {
      width: interpolate(
        distance,
        [0, 1],
        [ACTIVE_DOT_WIDTH, DOT_SIZE],
        Extrapolation.CLAMP,
      ),
      backgroundColor: distance < 0.5 ? Colors.green : "#B3B3B3",
    };
  });

  return (
    <Animated.View
      onTouchEnd={onPress}
      style={[styles.dot, animatedStyle]}
      hitSlop={8}
    />
  );
}

export default function ProductSlider({ images, height = 350 }: Props) {
  const { width } = useWindowDimensions();
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);

  return (
    <View style={[styles.container, { height }]}>
      <Carousel
        ref={ref}
        width={width}
        height={height}
        data={images}
        loop
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        style={{ width }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image
              source={item}
              style={styles.image}
              contentFit="cover"
              transition={200}
            />
          </View>
        )}
      />

      <View style={styles.pagination}>
        {images.map((_, index) => (
          <Dot
            key={index}
            index={index}
            length={images.length}
            progress={progress}
            onPress={() => ref.current?.scrollTo({ index, animated: true })}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F2F3F2",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: "hidden",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  pagination: {
    position: "absolute",
    bottom: 18,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  dot: {
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
  },
});
