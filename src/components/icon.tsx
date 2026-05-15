import { ThemeBackgroundColor } from "@/constants/theme";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { ThemedView } from "./themed-view";

const icons = {
  lightmode: require("@/assets/light_mode_icon_56x56.png"),
  darkmode: require("@/assets/dark_mode_icon_56x56.png"),
};

type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  bgColor?: ThemeBackgroundColor;
  size?: number;
}

export default function Icon({
  name,
  bgColor = "backgroundMuted",
  size = 18,
}: IconProps) {
  return (
    <ThemedView
      backgroundColor={bgColor}
      style={[
        styles.iconWrapper,
        {
          width: size + 14,
          height: size + 14,
        },
      ]}
    >
      <Image
        contentFit="contain"
        style={{
          width: size,
          height: size,
        }}
        source={icons[name]}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
});
