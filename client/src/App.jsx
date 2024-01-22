import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.scss'
import Mainlayout from './layout/mainLayout';
import Home from './page/home';
import Add from './page/add';
import Wish from './page/wishlist';
import Basket from './page/basket';
import Detail from './page/detail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Mainlayout></Mainlayout>} path='/'>
              <Route element={<Home></Home>} index></Route>
              <Route element={<Add></Add>} path='/add'></Route>
              <Route element={<Wish></Wish>} path='/wish'></Route>
              <Route element={<Basket></Basket>} path='/basket'></Route>
              <Route element={<Detail></Detail>} path='/detail/:id'></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
