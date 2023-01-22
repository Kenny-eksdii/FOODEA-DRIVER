import { View, StyleSheet, } from 'react-native'
import React from 'react'
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'




const TestScreen = ({ navigation }) => {
    const handleStart = () => {
        navigation.push('Orders');
    }
    

  return (
    <SafeAreaView flex statusBarColor="rgb(0, 0, 0)">
        <Container style={styles.topContainer} top padding={20}>
                <View style={styles.Status}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Profile</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Status on/off</Text>    
                </View>

                    <Text style={{fontSize:15, fontWeight:'bold'}}>TODAY STATUS</Text>

                <View style={styles.todayStats}>
                    <View style={styles.testing1}>
                        <Text style={{fontSize:12, fontWeight:'bold'}}>ORDERS</Text>
                                <View style={styles.orders}>
                                    <Text style={{fontSize:12, fontWeight:'bold'}}>1</Text>
                                    <Text style={{fontSize:12, fontWeight:'bold'}}>2</Text>
                                    <Text style={{fontSize:12, fontWeight:'bold'}}>3</Text>
                                </View>

                        <Text style={{fontSize:12, fontWeight:'bold'}}>                                                                    EARNINGS</Text>
                                <View style={styles.earnigns}>
                                    <Text style={{fontSize:12, fontWeight:'bold'}}>P1200</Text>
                                    <Text style={{fontSize:12, fontWeight:'bold'}}>P10000</Text>
                                    <Text style={{fontSize:12, fontWeight:'bold'}}>P1000000</Text>
                                </View>
                    </View>
                        
                </View>
                

                <Text style={{fontSize:15, fontWeight:'bold', marginTop:20}}>TOTAL EARNINGS</Text>
                <View style={styles.earningscontainer}>
                    <View style={styles.testing}>
                        <Text style={{fontSize:12, fontWeight:'bold'}}>EARNINGS</Text>
                        <Text style={{fontSize:10, fontWeight:'bold'}}>P1234</Text>
                    </View>
                    <View style={styles.testing}>
                        <Text style={{fontSize:12, fontWeight:'bold'}}>ORDERS</Text>
                        <Text style={{fontSize:10, fontWeight:'bold'}}>20</Text>
                    </View>
                </View>
                <View style={styles.Map}>
                    <Text> THIS IS THE MAP

                    </Text>

                </View>
                                    <View style = {styles.button}>
                                    <Button 
                                        onPress={handleStart}
                                        title={'START EARNING'}
                                    />
                                    </View>

    
        </Container>
    </SafeAreaView>

    
  )
}

const styles = StyleSheet.create({
    orders:{
        marginTop:20,
        flex:1,
        flexDirection: 'column',
        marginRight:20,
    },
    earnigns:{
        marginTop:20,
        flexDirection: 'column',

    },
    testing:{
        marginTop:1,
        flexDirection:'column',
        justifyContent:'space-between',
        
    },
    testing1:{
        marginTop:1,
        flexDirection:'row',
        flex:1,
    },
    Status:{
        backgroundColor: '#FAFAFA',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        marginBottom:30,
    },
    topContainer: {
        backgroundColor: '#FAFAFA'
    },
      earningscontainer: {
        paddingHorizontal: 15,
        marginTop: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 1,
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 5,
        borderColor: '#F54748',
        borderWidth: 1,
        borderColor: '#F54748',
    },
    Map: {
        paddingHorizontal: 15,
        marginTop: 1,
        marginBottom: 10,
        height: 400,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#F54748',
        borderWidth: 1,
        borderColor: '#F54748',
    },
      todayStats: {
        paddingHorizontal: 15,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
        borderRadius: 10,
        borderColor: '#F54748',
        borderWidth: 1,
        borderColor: '#F54748',
    },
      todayStatsContents: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical:10,
    },
      buttonContainer:{
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    });

export default TestScreen