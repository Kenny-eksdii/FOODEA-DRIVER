import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SIZES, COLORS, icons, dummyData } from "../../../constants";

const FoodDetails = ({ food, calories, isFavourite, img }) => {
  const [Favorite, isFavorite] = useState(true);
  return (
    <View
      style={{
        marginTop: SIZES.radius,
        marginBottom: SIZES.padding,
        paddingHorizontal: SIZES.padding,
      }}
    >
      {/* Image holder */}
      <View
        style={{
          height: 190,
          borderRadius: 15,
          backgroundColor: COLORS.lightGray2,
          elevation: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: SIZES.base,
            paddingHorizontal: SIZES.radius,
          }}
        >
          {/* calories */}
          <View style={{ flexDirection: "row" }}>
            <Image source={icons.calories} style={{ width: 30, height: 30 }} />
            <Text style={{ color: COLORS.darkGray2 }}>{calories} calories</Text>
          </View>
          {/* Favorite */}
          <TouchableOpacity>
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: dummyData.hamburger?.isFavourite
                  ? COLORS.primary
                  : COLORS.gray,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* food image */}
        <View>{img}</View>
      </View>
    </View>
  );
};

export default FoodDetails;
