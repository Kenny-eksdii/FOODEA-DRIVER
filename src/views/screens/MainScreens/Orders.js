import { SafeAreaView, StyleSheet, Switch, Text, View, TextInput, Button, Image} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [switchValue, setswitchValue] = useState(false);
  const toggleSwitch = (value) => {
    setswitchValue(value);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.mainHeader}>
            <View style={{width:45, height: 45, backgroundColor: 'gray', borderRadius: 22.5,}}></View>
          </View>
          <View style={styles.InputContainer}>
            <TextInput 
              style={styles.inputText} 
              placeholder= 'Filter the Results!' 
              onChangeText={""}/>
          </View>
          <View style={styles.contentsBoooking}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Suggestion</Text>
              <Switch 
                onValueChange={toggleSwitch}
                value={switchValue}
                trackColor={{false: "#D9D9D9", true: "#f99293"}}
                thumbColor={switchValue ? "#f00d0e" : "#f99293"}
              />
          </View>
          {/* <View style={styles.valueSwitch}>
            <Text style={{fontWeight: 'bold'}}>{switchValue ? '"You are Online"' : '"You are Offline"'}</Text>
          </View> */}

          { switchValue == false?
          <View style={styles.valueSwitch}>
            <Text style={{fontWeight: 'bold'}}>"You're offline"</Text>
          </View>
          :
          <View>
            <View style={styles.valueSwitchOnline}>
              <Image style={{width: 150, height: 150,}} source={require('./assets/rednavimage.png')} />
                <View>
                  <Text style={{marginVertical:20, fontWeight: 'bold', fontSize: 16}}>Mc Kevin Gozon</Text>
                  <Button color="#F54748" title='The Order Details'/>
                </View>
            </View>
            <View style={styles.valueSwitchOnline}>
              <Image style={{width: 150, height: 150,}} source={require('./assets/rednavimage.png')} />
                <View>
                  <Text style={{marginVertical:20, fontWeight: 'bold', fontSize: 16}}>Mc Kevin Gozon</Text>
                  <Button color="#F54748" title='The Order Details'/>
                </View> 
          </View>
          <View style={styles.valueSwitchOnline}>
              <Image style={{width: 150, height: 150,}} source={require('./assets/rednavimage.png')} />
                <View>
                  <Text style={{marginVertical:20, fontWeight: 'bold', fontSize: 16}}>Mc Kevin Gozon</Text>
                  <Button color="#F54748" title='The Order Details'/>
                </View>
          </View>
        </View>
          }

        </View>
        <View style={styles.todayStats}>
            <Text style={{marginTop: 10, fontSize:16, fontWeight: 'bold'}}>Todays Stats</Text>
          <View style={styles.todayStatsContents}>
            <Text>Earnings</Text>
            <Text>Orders</Text>
          </View>      
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 80,
    paddingHorizontal: 33,
    backgroundColor: '#fff',
  },
  mainHeader: {
    backgroundColor: '#fff',
    marginBottom: 40,  
  },
  InputContainer: {
    marginBottom: 30,
    borderBottomColor: 'red',
    
  },
  inputText: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 12,
    borderRadius: 20,
  },
  contentsBoooking: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  valueSwitch: {
    fontSize: 50,
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
});