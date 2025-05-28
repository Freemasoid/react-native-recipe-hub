import { GlobalValues } from "@/styles";
import { ChevronRight } from "lucide-react-native";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface Ingredient {
  id: number;
  name: string;
  quantity: string;
}

const IngredientList = ({ ingredients }: { ingredients: Ingredient[] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredients</Text>
      <FlatList
        data={ingredients}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.ingredientRow}>
              <ChevronRight
                size={20}
                color={GlobalValues.grey[900]}
                strokeWidth={3}
              />
              <Text style={[styles.ingredientText]}>
                <Text style={styles.amount}>{item.quantity}</Text> {item.name}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
  ingredientRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 6,
  },
  ingredientText: {
    flex: 1,
    color: GlobalValues.colors.black,
    fontFamily: GlobalValues.fonts.regular,
    fontSize: 16,
  },
  amount: {
    fontFamily: GlobalValues.fonts.bold,
  },
  separator: {
    height: 12,
  },
});

export default IngredientList;
