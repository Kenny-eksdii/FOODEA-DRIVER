import { View, StyleSheet, } from 'react-native'
import React from 'react'
import { Container, SafeAreaView, Button, Text } from '../../components/FoodeaComponents'


const TestScreen = () => {

    const StartEarning = () => {
        navigation.push('Orders');
    }

  return (
    <SafeAreaView flex style={styles.mainContainer} statusBarColor="rgb(0, 0, 0)">
        <Container style={{flex: 1,backgroundColor: '#cce7e8'}} center padding={20}>
            <View style = {styles.topContainer}>
                <View style={styles.earningscontainer}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Status</Text>
                        <Switch 
                            onValueChange={toggleSwitch}
                            value={switchValue}
                            trackColor={{false: "#D9D9D9", true: "#f99293"}}
                            thumbColor={switchValue ? "#f00d0e" : "#f99293"}
                        />

                            <View style={styles.todayStats}>
                                <Text style={{marginTop: 10, fontSize:16, fontWeight: 'bold'}}>Todays Stats</Text>
                            </View>

                            <View style={styles.todayStatsContents}>
                                <Text>Earnings</Text>
                                <Text>Orders</Text>
                            </View> 
                        
                </View>
                        { switchValue == false?
                                    <View style={styles.valueSwitch}>
                                    </View>
                                :
                                
                        <View style={styles.buttonContainer}>
                            <Button 
                                onPress={StartEarning}
                                title='Start Earning'
                            />
                        </View>
                        }
    

            </View>
        </Container>
    </SafeAreaView>

    
  )
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: '#FAFAFA'
    },
      earningscontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginBottom: 20,
    },
      valueSwitch: {
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 20,
    },
      valueSwitchOnline: {
        flexDirection: 'row',
        marginBottom:20,
        justifyContent: 'space-around',
        fontSize: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
        // borderWidth: 2,
        elevationColor: 'red',
        elevation: 4,
    },
      todayStats: {
        paddingHorizontal: 15,
        margin: 15,
        height: 130,
        borderRadius: 10,
        borderColor: '#F54748',
        borderWidth: 4,
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
    },Button: {
        backgroundColor:'white',
        width: "100%",
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        },
    });

export default TestScreen