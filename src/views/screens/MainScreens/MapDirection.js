import { View, StyleSheet, TouchableOpacity, Image, Switch, Dimensions, } from 'react-native'
import React, { useState, useEffect, useRef} from 'react'
import { TextInput } from 'react-native-paper';
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'
import MapView, { Callout, Circle, LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '../../../../environment';
import Colors from '../../../utils/Colors';

const MapDirection = ({ navigation }) => {
    const GoToCam = () => {
        navigation.push('CaptureProcess');
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
    const Dropoff_Location = {
        latitude: 14.775072,
        longitude: 121.056516,
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
        map.current.fitToCoordinates([Dropoff_Location, my_location],{
            edgePadding: {
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            },
          });
        }



  return (
        <Container style={styles.topContainer} top padding={3}>
                <View style={{alignSelf:'center', alignItems:'center', backgroundColor:'#FAFAFA', width:'100%'}}>
                            <Text style={{fontSize:20, fontWeight: 'bold', paddingVertical: 5, marginTop: 5,}} color={Colors.primary}> DROP OFF LOCATION </Text>
                        </View>
                    <View style={styles.Map}>
                        
                        <View style={styles.mapcontainer}>
                            <MapView style={styles.map}
                                ref={map}
                                provider= {PROVIDER_GOOGLE}
                                initialRegion= {Dropoff_Location}
                                showsUserLocation={true}>
                                    <Marker coordinate={Dropoff_Location} pinColor= "gold">
                                        <Callout>
                                            <Text> Pick Up Location </Text>
                                        </Callout>
                                    </Marker>
                                { showDirection && (
                                <MapViewDirections
                                    origin={my_location}
                                    destination={Dropoff_Location}
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
        width: Dimensions.get('window').width,
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
        width: Dimensions.get('window').width,
        height: '100%',
      },
    });

export default MapDirection