import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity,} from 'react-native';
import React, { useState } from 'react'
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
import SampleOrders from '../../../constants/SampleOrders';
import { ScrollView } from 'react-native-gesture-handler';


const OrderDetails = ({ navigation }) => {
    
function renderHeader() {
    return (
        <Header
            containerStyle={{
            height: 80,
            marginHorizontal:10,
            alignItems: "center",
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
                        onPress={() => navigation.navigate("Orders")}
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
            data={SampleOrders.OrderDetails}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                  <Image
                    source={images.mcdo}
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
                      {item.name}
                    </Text>
                    {'\n'}
                    {item.price}
                    {'\n'}
                    {item.quantity} pc/s
    
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
          
          <View>
            <View>
              <View style={styles.topContainer} padding={10}>
                <View style={{position:'absolute', bottom: 10, width: '100%', justifyContent: 'center', paddingHorizontal: 100,}}>
                    <View>
                        <Button
                            onPress={() => navigation.navigate("MapDirection")}
                            title="OPEN MAP" 
                        />
                    </View>
                </View>
              </View>
            </View>
          </View>
        </View>

      );
    }
const styles = StyleSheet.create({
    });

export default OrderDetails