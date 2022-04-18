import React from 'react'
import './productCard.css'

export default function ProductCard({ image, price, rating, title, ...props }) {
  return (
    <div>
      <div className='prodImage'>
        <img src={image}></img>
      </div>
      <div>
        <div className='labels'>{title}</div>
        <div className='labels'>{price}</div>
        <div className='labels'>{rating.rate}</div>
      </div>
    </div>
  )
}
