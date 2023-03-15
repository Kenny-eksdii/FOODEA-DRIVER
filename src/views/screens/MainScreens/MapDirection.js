import { View, StyleSheet, TouchableOpacity, Image, Switch, Dimensions, } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Colors from '../../../utils/Colors';

const MapDirection = ({ navigation }) => {
    const GoToCam = () => {
        navigation.push('CaptureProcess');
    }

    const { width, height } = Dimensions.get("window");
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const INITIAL_POSITION = {
        latitude: 14.7719701,
        longitude: 121.0543356,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };
    const Dropoff_Location = {
        latitude: 14.7724448,
        longitude: 121.0526231,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };
    const My_Location = {
        latitude: 14.7732177,
        longitude: 121.0538623,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };
    const Pick_Up_Location ={
        latitude: 14.6034767,
        longitude: 120.9564552,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };



  return (
        <Container style={styles.topContainer} top padding={3}>
                <View style={{alignSelf:'center', alignItems:'center', backgroundColor:'#FAFAFA', width:'100%'}}>
                            <Text style={{fontSize:20, fontWeight: 'bold', paddingVertical: 5, marginTop: 5,}} color={Colors.primary}> DROP OFF LOCATION </Text>
                        </View>
                    <View style={styles.Map}>
                        
                        <View style={styles.mapcontainer}>
                            <MapView style={styles.map}
                            provider= {PROVIDER_GOOGLE}
                            initialRegion= {My_Location}>
                                <Marker coordinate={Dropoff_Location}/>
                            </MapView>
                        </View>
                    </View>
                    <View style = {styles.button}>
                            <Button 
                            onPress={GoToCam}
                            title={'Proceed To Capture Proof'}
                            />
                        </View>
 


        </Container>
    
  )
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: '#FAFAFA'
    },
    Map: {
        marginTop: 10,
        height: '85%',
        width: Dimensions.get.width,
        backgroundColor: '#fff',
        borderColor: '#F54748',
        borderWidth: 1,
    },
    button: {
        width: "100%",
        paddingTop: 20,
        paddingBottom: 2,
        borderRadius: 20,
        borderColor:'#000',
    },
      mapcontainer: {
        flex: 1,
      },
      map: {
        width: Dimensions.get.width,
        height: '100%',
      },
    });

export default MapDirection