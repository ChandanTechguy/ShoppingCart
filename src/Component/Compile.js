import React from 'react'
import Navbar from './Navbar'
import Filter from './Filter'
import Products from './Products'
export default function Compile() {
  return (
    <>
      <Navbar/>
      <Filter/>
      <Products/>
    </>
  )
}