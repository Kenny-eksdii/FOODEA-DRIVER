import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  constants,
  dummyData,
} from "../../../constants";

import IconButton from "./IconButton";
const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
  const [isFavorite, setIsFavorite] = React.useState(true);

  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: "#FAF9F6",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Cart and Favorites */}
      <View style={{ flexDirection: "row" }}>
        {/* Cart */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image
            source={icons.cart}
            style={{ width: 20, height: 20, tintColor: "#F54748" }}
          />
        </View>

        {/* Favorites */}
        <IconButton
          icon={isFavorite ? icons.favourite : icons.love}
          iconStyle={{
            tintColor: COLORS.primary,
            position: "absolute",
            height: 25,
            width: 25,
            right: 0,
          }}
          onPress={() => setIsFavorite(!isFavorite)}
        />
      </View>
      {/* Image */}
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item.image}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </View>

      {/* Info */}
      <View
        style={{
          alignItems: "center",
          marginTop: -20,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
        <Text style={{ color: COLORS.black, textAlign: "center", ...FONTS.h2 }}>
          ₱ {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
