import { TouchableOpacity, StyleSheet, View, PermissionsAndroid, Image, Dimensions,} from "react-native"
import { useState, useEffect, useRef, useContext} from "react"
import { Textbutton, Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import { Camera, CameraType } from 'expo-camera';
import Colors from "../../../utils/Colors";
import * as MediaLibrary from 'expo-media-library';
import { RNS3 } from 'react-native-aws3';
import OrderContext from "../../../api/context/Orders/OrderContext";


const CaptureProcess = ({ navigation }) => {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [image, setImage]=useState(null);
    const cameraRef = useRef(null);

    const { selectedCategoryId, order, updateOrderStatus } = useContext(OrderContext);
    // const { }

    useEffect (() => {
        (async () => {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        requestPermission(cameraStatus.status === 'granted');
        })();
    }, [])
    if (permission === false) {
        return <Text> NO ACCESS TO CAMERA </Text>
    }
    
    const handleRecord = () => {
        saveImage();
        navigation.push('DeliveryRecord');
        updateOrderStatus();
    }

    const saveImage = async () => {
        // const file = {
        //     uri: {image},
        //     name: "image.fileName",
        //     type: "image/jpeg"
        // }
        // const options ={
        //     keyPrefix: "rider_proof/",
        //     bucket: 'foodea-bucket',
        //     region: 'us-east-2',
        //     accessKey: 'AKIAX6FNIXHMUMJMVO3K',
        //     secretKey: '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',
        //     successActionStatus: 201,
        // }
        // RNS3.put (file, options)
        // .then ( (response) => {
        //     console.log(response);
        //     console.log(response.status);
        // })
            

        if (image) {
            try{
                await MediaLibrary.createAssetAsync(image);
                // alert('Picture Send')
                setImage(null);
            } catch(e) {
                console.log(e)
            }
        }
    }

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch (e){
                console.log(e);
            }
        }
    }


return (
        <View style={{backgroundColor: '#FAFAFA'}}>
            <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width}}>
                <View style={styles.container}>
                    {
                    permission && permission.granted && (
                        <View>
                            {!image ?
                                <Camera
                                    style={styles.camera}
                                    type={type}
                                    ref={cameraRef}
                                >
                                    <TouchableOpacity style={{backgroundColor: '#EA4D4E', position: 'absolute', alignSelf: 'center'}}
                                        onPress={() => {
                                            setType(type === CameraType.back? CameraType.front : CameraType.back)
                                        }}
                                    >
                                        <Text
                                            style={{marginTop: 5}}
                                            color={Colors.black} center size={20} weight='medium'
                                        >
                                            Flip Camera
                                        </Text>
                                    </TouchableOpacity>
                                </Camera>
                                :
                                <Image source={{uri: image}} style={styles.camera}/>
                            }
                                <View>
                                    {image ?
                                        <View styles ={{
                                            flexdirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingHorizontal: 10
                                        }}>
                                            <View style={{flexDirection:'row', position:'absolute', bottom: 10, width: '100%', justifyContent: 'space-between', paddingHorizontal: 70,}}>
                                                <Button
                                                    title={"Re-take"}
                                                    onPress={() => setImage(null)}
                                                />
                                                <Button
                                                    title={"Send"}
                                                    onPress={handleRecord}
                                                />
                                            </View>
                                        </View>
                                        :
                                        <View style={{ position:'absolute', bottom: 10, width: '100%', justifyContent: 'center', paddingHorizontal: 100,}}>
                                        <Button
                                            onPress={takePicture}
                                            title={'Take Picture'}
                                        />
                                        </View>
                                    }
                                </View>
                        </View>
                        )
                    }

                </View>
            </View>
        </View>
)}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    camera: {
        height: '100%',
        width: Dimensions.width,
    },

});


export default CaptureProcess