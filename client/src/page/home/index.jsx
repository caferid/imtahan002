import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import Product from '../../components/products'
import Header from '../../components/header'
function Home() {
  return (
    <div>
        <Helmet>
            <title>
                Home
            </title>
        </Helmet>
        <>
        <Header></Header>
        <Product></Product>
        </>
        
    </div>
  )
}

export default Home