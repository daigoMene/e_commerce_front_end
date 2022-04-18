import React, { useEffect } from 'react'
import Home from './widgets/home/home'
import Header from './widgets/header/header'
import Footer from './widgets/footer/footer'
import './main.css'
import { getProductList } from '../services/mockCalls'
import { useDispatch, useSelector } from 'react-redux'
import { updateProductList } from '../action/productAction'

export default function Main() {
    const dispatch = useDispatch();
    const updateStoreWithData = (data) => {
        console.log("data", data)
        dispatch(updateProductList(data))
    }
    getProductList(updateStoreWithData);

    return (
        <div className='main'>
            <Header />
            {true && <Home />}
            <Footer />
        </div>
    )
}
