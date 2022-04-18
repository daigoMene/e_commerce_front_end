import React from 'react'
import ListContainer from '../../common/listContainer/listContainer'
import ProductCard from '../../common/productCard/productCard'

export default function ProductList({ listTitle, list, ...props }) {
  console.log("list", list)
  return (
    <ListContainer listTitle={listTitle}>
      {list?.map(({ image, price, rating, title, ...rest }, index) => {
        return <ProductCard image={image} price={price} rating={rating} title={title} />
      })}
    </ListContainer>
  )
}
