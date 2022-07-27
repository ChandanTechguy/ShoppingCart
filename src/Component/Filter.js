import React, { useState } from 'react'
import Records from './products.json'
import { useNavigate } from 'react-router-dom';

export default function Filter() {
   const navigate = useNavigate()
   const record = Records.products
   const [data, setData] = useState(record)



   function filterData(ele1) {
      const filter = record.filter((ele) => {
        // console.log(ele.brand, "matches with", ele1.target.value)
         if (ele.brand === ele1.target.value) {
            return ele;
         }
      })
      setData(filter)


   }
   function filterdData(ele1) {
      const filter = record.filter((ele) => {
        // console.log(ele.category, "matches with", ele1.target.value)
         if (ele.category === ele1.target.value) {
            return ele;
         }
      })
      setData(filter)
   }


   const sortByPrice = () => {
      setData((record) => {
         const dataToSort = [...data]
         dataToSort.sort((a, b) => Number(a.price) - Number(b.price))
         return dataToSort
      })
   }
   const sortByDiscount = () => {
      setData((record) => {
         const dataToSort = [...data]
         dataToSort.sort((a, b) => Number(a.discountPercentage) - Number(b.discountPercentage))
         return dataToSort
      })
   }
   const sortByRating = () => {
      setData((record) => {
         const dataToSort = [...data]
         dataToSort.sort((a, b) => Number(a.rating) - Number(b.rating))
         return dataToSort
      })
   }

   return (
      <>
         <h6><strong>Sort By ~ </strong></h6>
         <h8><strong>Select Brand :</strong></h8>

         <select onChange={filterData} id="selectBox" style={{ width: "200px", height: "30px", borderRadius: "20px" }}>
            <option disabled selected>
               select
            </option>
            {record.map(ele =>
               <option value={ele.brand} className='btn btn-primary'  >{ele.brand}</option>
            )}
         </select>


         <h8> <strong>Category :</strong></h8>
         <select onChange={filterdData}id="selectBox" style={{ width: "200px", height: "30px", borderRadius: "20px" }}>
            <option disabled selected>
               select
            </option>
            {record.map(ele =>
               <option value={ele.category} className='btn btn-primary'>{ele.category}</option>
            )}

         </select>

         <button onClick={sortByPrice}>Price </button>
         <button onClick={sortByDiscount}>Discount</button>
         <button onClick={sortByRating}>Rating</button>
          {data.map(rec => {
            return (
               <div key={data.id}>
                  <img onClick={() => { navigate(`/productDetails/${rec.id}`) }} src={rec.thumbnail} alt={rec.title} />
                  <br />
                  <strong>{rec.title}</strong>

                  <br />
                  <strong>Price:</strong> ${rec.price} <br />
                  <strong>Discount:</strong> {rec.discountPercentage} <br />
                  <strong>Rating :</strong> {rec.rating}
                  <br></br>
                  <button onClick={() => dispatch({type:"ADD" , payload: rec})}>Add To Cart</button>
               </div>
            )
         })}

      </>
   )

}










