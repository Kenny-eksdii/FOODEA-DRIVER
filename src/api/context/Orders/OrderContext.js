import React, { useState, createContext } from 'react';
import api from '../../context/auth/api'

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {

    const [orders, setOrders] = useState([]);
    const [OrderDetails, setOrderDetails] = useState([]);
    const [orderId, setOrderId] = useState()
    const [details, setDetails] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(1);
    const [order, setOrder] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);


    const getOrders = async () => {
        await api()
            .get('orders?status[eq]=Pending')
            .then((response) => {
                setOrders(response.data);
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    alert('No Internet Access')
                } else {
                    console.log(error)
                    const errData = error.message
                    alert(errData)
                }
            })
    }

    const updateOrderStatus = async () => {

        const { 
            customer_id,
            product_id,
            restaurant_id,
            quantity,
            total,
            payment_type,
            latitude,
            longitude
        } = order;


        let form_data = {
            customer_id,
            product_id,
            order_key: selectedCategoryId,
            restaurant_id,
            quantity,
            total,
            status: "Paid",
            payment_type,
            latitude,
            longitude
        } ;

        await api()
        .put('orders?status[eq]=Pending', form_data)
            .then((response) => {
                /* COde here if succsful */
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    alert('No Internet Access')
                } else {
                    console.log(error)
                    const errData = error.message
                    alert(errData)
                }
            })
    }

    const getOrderDetails = async () => {
        await api()
            .get(`orders?order_key[eq]=${orderId}`)
            .then((response) => {
                let data = response.data[0].order_details;
                let unique_restaurants_temp = [];
                let unique_restaurants = [];

                setTotalPrice(0);

                for (let i = 0; i < data.length; i++) {
                    let restau_name = data[i].restaurant_details.business_name;
                    if(!unique_restaurants_temp.includes(restau_name)){
                        unique_restaurants_temp.push(restau_name);
                        unique_restaurants.push(data[i]);
                    }
                    setTotalPrice(prevPrice => prevPrice + parseFloat(data[i].product_details.price));
                }

                setDetails(data);
                setRestaurants(unique_restaurants);
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    alert('No Internet Access')
                } else {
                    console.log(error)
                    const errData = error.message
                    alert(errData)
                }
            })
    }

    return (
        <OrderContext.Provider
            value={{
                setOrderId,
                getOrders,
                orders,
                setOrderDetails,
                OrderDetails,
                getOrderDetails,
                details,
                selectedCategoryId,
                setSelectedCategoryId,
                order,
                setOrder,
                restaurants,
                updateOrderStatus,
                totalPrice
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContext
