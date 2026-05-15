import { FontSize, FontWeight } from "@/constants/theme";
import { StyleSheet } from "react-native";
import { Logo } from "./logo";
import ThemeToggle from "./theme-toggle";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export default function Header() {
  return (
    <ThemedView style={styles.headerWrapper}>
      <ThemedView style={styles.logoWrapper}>
        <Logo />
      </ThemedView>
      <ThemedView style={styles.headerTextWrapper}>
        <ThemedText textColor="textPrimary" style={styles.text}>
          pub.sub notes
        </ThemedText>
        <ThemedText textColor="textSecondary" style={styles.subtext}>
          24 notes . 3 active
        </ThemedText>
      </ThemedView>

      <ThemeToggle />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  logoWrapper: { marginBottom: 6 },

  headerTextWrapper: {
    marginLeft: 12,
    flex: 1,
  },

  text: {
    fontSize: FontSize.base,
    fontWeight: FontWeight.bold,
    marginBottom: 2,
  },

  subtext: {
    fontSize: 12,
    fontWeight: FontWeight.regular,
  },
});
