import React, { Component } from 'react'
import './home.css'
import LargeAdd from '../largeAdd/largeAdd'
import Navigation from '../../common/navigation/navigation'
import ProductLists from '../productLists/productLists'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <LargeAdd />
                <ProductLists />
            </div>
        )
    }
}
