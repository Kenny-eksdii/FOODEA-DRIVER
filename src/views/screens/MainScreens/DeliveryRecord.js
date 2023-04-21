import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import { Button } from '../../components/FoodeaComponents';
import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData,
    images,
} from "../../../constants";
import { Header, TextButton, FormInput, IconButton, CheckBox, FormInputCheck } from '../../components/FoodeaComponents';
import OrderContext from '../../../api/context/Orders/OrderContext';

const DeliveryRecord = ({ navigation }) => {

    const { getOrders, 
            orders,
        } = useContext(OrderContext);

    function renderHeader() {
        return (
            <Header
                containerStyle={{
                    height: 80,
                    marginHorizontal: SIZES.padding,
                    alignItems: "center",
                }}
                title={"Delivery Status"}
            />
        );
    }

    // function renderTodayStats() {
    //     return (
    //         <View style={{
    //             flex: 1,
    //             marginLeft: SIZES.radius,
    //             marginTop: SIZES.padding,
    //         }}>
    //             <Text style={{
    //                 ...FONTS.h3
    //             }}>
    //                 TODAY'S STATISTICS
    //             </Text>

    //             {/* Table */}
    //             <View style={{
    //                 height: 100,
    //                 width: 370,
    //                 backgroundColor: COLORS.white,
    //                 borderRadius: SIZES.radius,
    //                 elevation: 5,
    //             }}>
    //                 <View style={{
    //                     marginLeft: SIZES.base,
    //                     marginTop: SIZES.base,
    //                     flexDirection: 'row',
    //                     justifyContent: 'space-between',
    //                 }}>
    //                     <Text style={{
    //                         color: COLORS.gray,
    //                         fontWeight: 'bold',
    //                     }}>
    //                         RESTAURANT
    //                     </Text>
    //                     <Text style={{
    //                         color: COLORS.gray,
    //                         fontWeight: 'bold',
    //                         marginRight: 10,
    //                     }}>
    //                         TOTAL
    //                     </Text>
    //                 </View>

    //                 <View style={{
    //                     marginLeft: SIZES.base,
    //                     flexDirection: 'row',
    //                     justifyContent: 'space-between',

    //                 }}>
    //                     <Text style={{
    //                         fontWeight: 'bold',
    //                     }}>
    //                         {/* {orders.order_details[0].restaurant_details.business_name} */}
    //                     </Text>
    //                     <Text style={{
    //                         fontWeight: 'bold',
    //                         marginRight: 10,
    //                     }}>
    //                         {orders.order_totalPrice - 50}
    //                     </Text>
    //                 </View>
    //             </View>
    //         </View>
    //     )
    // }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#FFF'
        }}>
            {/* Header */}
            {renderHeader()}
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 150,
                marginTop: 50,
            }}>
                <Text style={{
                    ...FONTS.h1
                }}>
                Succesfully Delivered
                </Text>
                {/* <Text style={{
                    color: COLORS.primary,
                    ...FONTS.h1
                }}>
                {orders.order_totalPrice}
                </Text> */}
                <View>
                    <Image
                        source={icons.sample_logo}
                        // resizeMode="contain"
                        style={{
                            // backgroundColor:'#000',
                            height: 400,
                            alignSelf:'center',
                            width: 400,
                        }}
                    />
                    <Image
                        source={icons.rider_logo}
                        // resizeMode="contain"
                        style={{
                            position:'absolute',
                            bottom: -100,
                            height: 300,
                            width: 400,
                        }}
                    />

                </View>
            </View>

            {/* TODAY STATS */}
            {/* {renderTodayStats()} */}
            <View>
                    <Button 
                        onPress={() =>
                            {
                                getOrders();
                                // updateOrderStatus();
                                navigation.navigate("Orders");
                            }
                        }
                        title={'BACK TO MAIN MENU'}
                    />
            </View>

        </View>
    )
}


export default DeliveryRecord;