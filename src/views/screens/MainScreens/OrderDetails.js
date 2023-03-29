import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions} from 'react-native';
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
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Colors from '../../../utils/Colors';


const OrderDetails = ({ navigation }) => {
  const handleMaps = () => {
    navigation.push('PickUpMap');
}
    const { width, height } = Dimensions.get("window");
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const Pickup_Location = {
        latitude: 14.7744064,
        longitude: 121.0461308,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };
    
function renderHeader() {
    return (
        <Header
            containerStyle={{
            height: 60,
            marginHorizontal:10,
            alignItems: "center",
            marginBottom: 20,
            }}
                title={"LOCATION AND DETAILS"}
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
                  justifyContent: 'center',
                  elevation: 1,
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
                    User contact: {item.contact}
                    {'\n'}
                    Amount: {item.Amount}    
                  </Text>
                </View>

            )}
          />
        );
      }

function renderMap() {
  return (
    <View style={styles.mapcontainer}>
      <MapView style={styles.map}
        provider= {PROVIDER_GOOGLE}
        initialRegion= {Pickup_Location}
      >
        <Marker
          coordinate={Pickup_Location}
          pinColor= "gold"
        >
          <Callout>
            <Text> Pick Up Location </Text>
          </Callout>
        </Marker>
      </MapView>
        <TouchableOpacity style={{
          position:'absolute',
          bottom: 0,
          alignSelf:'center',
          backgroundColor:'#EA4D4E',
          borderRadius: 5,
          }}
          onPress={handleMaps}
          > 
          <Text style={{...FONTS.h2}} color={Colors.black}>OPEN MAP</Text>
        </TouchableOpacity>
    </View>
  )
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
          <View style={{flexDirection:'column'}}>
                    <Button
                        style={{top: -15, width:'50%', alignSelf:'center'}}
                        title={'View Orders'}
                      />
                  </View>
          </View>
          {/* Map */}
          {renderMap()}
              {/* <View padding={20}>
                <View style={{ bottom: 0, width: '100%', justifyContent: 'center',}}>
                  <Button
                    onPress={() => navigation.navigate("MapDirection")}
                    title="View Drop Off Location" 
                  />
                </View>
              </View> */}
            </View>
      );
    }
const styles = StyleSheet.create({
  mapcontainer: {
    bottom: 10,
    position: 'relative',
    
  },
  map: {
    width: Dimensions.get('window').width,
    height: '70%',
  },
    });

export default OrderDetails