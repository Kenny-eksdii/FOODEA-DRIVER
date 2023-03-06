import { TouchableOpacity, StyleSheet, View, PermissionsAndroid, Image} from "react-native"
import { Textbutton, Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'


const Camera = ({ navigation }) => {
    const BackToMap = () => {
        navigation.push('MapDirection');
    }
    const GotoProof = () => {
        navigation.push('Proof');
    }

    // const [cameraPhoto, setCameraPhoto] = useState();

    // let options = {
    //     saveToPhotos : true,
    //     mediaType: 'photo',
    // };

    // const opencamera = async () => {
    //     const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS,
    //     );
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         const result = await launchCamera();
    //         setCameraPhoto(result.assets[0].uri);
    //     }
    // };


return (
        <View padding={10} center style={{backgroundColor: '#FAFAFA'}}>
            <View style={{height: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                    <Button style={{width:'120%'}}
                    onPress={BackToMap}
                    title={'Back'}
                    />
                </View>
                    <Text center style={{fontSize:20, fontWeight:'bold'}}> This is the Camera</Text>
                    <Text center style={{fontSize:20, fontWeight:'bold'}}> WILL OPEN CAMERA</Text>
                <View style={{position:'absolute', bottom: 10, width: '100%', justifyContent: 'center', paddingHorizontal: 100,}}>
                    <Button 
                        onPress={GotoProof}
                        title={'Send'}
                    />
                </View>
                
            </View>
            <View>
                {/* <TouchableOpacity onPress={opencamera}>
                    <Text>OPEN CAMERA</Text>
                </TouchableOpacity> */}
            </View>

            {/* <View>
                <Image source={ {uri: cameraPhoto} } />
            </View> */}

        </View>
)}


export default Camera