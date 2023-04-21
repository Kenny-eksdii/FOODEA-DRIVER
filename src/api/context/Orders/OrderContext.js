import React, { useState, createContext } from 'react';
import api from '../../context/auth/api'
import { useContext } from 'react';
import AuthContext from '../auth/AuthContext';
import axios from 'axios';

const OrderContext = createContext();


export const OrderProvider = ({ children }) => {

    const {userID} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [OrderDetails, setOrderDetails] = useState([]);
    const [orderId, setOrderId] = useState()
    const [details, setDetails] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(1);
    const [order, setOrder] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [newOrderID, setNewOrderId] = useState(0);
    // const currentDate = new Date().toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const currentDate = new Date();
    const isoDate = currentDate.toISOString().slice(0, 10);

    const getOrders = async () => {
        await api()
            // .get('orders?status[eq]=Pending')
            .get(`orders?status[eq]=Ready for pick up&date[eq]=${isoDate}&rider_id=${userID}` )
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
    const acceptedStatus = async () => {

        const {
            order_id,
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
            order_id: newOrderID,
            customer_id,
            product_id,
            merchant_id: restaurant_id,
            order_key: selectedCategoryId,
            restaurant_id,
            quantity,
            total,
            status: "Delivering",
            payment_type,
            latitude,
            longitude
        } ;


        for( let i = 0 ; i < details.length ; i++) {
            const response = await axios.patch(`https://foodea-website.herokuapp.com/api/v1/orders/${details[i].order_id}`, {
               status: "delivering",
            })
           console.log(response.data);
       }
    }

    // const cancelledStatus = async () => {
    //     for( let i = 0 ; i < details.length ; i++) {
    //         const response = await axios.patch(`https://foodea-website.herokuapp.com/api/v1/orders/${details[i].order_id}`, {
    //            status: "Preparing",
    //         })
    //        console.log(response.data);
    //    }
    // }

    const updateOrderStatus = async () => {

        const {
            order_id,
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
            order_id: newOrderID,
            customer_id,
            product_id,
            merchant_id: restaurant_id,
            order_key: selectedCategoryId,
            restaurant_id,
            quantity,
            total,
            status: "Delivered",
            payment_type,
            latitude,
            longitude
        } ;

        // patchTable();
        // const patchTable = async () => {
            
        // }
        for( let i = 0 ; i < details.length ; i++) {
             const response = await axios.patch(`https://foodea-website.herokuapp.com/api/v1/orders/${details[i].order_id}`, {
                status: "Delivered",
             })
            console.log(response.data);
        }
        //console.log("asdad"+orders.length);

        // await api()
        // .patch(`orders/${order_id}`, form_data)
        //     .then((response) => {
        //         /* COde here if succsful */
        //         console.log(`orders/${order_id}`);
        //     })
        //     .catch((error) => {
        //         if (error.message === 'Network Error') {
        //             alert('No Internet Access')
        //         } else {
        //             console.log(`orders/${order_id}`);
        //             console.log(order_id,
        //                 customer_id,
        //                 product_id,
        //                 restaurant_id,
        //                 quantity,
        //                 total,
        //                 payment_type,
        //                 latitude,
        //                 longitude)
        //             console.log(error)
        //             const errData = error.message
        //             alert(errData)
        //         }
        //     })

        await api()
        .post(`transactions`,
                {order_key: orderId,
                merchant_id: restaurant_id,
                customer_id: customer_id,
                rider_id: 14,
                product_id: product_id,
                order_status: "Delivered"},)

            .then((response) => {
                /* COde here if succsful */
                console.log(response.data);
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
                setDetails([]);
                setRestaurants([]);

                console.log(`orders?order_key[eq]=${orderId}`)
                
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
                acceptedStatus,
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
                totalPrice,
                setNewOrderId,
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContext
