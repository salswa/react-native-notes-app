import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Colors, FontSize, FontWeight } from "./constants/theme";
import { getDeviceScheme } from "./utils/get-device-scheme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const themeColors = Colors[getDeviceScheme()];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.container,
          { backgroundColor: themeColors["backgroundSecondary"] },
        ]}
      >
        <Text style={[styles.text, { color: themeColors["textPrimary"] }]}>
          Hello World
        </Text>
        <Text style={[styles.subtext, { color: themeColors["textSecondary"] }]}>
          Subtitle text here
        </Text>
        <View
          style={[
            styles.searchbar,
            { backgroundColor: themeColors.backgroundMuted },
          ]}
        >
          <Text
            style={[styles.searchbarText, { color: themeColors.textSecondary }]}
          >
            Search your notes here
          </Text>
        </View>
        <View style={styles.badgeContainer}>
          <View
            style={[
              styles.badge,
              { backgroundColor: themeColors.backgroundPrimary },
            ]}
          >
            <Text
              style={[styles.badgeText, { color: themeColors.textSecondary }]}
            >
              badge 1
            </Text>
          </View>

          <View
            style={[
              styles.badge,
              { backgroundColor: themeColors.backgroundActive },
            ]}
          >
            <Text style={[styles.badgeText, { color: themeColors.textAccent }]}>
              badge 2
            </Text>
          </View>
          <View
            style={[
              styles.badge,
              { backgroundColor: themeColors.backgroundPrimary },
            ]}
          >
            <Text
              style={[styles.badgeText, { color: themeColors.textSecondary }]}
            >
              active
            </Text>
          </View>
        </View>
        <View style={[styles.cardContainer]}>
          <View
            style={[
              styles.card,
              { backgroundColor: themeColors.backgroundPrimary },
            ]}
          >
            <Text
              style={[styles.cardTitle, { color: themeColors.textPrimary }]}
            >
              Notes Title 1
            </Text>
          </View>
          <View
            style={[
              styles.card,
              { backgroundColor: themeColors.backgroundPrimary },
            ]}
          >
            <Text
              style={[styles.cardTitle, { color: themeColors.textPrimary }]}
            >
              Notes Title 2
            </Text>
            <Text style={[{ color: themeColors.textSecondary }]}>
              This the notes inside text here to check height. This the notes
              inside text here to check height. This the notes inside text here
              to check height. This the notes inside text here to check height.
              This the notes inside text here to check height. This the notes
              inside text here to check height.
            </Text>
          </View>
          <View
            style={[
              styles.card,
              { backgroundColor: themeColors.backgroundPrimary },
            ]}
          >
            <Text
              style={[styles.cardTitle, { color: themeColors.textPrimary }]}
            >
              Notes Title 3
            </Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  text: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
  },
  subtext: {
    fontSize: 12,
    fontWeight: FontWeight.regular,
    marginBottom: 28,
  },
  badgeContainer: {
    marginTop: 16,
    flexDirection: "row",
    gap: 8, // spacing between badges
    marginBottom: 20,
  },

  badge: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
  },

  badgeText: {
    fontSize: 14,
    fontWeight: "400",
  },
  searchbar: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 24,
  },
  searchbarText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    //alignItems: "flex-start",
    gap: 12,
  },
  card: {
    width: "48%", // two cards per row
    minHeight: 100,
    maxHeight: 200,

    padding: 14,
    borderRadius: 12,

    overflow: "hidden",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
});
