import { TouchableOpacity, StyleSheet, View, PermissionsAndroid, Image} from "react-native"
import { Textbutton, Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import images from '../../../utils/image'
import {
    FONTS,
  } from "../../../constants";

const Proof = ({ navigation }) => {
    const BackToHome = () => {
        navigation.push('TestScreen');
    }


return (
    <SafeAreaView flex={1} statusBarColor="rgb(0, 0, 0)">
        <Container padding={20} center style={{backgroundColor: '#cce7e8'}}>
            <View>
                <View style={styles.imgContainer}>
                    <Text center style={{fontSize:20, fontWeight:'bold', paddingHorizontal: 10, paddingVertical: 10,}}> This is The Proof Of Order Received </Text>
                    <Image center source={images.proof} styles={styles.ProofStyl}/>
                </View>
                
                <TouchableOpacity onPress={() => navigation.navigate("DeliveryRecord")}>
                    <View>
                    <Text style = {{
                        ...FONTS.h2
                    }}>
                        Delivery Record
                    </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </Container>
    </SafeAreaView>
)}

const styles = StyleSheet.create({
    ProofStyl: {
        height:10,
        width:10,
        paddingVertical:10,
    },
    imgContainer: {
        paddingHorizontal: 1,
        paddingVertical: 10,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',

    }
});

export default Proof