import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Modal,} from 'react-native';
import { Container, Button, } from '../../components/FoodeaComponents'
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
} from "../../../constants";
import React, { useState, useContext, useEffect } from 'react';
import OrderContext from '../../../api/context/Orders/OrderContext';
import { Header } from '../../components/FoodeaComponents';



const Orders = ({ navigation }) => {

  const [count, setCount] = useState(0);
  const [isModalOpen, setisModalOpen] = useState(false);
  const { 
        getOrders, 
        orders, 
        setOrderId,
        selectedCategoryId,
        setSelectedCategoryId,
        setOrder,
        setNewOrderId,
        acceptedStatus,
    } = useContext(OrderContext);

    useEffect(() => {
      getOrders();
      const interval = setInterval(() => {
        getOrders();
        setCount(count => count + 1);
      }, 5000);
      console.log(count)
  
      return () => clearInterval(interval);
      
    }, []);

    const onOrderPress = (item) => {
        const { order_key } = item;

        setSelectedCategoryId(order_key);
        setOrder(item.order_details[0]);
        setNewOrderId(item.order_details[0].order_id)
        console.log(item.order_details[0].order_id)
        setisModalOpen(true);
    }



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

  function renderCustomer() {
    return (
      <FlatList
        data={orders}
        keyExtractor={(item) => `${item.order_key}`}
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
                selectedCategoryId == item.order_key
                  ? "#F54748"
                  : COLORS.lightGray2,
            }}
            onPress={() => onOrderPress(item)}
          >
            <View style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <Image
                source={{uri: item.order_details[0].restaurant_details.documents.logo}}
                style={{ marginTop: 5, height: 80, width: 80 }}
              />
              <Text
                style={{
                  marginLeft: SIZES.padding,
                  color:
                    selectedCategoryId == item.order_key ? COLORS.white : COLORS.black,
                  ...FONTS.h3,
                }}
              >
                <Text style={{
                  ...FONTS.h2
                }}>
                {item.order_details[0].restaurant_details.business_name}
                </Text>
                {'\n'}
                {item.order_details[0].restaurant_details.address}
                {/* {'\n'}
                user Contact: {item.order_details[0].user_details.contact_number} */}
                {'\n'}
                Amount : {item.order_totalPrice - 50}


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
                color: '#FAFAFA',
                alignSelf: 'center'
                }}>ACCEPT THIS ORDER?
              </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', bottom:10, flex:1, paddingHorizontal:10,}}>
                  <Button style={{alignSelf: 'center'}}
                    onPress={() => {
                      navigation.navigate("OrderDetails");
                      console.log(selectedCategoryId)
                      setOrderId(selectedCategoryId)
                      setisModalOpen(false);
                      acceptedStatus();
                    }}
                    title={'ACCEPT'}
                  />
                  <Button style={{alignSelf: 'center'}}
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
    backgroundColor: '#000',
    width: '100%',
    height: '15%'
  },
});

export default Orders