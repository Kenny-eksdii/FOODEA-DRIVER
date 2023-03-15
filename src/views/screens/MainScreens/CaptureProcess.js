import { TouchableOpacity, StyleSheet, View, PermissionsAndroid, Image, Dimensions,} from "react-native"
import { useState, useEffect} from "react"
import { Textbutton, Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import { Camera, CameraType } from 'expo-camera';


const CaptureProcess = ({ navigation }) => {
    const BackToMap = () => {
        navigation.push('MapDirection');
    }
    const GotoProof = () => {
        navigation.push('Proof');
    }

    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
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
        <View padding={10} center style={{backgroundColor: '#FAFAFA'}}>
            <View style={{height: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                    <Button style={{width:'120%'}}
                    onPress={BackToMap}
                    title={'Back'}
                    />
                </View>                          

                <View style={styles.container}>
                    {
                        permission && permission.granted && (
                            <View>
                                <Camera style={styles.camera} type={type}>
                                    <TouchableOpacity onPress={toggleCameraType}>
                                        <Text>Flip Camera</Text>
                                    </TouchableOpacity>
                                </Camera>
                            </View>
                        )
                    }

                </View>
                <View style={{position:'absolute', bottom: 10, width: '100%', justifyContent: 'center', paddingHorizontal: 100,}}>
                    <Button 
                        onPress={GotoProof}
                        title={'Continue'}
                    />
                </View>
                
            </View>
            <View>
            </View>
        </View>
)}
const styles = StyleSheet.create({
    camera: {
        height: 300,
        width: Dimensions.width,
    }

});


export default CaptureProcess