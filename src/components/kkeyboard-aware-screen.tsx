import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  type ScrollViewProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export type KeyboardAwareScreenProps = ScrollViewProps & {
  keyboardVerticalOffset?: number;
  containerStyle?: StyleProp<ViewStyle>;
  safeAreaBackgroundColor?: string;
  extraScrollHeight?: number;
  scrollToInputOffset?: number;
  topEdge?: boolean;
};

export function KeyboardAwareScreen({
  children,
  style,
  contentContainerStyle,
  containerStyle,
  safeAreaBackgroundColor = "#fff",
  topEdge = false,
  keyboardVerticalOffset = 0,
  extraScrollHeight = 100,
  scrollToInputOffset = 80,
  keyboardShouldPersistTaps = "handled",
  keyboardDismissMode = Platform.OS === "ios" ? "interactive" : "on-drag",
  ...scrollViewProps
}: KeyboardAwareScreenProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleFocus = (event: any) => {
    const target = event?.target;

    // Give the keyboard-open layout a moment to settle, then scroll
    // just enough to bring the focused input above the keyboard.
    // If it's already visible, this is a no-op.
    setTimeout(() => {
      const responder = scrollViewRef.current?.getScrollResponder();
      if (
        responder &&
        target &&
        typeof (responder as any)
          .scrollResponderScrollNativeHandleToKeyboard === "function"
      ) {
        (responder as any).scrollResponderScrollNativeHandleToKeyboard(
          target,
          scrollToInputOffset,
          true,
        );
      }
    }, 50);
  };

  return (
    <KeyboardAvoidingView
      style={[{ flex: 1, width: "100%" }, containerStyle]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <ScrollView
        ref={scrollViewRef}
        {...scrollViewProps}
        style={[
          {
            flex: 1,
            width: "100%",
            backgroundColor: "#fff",
          },
          style,
        ]}
        contentContainerStyle={[
          {
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
            paddingBottom: isKeyboardVisible ? extraScrollHeight : 0,
          },
          contentContainerStyle,
        ]}
        keyboardDismissMode={keyboardDismissMode}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, width: "100%" }}>
            <SafeAreaView
              style={[
                { flex: 1, width: "100%" },
                { backgroundColor: safeAreaBackgroundColor },
              ]}
              edges={topEdge ? ["top", "left", "right"] : ["left", "right"]}
            >
              <View style={{ flex: 1, width: "100%" }} onFocus={handleFocus}>
                {children}
              </View>
            </SafeAreaView>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
