import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import React, { useState, useContext, useEffect } from 'react'
import {Button,} from '../../components/FoodeaComponents'
import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData,
    images,
  } from "../../../constants";
import { Header } from '../../components/FoodeaComponents';
import OrderContext from '../../../api/context/Orders/OrderContext';


const UserOrderDetails = ({ navigation }) => {

    const { getOrders, details } = useContext(OrderContext);

    useEffect(() => {
      getOrders();
    }, []);

    
function renderHeader() {
    return (
        <Header
            containerStyle={{
            height: 60,
            marginHorizontal:10,
            alignItems: "center",
            marginBottom: 20,
            }}
                title={"ORDER DETAILS"}
                leftComponent={
                // Open Custom Drawer
                    <TouchableOpacity
                        style={{
                        width: 40,
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: COLORS.gray2,
                        borderRadius: SIZES.radius,
                        }}
                        onPress={() => navigation.navigate("OrderDetails")}
                    >
                        <Image source={icons.backarrow}
                            style={{
                                borderRadius: SIZES.radius,
                                color: COLORS.gray2
                            }}
                        />
                    </TouchableOpacity>
                }
        />
    );
}
    
    
function renderCustomer() {
    return (
        <FlatList
            data={details}
            keyExtractor={(item) => `${item.order_id}`}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 1,
                }}>
                  <Image
                    source={{uri: item.product_details.product_image}}
                    style={{ marginTop: 5, height: 80, width: 80 }}
                  />
                  <Text
                    style={{
                      marginLeft: SIZES.padding,
                      ...FONTS.h3,
                    }}
                  >
                    <Text style={{
                      ...FONTS.h2
                    }}>
                      {item.product_details.product_name}
                    </Text>
                    {'\n'}
                    Price: {item.product_details.price}
                    {'\n'}
                    Calories: {item.product_details.calories}    
                  </Text>
                </View>

            )}
          />
        );
      }
    
      return (
        <View style={{
          flex: 1,
          // alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 5
        }}>    
          {/* Header */}
          {renderHeader()}
          {/* Customer */}
          {renderCustomer()}
        </View>
      );
    }
const styles = StyleSheet.create({
    });

export default UserOrderDetails