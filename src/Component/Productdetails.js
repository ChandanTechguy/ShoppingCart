import React from 'react'
import Records from './Products.json'

export const ProductDetails = () => {
  return (
    <div className='img_div'>
      {Records.products.map(record => {

        return(
          <div>
           <img src= {record.thumbnail} height="300px" width="300px" alt={record.images.title} />
           {record.title}
            {record.description}
            {record.price}
            {record.discountPercentage}
            {record.rating}
            {record.stock}
            {record.brand}
            {record.category}

          </div>
        )
      })}
    </div>
  )
}