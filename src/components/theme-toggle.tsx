import { useThemeContext } from "@/context/theme-context";
import { Pressable } from "react-native";
import Icon from "./icon";

export default function ThemeToggle() {
  const { isDark, toggle } = useThemeContext();
  return (
    <Pressable onPress={toggle}>
      {isDark ? <Icon name="lightmode" /> : <Icon name="darkmode" />}
    </Pressable>
  );
}
