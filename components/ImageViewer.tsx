import { StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
  imgSource: string;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  //If the selected image is not null, show the image from the device, otherwise, show the placeholder image.
  //The picked image is a uri string, not a local asset like the placeholder image.
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
