import { TouchableOpacity, StyleSheet, View, PermissionsAndroid, Image, Dimensions,} from "react-native"
import { useState, useEffect, useRef,} from "react"
import { Textbutton, Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import { Camera, CameraType } from 'expo-camera';
import Colors from "../../../utils/Colors";
import * as MediaLibrary from 'expo-media-library';


const CaptureProcess = ({ navigation }) => {
    const BackToMap = () => {
        navigation.push('MapDirection');
    }
    const GotoProof = () => {
        navigation.push('Proof');
    }
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [image, setImage]=useState(null);
    useEffect (() => {
        const opencamera = async () => {
        await requestPermission();
    };
    opencamera();
    },[])

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
      }


return (
        <View style={{backgroundColor: '#FAFAFA'}}>
            <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width}}>
                {/* <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                    <Button style={{width:'120%'}}
                    onPress={BackToMap}
                    title={'Back'}
                    />
                </View> */}
                <View style={styles.container}>
                    {
                        permission && permission.granted && (
                            <View>
                                {!image ?
                                <Camera style={styles.camera} type={type}>
                                    <TouchableOpacity style={{backgroundColor: '#EA4D4E', position: 'absolute', alignSelf: 'center'}} onPress={toggleCameraType}>
                                        <Text style={{marginTop: 5}} color={Colors.black} center size={20} weight='medium'>Flip Camera</Text>
                                    </TouchableOpacity>
                                </Camera>
                                :
                                <Image source={{uri: image}}/>
                                }
                            </View>
                        )
                    }

                </View>
                <View style={{position:'absolute', bottom: 10, width: '100%', justifyContent: 'center', paddingHorizontal: 100,}}>
                    <Button 
                        onPress={GotoProof}
                        title={'Take Picture'}
                    />
                </View>
                
            </View>
            <View>
            </View>
        </View>
)}
const styles = StyleSheet.create({
    camera: {
        height: '100%',
        width: Dimensions.width,
    },

});


export default CaptureProcess