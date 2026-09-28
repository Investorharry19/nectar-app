import { Colors } from "@/constants/colors";
import { router } from "expo-router";
import {
  Heart,
  Profile,
  SearchStatus,
  Shop,
  ShoppingCart,
} from "iconsax-react-nativejs";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";

const icons: any = {
  shop: (props: any) => <Shop {...props} />,
  explore: (props: any) => <SearchStatus {...props} />,
  cart: (props: any) => <ShoppingCart {...props} />,
  favourite: (props: any) => <Heart {...props} />,
  account: (props: any) => <Profile {...props} />,
};

function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: -2,
          backgroundColor: Colors.white,
          justifyContent: "space-around",
          height: 80,
          width: "95%",
          borderRadius: 20,
          marginHorizontal: "auto",
          boxShadow: "0 0 1px #00000020",
          alignItems: "center",
        }}
      >
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              activeOpacity={1}
              key={route.key}
              //   href={route.name}
              onPressIn={() => {
                router.replace(route.name);
              }}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 50,
              }}
            >
              {icons[route.name]({
                color: isFocused ? Colors.green : "#000000",
                size: 25,
                variant: isFocused && "Bold",
              })}
              <ThemedText
                style={{
                  color: isFocused ? Colors.green : "#000000",
                  fontSize: 12,
                }}
              >
                {label}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default MyTabBar;
