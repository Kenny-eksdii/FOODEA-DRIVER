import { TouchableOpacity, View, StyleSheet } from "react-native"
import { Button, Container, SafeAreaView, Text } from '../../components/FoodeaComponents'
import Colors from "../../../utils/Colors";

const Success = ({navigation}) =>{

    const signInPress = () => {
    navigation.push("LoginScreen");
  }

  return (  
    <SafeAreaView flex style={styles.topContainer} statusBarColor="rgb(0, 0, 0)">
        <Container style={{flex: 1,backgroundColor: '#FAFAFA'}} center padding={20}>

        <View style = {styles.midContainer}>
            <Text color={Colors.primary} size={40} weight='bold' center>CONGRATULATIONS!</Text>
            <Text center size={15} weight="bold" color={Colors.dark} style={{marginBottom: 50}}>
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
    backgroundColor: '#000',
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
  },
        
});

export default Success