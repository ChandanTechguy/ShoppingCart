import React from 'react'
import Records from './products.json'

export default function Products() {
  return (
    <>
      {Records.products.map(records => {
        return (
          <div className='img_div'>
          <div className='purchase-card'>
            <img src={records.thumbnail} alt={records.title} /> <strong>{records.title}</strong> <br />
            <strong>Price :</strong> ${records.price} <br />
            <strong>Discount : </strong>{records.discountPercentage} <br />
            <strong>Rating : </strong>{records.rating}
          </div>
          </div>
        )
      })}
    </>
  )
}
