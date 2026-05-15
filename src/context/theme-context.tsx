// context/ThemeContext.tsx

import { Colors } from "@/constants/theme";
import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
type ThemeColors = typeof Colors.light | typeof Colors.dark;

type ThemeContextType = {
  isDark: boolean;
  toggle: () => void;
  theme: ThemeColors; // ← accepts both light and dark
};

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggle: () => {},
  theme: Colors.light,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const scheme = useColorScheme();
  const [isDark, setIsDark] = useState(scheme === "dark");

  return (
    <ThemeContext
      value={{
        isDark,
        toggle: () => setIsDark((p) => !p),
        theme: isDark ? Colors.dark : Colors.light,
      }}
    >
      {children}
    </ThemeContext>
  );
}

// single hook — use this everywhere instead of useTheme()
export const useThemeContext = () => useContext(ThemeContext);
