import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity, Modal} from 'react-native';
import { Container, SafeAreaView, Button, } from '../../components/FoodeaComponents'
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  constants,
  dummyData,
  images,
} from "../../../constants";
import React, { useState } from 'react';
import { Header, TextButton, FormInput, IconButton, CheckBox, FormInputCheck } from '../../components/FoodeaComponents';

const Orders = ({ navigation }) => {

  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [isModalOpen, setisModalOpen] = useState(false);
  const handleOrders = () => {
    navigation.push("OrderDetails");
}

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 80,
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
            onPress={() => navigation.goBack()}
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
        <SafeAreaView flex={1} center statusBarColor="rgb(0, 0, 0)">
          <Container style={styles.topContainer} center padding={10}>
            <View style={styles.Status}>
              <Text style={{
                ...FONTS.h1
              }}>WILL YOU ACCEPT THIS ORDER?</Text>
                <View styles={styles.ModalContainer}>
                  <View styles={styles.TextContainer}>
                    <TouchableOpacity onPress={() => setisModalOpen(false)}>
                      <Text style={{
                        ...FONTS.h2
                      }}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleOrders}>
                      <Text style={{
                        ...FONTS.h2
                      }}>OKAY</Text>
                    </TouchableOpacity>
                  </View>
                    
                </View>
            </View>
          </Container>
        </SafeAreaView>  
        


      </Modal>

      {/* Header */}
      {renderHeader()}
      {/* Customer */}
      {renderCustomer()}
      <TouchableOpacity onPress={() => navigation.navigate("DeliveryRecord")}>
        <View>
          <Text style = {{
            ...FONTS.h2
          }}>
            Delivery Record
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  ModalContainer: {
    flex:1,
    backgroundColor: '#FAFAFA',
  },
  TextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default Orders