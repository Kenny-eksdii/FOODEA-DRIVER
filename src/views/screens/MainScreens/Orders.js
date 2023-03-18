import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Modal,} from 'react-native';
import { Container, Button, } from '../../components/FoodeaComponents'
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  constants,
  dummyData,
  images,
} from "../../../constants";
import React, { useState, useContext, useEffect } from 'react';
import TransactionContext from '../../../api/context/transactions/TransactionContext';
import { Header, TextButton, FormInput, IconButton, CheckBox, FormInputCheck } from '../../components/FoodeaComponents';



const Orders = ({ navigation }) => {


  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [isModalOpen, setisModalOpen] = useState(false);
  const { getTransactions, transactions } = useContext(TransactionContext);

    useEffect(() => {
        getTransactions();
    }, []);



  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 60,
          marginHorizontal: SIZES.padding,
          alignItems: "center",
        }}
        title={"Customers"}
        leftComponent={
          // Open Custom Drawer
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.navigate("TestScreen")}
          >
            <Image source={icons.backarrow}
              style={{
                borderRadius: SIZES.radius,
                color: COLORS.gray2
              }} />
          </TouchableOpacity>
        }
        rightComponent={
          <View style={{
            width: 40,
          }}></View>
        }
      />
    );
  }


    //     <FlatList
    //     data={transactions}
    //     keyExtractor={(item) => `${item.transaction_id}`}
    //     showsVerticalScrollIndicator={false}
    //     renderItem={({ item, index }) => (
    //         <Text>{item.order_status}</Text>
    //     )}
    //   />
  function renderCustomer() {
    return (
      <FlatList
        data={dummyData.Details}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: "row",
              height: 100,
              width: 350,
              marginTop: index == 0 ? SIZES.padding : SIZES.radius,
              paddingHorizontal: 8,
              borderRadius: SIZES.radius,
              backgroundColor:
                selectedCategoryId == item.id
                  ? "#F54748"
                  : COLORS.lightGray2,
            }}
            onPress={() => {
              setSelectedCategoryId(item.id);
              setisModalOpen(true);
            }}
          >
            <View style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <Image
                source={images.profilepic}
                style={{ marginTop: 5, height: 80, width: 80 }}
              />
              <Text
                style={{
                  marginLeft: SIZES.padding,
                  color:
                    selectedCategoryId == item.id ? COLORS.white : COLORS.gray,
                  ...FONTS.h3,
                }}
              >
                <Text style={{
                  ...FONTS.h2
                }}>
                  {item.name}
                </Text>
                {'\n'}
                {item.address}
                {'\n'}
                {item.distance} km away

              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      
    );
  }

  return (
    <View style={{
      flex: 1,
      alignItems: "center",
    }}>
        <Modal
          visible={isModalOpen}
          transparent={true}
          animationType='fade'
        >
            <Container style={styles.topContainer} center padding={10}>
              <Text style={{
                ...FONTS.h2,
                marginHorizontal: 85,
                paddingVertical: 20,
                }}>ACCEPT THIS ORDER?
              </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', bottom:10, flex:1, paddingHorizontal:10}}>
                  <Button
                    onPress={() => {
                      navigation.navigate("OrderDetails")
                      setisModalOpen(false);
                    }}
                    title={'ACCEPT'}
                  />
                  <Button
                    onPress={() => setisModalOpen(false)}
                    title={'CANCEL'}
                  />
                </View>
            </Container>  
        </Modal>
      {/* Header */}
      {renderHeader()}
      {/* Customer */}
      {renderCustomer()}
      {/* <TouchableOpacity onPress={() => navigation.navigate("DeliveryRecord")}>
        <View>
          <Text style = {{
            ...FONTS.h2
          }}>
            Delivery Record
          </Text>
        </View>
      </TouchableOpacity> */}

    </View>
  );
}


const styles = StyleSheet.create({
  topContainer: {
    position:'absolute',
    bottom:10,
  },
});

export default Orders