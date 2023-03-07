import React from 'react';
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

const DeliveryRecord = ({ navigation }) => {

    function renderHeader() {
        return (
            <Header
                containerStyle={{
                    height: 80,
                    marginHorizontal: SIZES.padding,
                    alignItems: "center",
                }}
                title={"Delivery Records"}
                // leftComponent={
                //     // Open Custom Drawer
                //     <TouchableOpacity
                //         style={{
                //             width: 40,
                //             height: 40,
                //             alignItems: "center",
                //             justifyContent: "center",
                //             borderWidth: 1,
                //             borderColor: COLORS.gray2,
                //             borderRadius: SIZES.radius,
                //         }}
                //         onPress={() => navigation.goBack()}
                //     >
                //         <Image source={icons.backarrow}
                //             style={{
                //                 borderRadius: SIZES.radius,
                //                 color: COLORS.gray2
                //             }} />
                //     </TouchableOpacity>
                // }
                // rightComponent={
                //     <View style={{
                //         width: 40,
                //     }}></View>
                // }
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
                            EARNINGS
                        </Text>
                        <Text style={{
                            color: COLORS.gray,
                            fontWeight: 'bold',
                            marginRight: 10,
                        }}>
                            ORDERS
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
                            ₱ 160. 00
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            marginRight: 10,
                        }}>
                            3
                        </Text>
                    </View>
                </View>


                {/* TOTAL STATISTICS FOR DAY, WEEK, MONTH */}
                {renderTotalStats()}
            </View>
        )
    }

    function renderTotalStats() {
        return (
            <View style={{
                flex: 1,
                marginTop: SIZES.radius,
            }}>
                <Text style={{
                    ...FONTS.h3
                }}>
                    TOTAL STATISTICS FOR
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
                            EARNINGS
                        </Text>
                        <Text style={{
                            color: COLORS.gray,
                            fontWeight: 'bold',
                            marginRight: 10,
                        }}>
                            ORDERS
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
                            ₱ 160. 00
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            marginRight: 10,
                        }}>
                            3
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
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
                    ₱ 160. 00
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