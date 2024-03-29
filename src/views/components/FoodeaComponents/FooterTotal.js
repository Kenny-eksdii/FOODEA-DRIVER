import React from "react";
import {
    View,
    Text,
    Platform
} from 'react-native';

import LineDivider from "./LineDivider";
import TextButton from "./TextButton";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../../constants";

const FooterTotal = ({ subTotal, shippingFee, total, onPress }) => {
    return (
        <View>

            {/* Order Details */}
            <View style={{
                padding: SIZES.padding,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: COLORS.lightGray2,
            }}>

                {/* Sub Total */}
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={{ flex: 1, ...FONTS.h3 }}>
                        Sub Total
                    </Text>
                    <Text style={{ ...FONTS.h3 }}>
                        ${subTotal.toFixed(2)}
                    </Text>
                </View>

                {/* Shipping Fee */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.base,
                    marginBottom: SIZES.padding,
                }}>
                    <Text style={{ flex: 1, ...FONTS.h3 }}>
                        Shipping Fee
                    </Text>
                    <Text style={{ ...FONTS.h3 }}>
                        ${shippingFee.toFixed(2)}
                    </Text>
                </View>

                {/* Line Divider */}
                <LineDivider />

                {/* Total */}
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding }}>
                    <Text style={{ flex: 1, ...FONTS.h2 }}>
                        Total
                    </Text>
                    <Text style={{ ...FONTS.h2 }}>
                        ${total.toFixed(2)}
                    </Text>
                </View>

                {/* Button */}
                <TextButton
                buttonContainerStyle={{
                    height: 60,
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary
                }}
                label="Place your order"
                onPress={onPress}
                />
            </View>
        </View>
    )
}

export default FooterTotal;