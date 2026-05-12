import { useColorScheme } from "react-native";

export function getDeviceScheme() {
  const scheme = useColorScheme();
  const theme = scheme === "unspecified" ? "light" : scheme;
  return theme;
}
