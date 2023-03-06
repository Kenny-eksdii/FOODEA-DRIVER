import { TouchableOpacity, StyleSheet, View, PermissionsAndroid, Image} from "react-native"
import { Textbutton, Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import images from '../../../utils/image'
import {
    FONTS,
  } from "../../../constants";

const Proof = ({ navigation }) => {


return (
        <View padding={10} style={{backgroundColor: '#FAFAFA', height: '100%'}}>
            <View style={{backgroundColor: '#FAFAFA', height: '100%', width:'100%',}}>
                <View style={{backgroundColor: '#FAFAFA'}}>
                    <Text center style={{fontSize:20, fontWeight:'bold', paddingHorizontal: 10, paddingVertical: 10,}}> This is The Proof Of Order Received </Text>
                </View>
                <View style={{backgroundColor: '#FAFAFA', height: '90%', width: '100%'}}>
                    <Image source={images.proof} style={{height: '100%', width:'100%', }}/>
                </View>

                <View style={{position:'absolute', bottom: 0, width: '100%', paddingHorizontal:100,}}>
                    <View>
                        <Button
                            onPress={() => navigation.navigate("DeliveryRecord")}
                            title="SEND" 
                        />
                    </View>
                </View>
            </View>
        </View>
)}

const styles = StyleSheet.create({
});

export default Proof