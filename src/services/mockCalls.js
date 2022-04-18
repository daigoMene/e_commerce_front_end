import {api} from './api'
import axios from 'axios';

export const getProductList = async (callBack)  => {
    let responseData = await api.get('/products'); 
    callBack(responseData?.data)   
    // return responseData;
    // console.log('responseData',responseData)
}