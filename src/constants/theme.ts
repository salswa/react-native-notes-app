import { Platform } from "react-native";

export const Colors = {
  light: {
    // Backgrounds
    backgroundPrimary: "#FFFFFF",
    backgroundSecondary: "#F5F5F2", // page/screen bg
    //backgroundCard: "#FAFAF8", // note cards
    backgroundMuted: "#eaeaea", // tags
    backgroundAccent: "#5B7FDB", // buttons
    backgroundActive: "#5b7fdb33",

    // Text
    textPrimary: "#161C1F",
    textSecondary: "#71717a",
    textMuted: "#9CA3AF",
    textAccent: "#5B7FDB",
    textOnAccent: "#FFFFFF",
    //textOnError: "#7A2A20",

    // black: "#11181c",
    // gray: "#71717a",
    // lightgray:"#f4f4f5",
    // dark2:"#3f3f46",
    // light: "#f9fafb",
  },
  dark: {
    backgroundPrimary: "#111318",
    backgroundSecondary: "#1C1F27",
    backgroundCard: "#1A1D24",
    backgroundMuted: "#2A2D35",
    backgroundAccent: "#4A6CC9",
    backgroundActive: "#DF6659",

    textPrimary: "#E8EAF0",
    textSecondary: "#A0A8B8",
    textMuted: "#5A6070",
    textAccent: "#7B9BE8",
    textOnAccent: "#FFFFFF",
    // textOnError: "#FFFFFF",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

// Spacing scale (4pt base grid)
export const Spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  section: 64,
} as const;

// Typography scale
export const FontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 28,
} as const;

export const FontWeight = {
  regular: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
};

export const Fonts = Platform.select({
  ios: { sans: "system-ui", serif: "ui-serif", mono: "ui-monospace" },
  default: { sans: "normal", serif: "serif", mono: "monospace" },
});

// Border radius
export const Radius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  full: 999,
} as const;

export const MaxContentWidth = 800;
export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
