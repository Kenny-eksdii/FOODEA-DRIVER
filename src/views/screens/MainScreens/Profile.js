
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, } from 'react-native';
import {
    images,
    constants,
    SIZES,
    COLORS,
    icons,
    FONTS,
} from "../../../constants";
import { Header, TextButton, FormInput, IconButton, CheckBox, FormInputCheck } from '../../components/FoodeaComponents';
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../api/context/auth/AuthContext'
import { Button } from '../../components/FoodeaComponents';


const Profile = ({ navigation }) => {
const { logout, user } = useContext(AuthContext);
// const currentDate = new Date();
// const isoDate = currentDate.toISOString().slice(0, 10);


    function renderHeader() {
        return (
            <Header
                containerStyle={{
                    height: 80,
                    marginHorizontal: SIZES.padding,
                    alignItems: "center",
                }}
                title={"Profile"}
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

    function renderLogo() {
        return (
            <View style={{
                marginTop: SIZES.padding,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: SIZES.padding,
            }}>
                <Image
                    source={{ uri: user.rider_documents.rider_photo}}
                    // source={images.profilepic}
                    // resizeMode="contain"
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#000',

                    }}
                />
                {/* <Text>{user.latitude}</Text> */}
            </View>

        )
    }

    return (
        <View style={{
            flex: 1,
        }}>
            {/* HEADER */}
            {renderHeader()}


            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: SIZES.radius,
                    paddingBottom: SIZES.padding,
                    justifyContent: 'center',
                    marginTop: SIZES.radius
                }}>
                {/* Logo */}
                {renderLogo()}
                {/* First Name */}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: SIZES.padding }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: 'center',
                            height: 50,
                            width: 300,
                            backgroundColor: COLORS.white,
                            borderRadius: SIZES.radius,
                            elevation: 5,
                        }}
                    >
                        <Image
                            source={icons.Name}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.black,
                                position: 'absolute',
                                left: 5,
                                right: 0,
                            }}
                        />
                        <Text style={{ ...FONTS.h3, color: COLORS.black, }}>{user.firstname} {user.middlename} {user.lastname}</Text>
                    </View>

                    {/* Middle Name */}
                    {/* <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: 'center',
                            height: 50,
                            width: 300,
                            backgroundColor: COLORS.white,
                            marginTop: SIZES.base,
                            borderRadius: SIZES.radius,
                            elevation: 5,
                        }}
                    >
                        <Image
                            source={icons.Name}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.black,
                                position: 'absolute',
                                left: 5,
                                right: 0,
                            }}
                        />
                        <Text style={{ ...FONTS.h3, color: COLORS.black, }}>{user.middlename}</Text>
                    </View> */}

                    {/* Last Name */}
                    {/*  */}

                    {/* Email */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: 'center',
                            height: 50,
                            width: 300,
                            backgroundColor: COLORS.white,
                            borderRadius: SIZES.radius,
                            marginTop: SIZES.base,
                            elevation: 5,
                        }}
                    >
                        <Image
                            source={icons.at}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.black,
                                position: 'absolute',
                                left: 5,
                                right: 0,
                            }}
                        />
                        <Text style={{ ...FONTS.h4 }}>{user.email}</Text>
                    </View>

                    {/* Phone Number */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: 'center',
                            height: 50,
                            width: 300,
                            backgroundColor: COLORS.white,
                            borderRadius: SIZES.radius,
                            marginTop: SIZES.base,
                            elevation: 5,
                        }}
                    >
                        <Image
                            source={icons.phone}
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: COLORS.black,
                                position: 'absolute',
                                left: 5,
                                right: 0,
                            }}
                        />
                        <Text style={{ ...FONTS.h3 }}>0{user.mobile_number}</Text>
                    </View>

                    {/* Birthday */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: 'center',
                            height: 50,
                            width: 300,
                            backgroundColor: COLORS.white,
                            borderRadius: SIZES.radius,
                            marginTop: SIZES.base,
                            elevation: 5,
                        }}
                    >
                        <Image
                            source={icons.birthday}
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: COLORS.black,
                                position: 'absolute',
                                left: 5,
                                right: 0,
                            }}
                        />
                        <Text style={{ ...FONTS.h3 }}>{user.birthdate}</Text>
                    </View>

                    {/* age */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: 'center',
                            height: 50,
                            width: 300,
                            backgroundColor: COLORS.white,
                            borderRadius: SIZES.radius,
                            marginTop: SIZES.base,
                            elevation: 5,
                        }}
                    >
                        <Image
                            source={icons.age}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.black,
                                position: 'absolute',
                                left: 5,
                                right: 0,
                            }}
                        />
                        <Text style={{ ...FONTS.h3, color: COLORS.black, }}>{user.age} yrs old</Text>
                    </View>

                    {/* gender */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: 'center',
                            height: 50,
                            width: 300,
                            backgroundColor: COLORS.white,
                            borderRadius: SIZES.radius,
                            marginTop: SIZES.base,
                            elevation: 5,
                        }}
                    >
                        <Image
                            source={icons.gender}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.black,
                                position: 'absolute',
                                left: 5,
                                right: 0,
                            }}
                        />
                        <Text style={{ ...FONTS.h3, color: COLORS.black, }}>{user.gender}</Text>
                    </View>

                    {/* ADDRESS
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: 'center',
                            height: 50,
                            width: 300,
                            backgroundColor: COLORS.white,
                            borderRadius: SIZES.radius,
                            marginTop: SIZES.base,
                            elevation: 5,
                        }}
                    >
                        <Image
                            source={icons.Name}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.black,
                                position: 'absolute',
                                left: 5,
                                right: 0,
                            }}
                        />
                        <Text style={{ ...FONTS.h3, color: COLORS.black, }}>{user.address}</Text>
                    </View> */}

                    
                    
                    
                </View>
            </ScrollView>
            <View style={{ bottom: 10, width:300, justifyContent: 'center', alignSelf: 'center'}}> 
                    <Button
                        onPress={logout}
                        title={'Log Out'}
                    />
                    </View>

        </View>
    )
}

export default Profile;