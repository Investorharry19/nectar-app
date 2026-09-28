import {
  Platform,
  StyleSheet,
  Text,
  type TextProps,
  type TextStyle,
} from "react-native";

import { Fonts, ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export type ThemedTextProps = TextProps & {
  type?:
    | "default"
    | "title"
    | "small"
    | "smallBold"
    | "subtitle"
    | "link"
    | "linkPrimary"
    | "code";
  themeColor?: ThemeColor;
};

export function ThemedText({
  style,
  type = "default",
  themeColor,
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();
  const flattenedStyle = StyleSheet.flatten(style);
  const customFontFamily = flattenedStyle?.fontFamily
    ? undefined
    : getGilroyFontFamily(flattenedStyle?.fontWeight);

  return (
    <Text
      style={[
        { color: "#000" },
        type === "default" && styles.default,
        type === "title" && styles.title,
        type === "small" && styles.small,
        type === "smallBold" && styles.smallBold,
        type === "subtitle" && styles.subtitle,
        type === "link" && styles.link,
        type === "linkPrimary" && styles.linkPrimary,
        type === "code" && styles.code,
        style,
        customFontFamily && {
          fontFamily: customFontFamily,
          fontWeight: "normal",
        },
      ]}
      {...rest}
    />
  );
}

function getGilroyFontFamily(fontWeight: TextStyle["fontWeight"]) {
  switch (fontWeight) {
    case "100":
    case "200":
    case "300":
      return "Gilroy-Light";
    case "bold":
    case "700":
      return "Gilroy-Bold";
    case "800":
    case "900":
      return "Gilroy-Heavy";
    case "400":
    case "normal":
      return "Gilroy-Regular";
    case "500":
    case "600":
      return "Gilroy-Medium";
    default:
      return undefined;
  }
}

const styles = StyleSheet.create({
  small: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Gilroy-Medium",
  },
  smallBold: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Gilroy-Bold",
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Gilroy-Medium",
  },
  title: {
    fontSize: 48,
    lineHeight: 52,
    fontFamily: "Gilroy-Bold",
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 44,
    fontFamily: "Gilroy-Bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
    fontFamily: "Gilroy-Regular",
  },
  linkPrimary: {
    lineHeight: 30,
    fontSize: 14,
    color: "#3c87f7",
    fontFamily: "Gilroy-Regular",
  },
  code: {
    fontFamily: Fonts.mono,
    fontWeight: Platform.select({ android: 700 }) ?? 500,
    fontSize: 12,
  },
});
