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
    <SafeAreaView flex={1} statusBarColor="rgb(0, 0, 0)">
        <Container padding={20} center style={{backgroundColor: '#cce7e8'}}>
            <View>
                <View>
                    <Button style={{width:'40%'}}
                    onPress={BackToMap}
                    title={'Back'}
                    />
                </View>
              <Text center style={{fontSize:20, fontWeight:'bold', paddingHorizontal: 10, paddingVertical: 250,}}> This is the Camera</Text>
                
                <Button 
                    onPress={GotoProof}
                    title={'Send'}
                    />
            </View>
            <View>
                {/* <TouchableOpacity onPress={opencamera}>
                    <Text>OPEN CAMERA</Text>
                </TouchableOpacity> */}
            </View>

            {/* <View>
                <Image source={ {uri: cameraPhoto} } />
            </View> */}

        </Container>
    </SafeAreaView>
)}


export default Camera