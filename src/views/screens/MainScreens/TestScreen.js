import { View } from 'react-native'
import React, { useContext, useState } from 'react'
import AuthContext from '../../../api/context/auth/AuthContext'
import { Button, Text } from '../../components/FoodeaComponents'
// import { SliderBox } from 'react-native-image-slider-box'
import { ImageSlider } from "react-native-image-slider-banner";
const TEST_IMAGES = [
    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
    {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
    {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
];

const TestScreen = () => {

    const { logout, user } = useContext(AuthContext);


  return (
    <View>
        <Text size={42} weight='bold'>Hello {user.name}</Text>
        <Text size={42} weight='semi-bold'>THIS IS THE MAIN SCREEN </Text>
        <Button 
            onPress={logout}
            title='logout'
        />
        {/* <FoodCarousel /> */}
    </View>
  )
}

export default TestScreen