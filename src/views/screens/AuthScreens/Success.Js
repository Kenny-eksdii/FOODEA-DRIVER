import { TouchableOpacity, View, StyleSheet } from "react-native"
import { Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import Colors from "../../../utils/Colors";

function Success({navigation}){
  const signInPress = () => {
    navigation.push("SignUpScreen");
  }


  return (  
    <SafeAreaView flex style={styles.topContainer} statusBarColor="rgb(0, 0, 0)">
        <Container style={{flex: 1,backgroundColor: '#cce7e8'}} center padding={20}>

        <View style = {styles.midContainer}>
            <Text color={Colors.white} size={40} weight='bold' center>CONGRATULATIONS!</Text>
            <Text center size={15} weight="light" color={Colors.dark} style={{marginBottom: 50}}>
            You are all set, you've successfully changed your password!
        </Text>
        </View>
        <View style = {styles.button}>
            <Button
                onPress={signInPress}
                title="Go to Sign In" 
            />
        </View>
        </Container>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#FAFAFA'
  },
  button: {
    marginTop: 2,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  midContainer : {
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

export default Success