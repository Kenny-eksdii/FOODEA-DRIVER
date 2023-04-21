import { TouchableOpacity, View, StyleSheet, Alert, Linking, Image } from "react-native"
import { Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import Colors from "../../../utils/Colors";
import {
  icons,
  FONTS,
  SIZES,
} from "../../../constants";


const mainURL = "https://foodea-website.herokuapp.com/rider_landing";

function LandingPageScreen({navigation}){
  const signInPress = () => {
    navigation.push("LoginScreen");
  }
  const handleSignUpPress = () => {
    navigation.push("SignUpScreen");
  }

  const openURL = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
        await Linking.openURL(url);
    } else {
        Alert.alert ('Dont know how to open this URL: ${url}');
    }
}


  return (  
  <SafeAreaView flex style={styles.topContainer} statusBarColor="rgb(91, 96, 96)">
    <Container style={{flex: 1,backgroundColor: '#FFF'}} center padding={20}>

        <View style = {styles.midContainer}>
            <Text color={Colors.black} size={21} center>Get Started at</Text>
            <Text color={Colors.primary} size={40} weight='bold' center>FOODEA DELIVERY</Text>
            <Text center size={15} weight="light" color={Colors.black} style={{marginBottom: 50}}>
            "Bringing convenience and flavor to your life, one meal at a time."
            </Text>
            <View>
              <View>
                <Image
                  source={icons.sample_logo}
                  resizeMode="contain"
                  style={{
                  // backgroundColor:'#000',
                  height: 300,
                  alignSelf:'center',
                  width: 500,
                  }}
                />
                <Image
                source={icons.rider_logo}
                resizeMode="contain"
                style={{
                    position:'absolute',
                    bottom: -25,
                    height: '60%',
                    width: '100%',
                }}
            />
              </View>
            </View>
        </View>
        <View style = {styles.button}>
            <Button
                onPress={signInPress}
                title="Log in" 
            />
        </View>
            <TouchableOpacity onPress={() => {openURL(mainURL)}}>
                <Text style={{marginTop: 10}} color='#000' center weight='medium' size={16}>Don't have an account? <Text style={{marginTop: 10}} color='#EA4D4E' center weight='bold' size={16}> Register</Text></Text>
            </TouchableOpacity>

         </Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#9a1618'
  },
  button: {
    marginTop: 2,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#000',
    borderRadius: 15,
  },
  midContainer : {
    paddingBottom: 150,
  },Button: {
        backgroundColor:'#00000',
        width: "100%",
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
  }, buttonText: {
    fontWeight: '600'
  }
});

export default LandingPageScreen