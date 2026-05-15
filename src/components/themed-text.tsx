import { StyleSheet, Text, type TextProps } from "react-native";

import { Colors, ThemeTextColor } from "@/constants/theme";
import { useThemeContext } from "@/context/theme-context";

export type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "label" | "subtitle" | "link";
  textColor?: ThemeTextColor;
};

export function ThemedText({
  style,
  type = "default",
  textColor,
  ...otherProps
}: ThemedTextProps) {
  const { theme } = useThemeContext();
  const textType = type ?? "default";

  return (
    <Text
      style={[
        { color: theme[textColor ?? "textPrimary"] },
        textType === "default" && styles.default,
        textType === "title" && styles.title,
        textType === "subtitle" && styles.subtitle,
        textType === "link" && styles.link,
        textType === "label" && styles.label,
        style,
      ]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 400,
  },
  title: {
    fontSize: 42,
    fontWeight: 600,
    lineHeight: 48,
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 34,
    fontWeight: 600,
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
    fontWeight: 500,
    color: Colors.light.textAccent,
    textDecorationLine: "underline",
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 700,
  },
});
