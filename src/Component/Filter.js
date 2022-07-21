import React, { useState } from 'react'
import Records from './products.json'
import { useNavigate } from 'react-router-dom';

export default function Filter() {
   const navigate = useNavigate()
   const record = Records.products
   const [data, setData] = useState(record)

   const sortByPrice = () => {
      setData((record) => {
         const dataToSort = [...record]
         dataToSort.sort((a, b) => Number(a.price) - Number(b.price))
         return dataToSort
      })
   }
   const sortByDiscount = () => {
      setData((record) => {
         const dataToSort = [...record]
         dataToSort.sort((a, b) => Number(a.discountPercentage) - Number(b.discountPercentage))
         return dataToSort
      })
   }
   const sortByRating = () => {
      setData((record) => {
         const dataToSort = [...record]
         dataToSort.sort((a, b) => Number(a.rating) - Number(b.rating))
         return dataToSort
      })
   }

   return (
      <>
         <h4>Sort By:</h4>
         <h8>Select Brand :</h8>
         <select style={{ width: "200px", height: "20px", borderRadius: "10px" }}>
            <option disabled selected>
               select
            </option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Oppo</option>
            <option>Vivo</option>
            <option>real-me</option>
            <option>Poco</option>
         </select>


         <h8>Category :</h8>
         <select style={{ width: "200px", height: "20px", borderRadius: "10px" }}>
            <option disabled selected>
               select
            </option>
            <option >smartphones</option>
            <option>laptops</option>
            <option>fragrances</option>
            <option>skincare</option>
            <option>groceries</option>
            <option>home-decoration</option>
         </select>
         <button onClick={sortByPrice}>Price</button>
         <button onClick={sortByDiscount}>Discount</button>
         <button onClick={sortByRating}>Rating</button>
         {data.map(rec => {
            return (
               <div key={data.id}>
                  <img onClick={() => { navigate(`/productDetails/${rec.id}`) }} src={rec.thumbnail} alt={rec.title} />
                  <br />
                  {rec.title}

                  <br />
                  Price: ${rec.price} <br />
                  Discount: {rec.discountPercentage} <br />
                  Rating : {rec.rating}
               </div>
            )
         })}

      </>
   )

}