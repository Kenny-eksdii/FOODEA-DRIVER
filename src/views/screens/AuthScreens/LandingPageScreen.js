import { TouchableOpacity, View, StyleSheet } from "react-native"
import { Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import Colors from "../../../utils/Colors";

function LandingPageScreen({navigation}){
  const signInPress = () => {
    navigation.push("LoginScreen");
  }
  const handleSignUpPress = () => {
    navigation.push("SignUpScreen");
  }


  return (  
    <SafeAreaView flex style={styles.topContainer} statusBarColor="rgb(91, 96, 96)">
        <Container style={{flex: 1,backgroundColor: '#FAFAFA'}} center padding={20}>

        <View style = {styles.midContainer}>
            <Text color={Colors.black} size={21} center>Get Started at</Text>
            <Text color={Colors.primary} size={40} weight='bold' center>FOODEA</Text>
            <Text center size={15} weight="light" color={Colors.black} style={{marginBottom: 50}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus tempor praesentr malesuada.
        </Text>
        </View>
        <View style = {styles.button}>
            <Button
                onPress={signInPress}
                title="Sign In" 
            />
        </View>
            <TouchableOpacity onPress={handleSignUpPress}>
                <Text style={{marginTop: 10}} color='#000' center weight='medium' size={16}>Don't have an account? <Text style={{marginTop: 10}} color='#EA4D4E' center weight='bold' size={16}>Sign Up</Text></Text>
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
    paddingBottom: 400,
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