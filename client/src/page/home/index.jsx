import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import Product from '../../components/products'
function Home() {
  return (
    <div>
        <Helmet>
            <title>
                Home
            </title>
        </Helmet>
        <>
        <Product></Product>
        </>
        
    </div>
  )
}

export default Home