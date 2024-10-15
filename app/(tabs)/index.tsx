import { StyleSheet, View } from "react-native";
// import { Link } from "expo-router";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button label="Choose an image" theme="primary" />
        <Button label="Use this image" />
      </View>
      {/* <Link href={"/about"} style={styles.button}>
        Go To About
      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  imageContainer: {
    flex: 1,
  },
  buttonsContainer: { flex: 1 / 3, alignItems: "center" },
});
