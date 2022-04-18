import React from 'react'
import ProductList from '../productList/productList'
import { useSelector } from 'react-redux'

export default function ProductLists() {
    const list = useSelector(state => state?.productReducer?.poductList);
    return (
        <div>
            <ProductList listTitle={'testList 1'} list={list} />
            <ProductList listTitle={'testList 1'} list={list}/>
            <ProductList listTitle={'testList 1'} list={list}/>
        </div>
    )
}
