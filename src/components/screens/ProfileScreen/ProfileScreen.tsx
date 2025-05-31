import { OptionCard } from "@/components";
import { Button } from "@/components/ui";
import { RootState } from "@/store/store";
import { GlobalValues } from "@/styles";
import { Bell, CircleHelp, Edit, Heart, Settings } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";

const ProfileScreen = () => {
  const [user] = useState({
    name: "Roman Reins",
    email: "roman.reins@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    joinDate: "March 2024",
  });
  const favIds = useSelector((state: RootState) => state.favorites.recipeIds);

  const [savedRecipes, setSavedRecipes] = useState(favIds.length);

  useEffect(() => {
    setSavedRecipes(favIds.length);
  }, [favIds]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <View style={styles.profileHeaderContent}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: user.avatar }}
                style={styles.avatar}
              />
            </View>

            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{user.name}</Text>
              <Text style={styles.profileEmail}>{user.email}</Text>
              <Text style={styles.memberSince}>
                Member since {user.joinDate}
              </Text>
            </View>

            <TouchableOpacity style={styles.editButton}>
              <Edit
                size={20}
                color={GlobalValues.grey[600]}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <OptionCard
            icon={<Bell color={GlobalValues.yellow[800]} />}
            label="Notifications"
            value="0"
            color={GlobalValues.grey[800]}
            bgColor={GlobalValues.yellow[300]}
          />
          <OptionCard
            icon={<Heart color={GlobalValues.red[800]} />}
            label="Saved Recipes"
            value={savedRecipes.toString()}
            color={GlobalValues.grey[800]}
            bgColor={GlobalValues.red[300]}
          />
          <OptionCard
            icon={<Settings />}
            label="Settings"
            color={GlobalValues.grey[800]}
            bgColor={GlobalValues.grey[300]}
          />
          <OptionCard
            icon={<CircleHelp color={GlobalValues.blue[800]} />}
            label="Help"
            color={GlobalValues.grey[800]}
            bgColor={GlobalValues.blue[300]}
          />
        </View>

        <View style={styles.logoutContainer}>
          <Button
            variant="primary"
            onPress={() => {}}
          >
            Logout
          </Button>
        </View>
      </View>
    </View>
  );
};
export default ProfileScreen;
