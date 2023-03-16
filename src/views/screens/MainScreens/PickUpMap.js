import { View, StyleSheet, TouchableOpacity, Image, Switch, Dimensions, } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Colors from '../../../utils/Colors';
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import MapView, { Callout, Circle, LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '../../../../environment';


const PickUpMap = ({ navigation }) => {
    const GoToDropOff = () => {
        navigation.push('MapDirection');
    }
    const [pin, setPin] = React.useState({
        latitude: 14.7744064,
        longitude: 121.0461308,
    });
    

    useEffect(() => {
        (async () => {
          
        let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log("Permission to access location was denied");
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
          console.log(location);

        setPin({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          })
        })();
      }, []);

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
    const my_location = {
        latitude: pin.latitude,
        longitude: pin.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }
    const [showDirection, setshowDirection] = useState(false);
    const map = useRef();
    async function fitMapToPolyline() {
        setshowDirection(true)
        map.current.fitToCoordinates([Pickup_Location, my_location],{
            edgePadding: {
              top: 10,
              right: 20,
              bottom: 10,
              left: 20,
            },
          });
        }



  return (
        <Container style={styles.topContainer} top padding={3}>
            <View style={{alignSelf:'center', alignItems:'center', borderRadius:5, backgroundColor:'#FAFAFA', width:'100%', paddingVertical:10}}>
                    <Text style={{fontSize:20, fontWeight: 'bold', paddingVertical: 5, marginTop: 5,}} color={Colors.primary}> PICK UP LOCATION </Text>
                </View>
            <View style={styles.Map}>
                <View style={styles.mapcontainer}>
                    <MapView style={styles.map}
                        ref={map}
                        provider= {PROVIDER_GOOGLE}
                        initialRegion= {Pickup_Location}
                        showsUserLocation={true}
                        >
                            <Marker
                                coordinate={Pickup_Location}
                                pinColor= "gold"
                            >
                                <Callout>
                                    <Text> Pick Up Location </Text>
                                </Callout>
                            </Marker>
                            { showDirection && (
                            <MapViewDirections
                                origin={my_location}
                                destination={Pickup_Location}
                                apikey={GOOGLE_API_KEY}
                                strokeColor= {Colors.primary}
                                strokeWidth={3}
                            />
                            )}
                    </MapView>
                </View>
            </View>
                <TouchableOpacity style={{position:'absolute', bottom: 100, alignSelf:'center', backgroundColor:'#FAFAFA'}} onPress={fitMapToPolyline}> 
                    <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'> SHOW ROUTE</Text>
                </TouchableOpacity>
                <View style = {styles.button}>
                    <Button 
                        onPress={GoToDropOff}
                        title={'View Drop Off Location'}
                    />
                </View>
        </Container>
    
  )
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: '#FAFAFA',
        height: Dimensions.get('window').height,
    },
    Map: {
        height: '85%',
        width: window.width,
        backgroundColor: '#fff',
        borderColor: '#F54748',
    },
    button: {
        marginTop: 20,
        bottom: 0,
        alignItems: 'center'
    },
      mapcontainer: {
        flex: 1,
      },
      map: {
        width: Dimensions.get('window').width,
        height: '100%',
      },
    });

export default PickUpMap