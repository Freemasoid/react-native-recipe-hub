import { GlobalValues } from "@/styles";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

interface StarRatingProps {
  rating: number;
  reviews?: number;
  size?: number;
  showReviews?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  reviews,
  size = 16,
  showReviews = true,
}) => {
  const renderStar = (index: number) => {
    const fillPercentage = Math.min(Math.max(rating - index, 0), 1);

    return (
      <View
        key={index}
        style={[styles.starContainer, { width: size, height: size }]}
      >
        {/* Empty star background */}
        <Text
          style={[
            styles.star,
            styles.starAbsolute,
            { fontSize: size, color: GlobalValues.grey[300] },
          ]}
        >
          ★
        </Text>

        {/* Filled star with clipping */}
        <View
          style={[
            styles.starFillContainer,
            {
              width: `${fillPercentage * 100}%`,
              height: size,
            },
          ]}
        >
          <Text
            style={[
              styles.star,
              styles.starAbsolute,
              { fontSize: size, color: GlobalValues.colors.primary },
            ]}
          >
            ★
          </Text>
        </View>
      </View>
    );
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(renderStar(i));
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.starsContainer}>{renderStars()}</View>
      {showReviews && reviews && (
        <Text style={[styles.reviewText, { fontSize: size * 0.8 }]}>
          ({reviews})
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  starContainer: {
    position: "relative",
    marginRight: 1,
  },
  star: {
    ...(Platform.OS === "ios" ? { lineHeight: 18 } : { lineHeight: 14 }),
  },
  starAbsolute: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  starFillContainer: {
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
  },
  reviewText: {
    includeFontPadding: false,
    color: GlobalValues.grey[900],
    fontFamily: GlobalValues.fonts.regular,
  },
});

export default StarRating;
