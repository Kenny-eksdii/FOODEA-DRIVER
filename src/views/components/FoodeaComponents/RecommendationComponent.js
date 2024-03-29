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

const RecommendationComponent = ({ containerStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: 200,
                padding: SIZES.radius,

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
                <Image
                    source={icons.favourite}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.isFavorite ? COLORS.primary : COLORS.gray,
                    }}
                />
            </View>
            {/* Image */}
            <View
                style={{
                    height: 150,
                    width: 150,
                    justifyContent: "center",
                    alignSelf: "center",
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

            {/* Text */}
            <View style={{ flexDirection: "row" }}>
                <Text style={{ ...FONTS.h3, marginLeft: 5, marginRight: 30 }}>
                    {item.name}
                </Text>
                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.h2,
                        position: "absolute",
                        left: 160,
                    }}
                >
                    ${item.price}
                </Text>
            </View>
            {/* Description */}

            <View style={{ marginTop: 20 }}>
                <Text style={{ marginLeft: 5, ...FONTS.h4 }}>Description</Text>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>{item.description}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ marginLeft: 5, ...FONTS.h4 }}>Ingredients</Text>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default RecommendationComponent;
