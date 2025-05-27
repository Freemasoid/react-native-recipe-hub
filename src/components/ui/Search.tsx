import { GlobalValues } from "@/styles";
import { Search as SearchIcon } from "lucide-react-native";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Search = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (query: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState(query);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setQuery(query);
  };

  return (
    <View style={styles.searchContainer}>
      <SearchIcon
        size={20}
        strokeWidth={3}
        color={GlobalValues.grey[600]}
      />
      <TextInput
        placeholder="Search recipes"
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.searchInput}
        placeholderTextColor={GlobalValues.grey[700]}
      />
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: GlobalValues.grey[300],
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchInput: {
    borderWidth: 1,
    color: GlobalValues.grey[900],
    fontWeight: "600",
    fontFamily: GlobalValues.fonts.bold,
    borderColor: GlobalValues.grey[300],
    borderRadius: 10,
    padding: 10,
    flex: 1,
    fontSize: 18,
  },
});
