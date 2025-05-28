import { GlobalValues } from "@/styles";
import { StyleSheet, Text, View } from "react-native";

const RecipeDescription = ({ description }: { description: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>
      <Text style={[styles.descriptionText]}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: GlobalValues.grey[300],
  },
  title: {
    fontSize: 18,
    fontFamily: GlobalValues.fonts.bold,
    color: GlobalValues.colors.black,
    marginBottom: 16,
  },
  descriptionText: {
    textAlign: "justify",
    wordWrap: "break-word",
    fontSize: 16,
    color: GlobalValues.colors.black,
    fontFamily: GlobalValues.fonts.regular,
  },
});

export default RecipeDescription;
