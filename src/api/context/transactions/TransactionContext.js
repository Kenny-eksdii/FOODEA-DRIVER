import React, { useState, createContext } from 'react';
import api from '../../context/auth/api'

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {

    const [transactions, setTransactions] = useState([]);


    const getTransactions = async () => {
        await api()
            .get('transactions')
            .then((response) => {
                setTransactions(response.data);
                // console.log(response.data);
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
        <TransactionContext.Provider
            value={{
                getTransactions,
                transactions,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContext
