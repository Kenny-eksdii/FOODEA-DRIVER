import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { Container, SafeAreaView, Button } from '../../components/FoodeaComponents'
import React, {useState} from 'react';
import image from "../../../utils/image";

const Orders = ({ navigation }) => {

const  Testmap= () => {
  navigation.push('MapDirection');
}

  return (
    <SafeAreaView flex statusBarColor="rgb(0, 0, 0)">
      <Container flex={1} center padding={20}>
        <View style={styles.container}>
          <View style={styles.mainHeader}></View>
          
          <View style={styles.contentsBoooking}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Available</Text>
          </View>

          <View>
            <View style={styles.valueSwitchOnline}>
              <Image source={image.rednav} style={styles.image} />
                <View>
                  <Text style={{marginVertical:20, fontWeight: 'bold', fontSize: 16}}>Street Name</Text>
                  <Button color="#F54748" title='Accept Orders'/>
                </View>
            </View>
            <View style={styles.valueSwitchOnline}>
            <Image source={image.rednav} style={styles.image} />
                <View>
                  <Text style={{marginVertical:20, fontWeight: 'bold', fontSize: 16}}>Street Name</Text>
                  <Button color="#F54748" title='Accept Orders'/>
                </View> 
          </View>
          <View style={styles.valueSwitchOnline}>
          <Image source={image.rednav} style={styles.image} />
                <View>
                  <Text style={{marginVertical:20, fontWeight: 'bold', fontSize: 16}}>Street Name</Text>
                  <Button color="#F54748" title='Accept Orders'/>
                </View>
          </View>
        </View>
        <View style = {styles.button}>
                <Button
                    onPress={Testmap}
                    title="to Map Direction" 
                />
            </View>

        </View>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    backgroundColor: 'black'
  },
  button: {
    width: '100%',
    roundness:50,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#000',
    borderRadius: 15,
  },
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
  contentsBoooking: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  valueSwitchOnline: {
    flexDirection: 'row',
    height: 80,
    marginBottom:20,
    justifyContent: 'space-around',
    fontSize: 50,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
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

export default Orders