import { View, type ViewProps } from "react-native";

import { ThemeBackgroundColor } from "@/constants/theme";
import { useThemeContext } from "@/context/theme-context";

export type ThemedViewProps = ViewProps & {
  backgroundColor?: ThemeBackgroundColor;
};

export function ThemedView({
  style,
  backgroundColor,
  ...otherProps
}: ThemedViewProps) {
  const { theme } = useThemeContext();

  return (
    <View
      style={[
        { backgroundColor: theme[backgroundColor ?? "backgroundSecondary"] },
        style,
      ]}
      {...otherProps}
    />
  );
}
