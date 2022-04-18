import React from 'react'
import './listContainer.css'

export default function ListContainer({ listTitle, children, ...props }) {
    return (
        <div className='listContainer'>
            <div className='listHeader'>{listTitle}</div>
            <div className='productContainer'>
                {children}
            </div>
        </div>
    )
}
