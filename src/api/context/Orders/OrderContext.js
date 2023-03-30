import React, { useState, createContext } from 'react';
import api from '../../context/auth/api'

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {

    const [orders, setOrders] = useState([]);
    const [OrderDetails, setOrderDetails] = useState([]);
    const [orderId, setOrderId] = useState()
    const [details, setDetails] = useState([]);

    const getOrders = async () => {
        await api()
            .get('orders?status[eq]=Pending')
            .then((response) => {
                setOrders(response.data);
                //console.log(response.data);
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
                setDetails(response.data[0].order_details);
                 console.log(response.data[0].order_details[0].restaurant_details.business_name);
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
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContext
