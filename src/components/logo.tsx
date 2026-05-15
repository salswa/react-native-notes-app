import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export function Logo() {
  return (
    <Image style={styles.image} source={require("@/assets/logo_56x56.png")} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 28,
    height: 28,
  },
});
