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
    <SafeAreaView flex style={styles.container} statusBarColor="rgb(0, 0, 0)">
        <Container style={{flex: 1,backgroundColor: '#cce7e8'}} center padding={20}>

        <View style = {styles.topContainer}>
            <Text color={Colors.white} size={21} center>Get Started at</Text>
            <Text color={Colors.white} size={40} weight='bold' center>FOODEA</Text>
            <Text center size={15} weight="light" color={Colors.dark} style={{marginBottom: 50}}>
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
                <Text style={{marginTop: 10}} color={Colors.dark} center weight='medium' size={16}>Don't have an account? <Text color={Colors.primary}>Sign Up</Text></Text>
            </TouchableOpacity>

        </Container>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA'
  },
  button: {
    marginTop: 2,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  topContainer : {
    paddingBottom: 400,
  }, titleText:{
    fontWeight: '700',
    fontSize: 30,
  }, bottomText: {
    fontWeight: '300',
    fontSize: 16,
  }, paragraphText: {
    textAlign: 'center',
    margin: 30,
    width: "70%"
  }, buttonContainers:{
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center',
  },Button: {
        backgroundColor:'white',
        width: "100%",
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        
  }, ButtonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 2,
  }, buttonText: {
    fontWeight: '600'
  }
});

export default LandingPageScreen