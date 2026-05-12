/**
 * useTheme() is a custom hook that returns the current theme colors based on the user's device theme settings.
 * It uses the useColorScheme hook from react-native to determine the current color scheme (light, dark, or unspecified).
 * If the color scheme is unspecified, it defaults to light mode.
 * The hook then returns the corresponding colors from the Colors constant defined in the theme.ts file.
 *
 * @returns {object} An object containing the colors for the current theme.
 */

import { Colors } from "@/constants/theme";
import { getDeviceScheme } from "@/utils/get-device-scheme";

export function useTheme() {
  const theme = getDeviceScheme();

  return Colors[theme];
}
