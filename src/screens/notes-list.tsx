import Header from "@/components/header";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";

export default function NoteListScreen() {
  return (
    <ThemedView backgroundColor="backgroundSecondary" style={styles.container}>
      <Header />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
