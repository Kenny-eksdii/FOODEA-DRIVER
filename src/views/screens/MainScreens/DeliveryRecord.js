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

    const { totalPrice, order } = useContext(OrderContext);

    function renderHeader() {
        return (
            <Header
                containerStyle={{
                    height: 80,
                    marginHorizontal: SIZES.padding,
                    alignItems: "center",
                }}
                title={"Delivery Records"}
            />
        );
    }

    function renderTodayStats() {
        return (
            <View style={{
                flex: 1,
                marginLeft: SIZES.radius,
                marginTop: SIZES.padding,
            }}>
                <Text style={{
                    ...FONTS.h3
                }}>
                    TODAY'S STATISTICS
                </Text>

                {/* Table */}
                <View style={{
                    height: 100,
                    width: 370,
                    backgroundColor: COLORS.white,
                    borderRadius: SIZES.radius,
                    elevation: 5,
                }}>
                    <View style={{
                        marginLeft: SIZES.base,
                        marginTop: SIZES.base,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            color: COLORS.gray,
                            fontWeight: 'bold',
                        }}>
                            ORDER
                        </Text>
                        <Text style={{
                            color: COLORS.gray,
                            fontWeight: 'bold',
                            marginRight: 10,
                        }}>
                            TOTAL
                        </Text>
                    </View>

                    <View style={{
                        marginLeft: SIZES.base,
                        flexDirection: 'row',
                        justifyContent: 'space-between',

                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                        }}>
                            {/* {item.product_details.product_name} */}{order.restaurant_details.business_name}
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            marginRight: 10,
                        }}>
                            {/* {item.product_details.price} */}
                            {totalPrice}
                        </Text>
                    </View>

                    {/* <View style={{
                        marginLeft: SIZES.base,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                        }}>
                            ₱ 160. 00
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            marginRight: 10,
                        }}>
                            3
                        </Text>
                    </View>

                    <View style={{
                        marginLeft: SIZES.base,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                        }}>
                            {item.product_details.price}
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            marginRight: 10,
                        }}>
                            3
                        </Text>
                    </View> */}
                </View>


                {/* TOTAL STATISTICS FOR DAY, WEEK, MONTH */}
                {/* {renderTotalStats()} */}
            </View>
        )
    }

    // function renderTotalStats() {
    //     return (
    //         <View style={{
    //             flex: 1,
    //             marginTop: SIZES.radius,
    //         }}>
    //             <Text style={{
    //                 ...FONTS.h3
    //             }}>
    //                 TOTAL STATISTICS FOR
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
    //                         EARNINGS
    //                     </Text>
    //                     <Text style={{
    //                         color: COLORS.gray,
    //                         fontWeight: 'bold',
    //                         marginRight: 10,
    //                     }}>
    //                         ORDERS
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
    //                         ₱ 160. 00
    //                     </Text>
    //                     <Text style={{
    //                         fontWeight: 'bold',
    //                         marginRight: 10,
    //                     }}>
    //                         3
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
    //                         ₱ 160. 00
    //                     </Text>
    //                     <Text style={{
    //                         fontWeight: 'bold',
    //                         marginRight: 10,
    //                     }}>
    //                         3
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
    //                         ₱ 160. 00
    //                     </Text>
    //                     <Text style={{
    //                         fontWeight: 'bold',
    //                         marginRight: 10,
    //                     }}>
    //                         3
    //                     </Text>
    //                 </View>
    //             </View>
    //         </View>
    //     )
    // }
    return (
        <View style={{
            flex: 1,
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
                    YOUR EARNING IS
                </Text>
                <Text style={{
                    color: COLORS.primary,
                    ...FONTS.h1
                }}>
                {totalPrice}
                </Text>
            </View>

            {/* TODAY STATS */}
            {renderTodayStats()}
            <View>
                    <Button 
                        onPress={() => navigation.navigate("Orders")}
                        title={'BACK TO MAIN MENU'}
                    />
            </View>

        </View>
    )
}


export default DeliveryRecord;