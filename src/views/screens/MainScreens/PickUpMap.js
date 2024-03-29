import { View, StyleSheet, TouchableOpacity, Image, Switch, Dimensions, } from 'react-native'
import React, { useState, useEffect, useRef, useContext } from 'react'
import OrderContext from '../../../api/context/Orders/OrderContext';
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
        latitude: 14.7587072,
        longitude: 121.0318848,
    });
    
    const { order } = useContext(OrderContext);

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

// RESTAURANT LOCATION

    const { width, height } = Dimensions.get("window");
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const Pickup_Location = {
        latitude: order?.restaurant_details?.latitude,
        longitude: order?.restaurant_details?.longitude,
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
        const [distance, setDistance] = useState();
        const [time, setTime] = useState();





  return (
        <Container style={styles.topContainer} top padding={3}>
            <View style={{alignSelf:'center', alignItems:'center', borderRadius:5, backgroundColor:'#FAFAFA', width:'100%', paddingVertical:10}}>
                    <Text style={{fontSize:20, fontWeight: 'bold', paddingVertical: 5, marginTop: 5,}} color={Colors.primary}> RESTAURANT LOCATION </Text>
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
                                    <Text> RESTAURANT LOCATION </Text>
                                </Callout>
                            </Marker>
                            { showDirection && (
                            <MapViewDirections
                                origin={my_location}
                                destination={Pickup_Location}
                                apikey={GOOGLE_API_KEY}
                                strokeColor= {Colors.primary}
                                strokeWidth={3}
                                onStart={(params) => {
                                    console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                                }}
                                onReady={result => {
                                    setDistance(result.distance);
                                    setTime(result.duration)
                                    console.log(`Distance: ${result.distance} km`)
                                    console.log(`Duration: ${result.duration} min.`)
                                    // fetchTime(result.distance, result.duration)
                                }}
                                onError={(errorMessage) => {
                                    console.log('GOT AN ERROR');
                                }}
                            />
                            )}
                    </MapView>
                </View>
            </View>
            <View style={{flexDirection:'column', justifyContent:'space-between',}}>
                <View>
                <Text style={{marginTop: 5, backgroundColor:'#FAFAFA', alignSelf:'center', position:'absolute', bottom:60,}} color={Colors.black} center size={20} weight='medium'>Distance: {distance} km</Text>
                </View>
                <View>
                <Text style={{marginTop: 5, backgroundColor:'#FAFAFA', alignSelf:'center', position:'absolute', bottom: 30,}} color={Colors.black} center size={20} weight='medium'>Duration: {Math.floor(time)}mins</Text>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'#EA4D4E', borderRadius:5, position:'absolute', bottom:0, alignSelf:'center',}}
                        onPress={fitMapToPolyline}> 
                            <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'> SHOW ROUTE</Text>
                    </TouchableOpacity>
                </View>
            </View>
                
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