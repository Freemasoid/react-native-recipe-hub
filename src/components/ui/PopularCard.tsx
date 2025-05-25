import { Image, StyleSheet, Text, View } from "react-native";

type PopularCardProps = {
  image: string;
  title: string;
};

const PopularCard = ({ image, title }: PopularCardProps) => {
  return (
    <View style={styles.popularItem}>
      <Image
        source={{ uri: image }}
        style={styles.popularImage}
      />
      <Text style={styles.popularText}>{title}</Text>
    </View>
  );
};
export default PopularCard;

const styles = StyleSheet.create({
  popularItem: {
    marginRight: 16,
    alignItems: "center",
    backgroundColor: "red",
  },
  popularImage: {
    width: 96,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  popularText: {
    fontSize: 14,
    textAlign: "center",
  },
});
