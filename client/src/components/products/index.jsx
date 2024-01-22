import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'

function Product() {
    const [product, setproduct] = useState([])

    const alldata = async () => {
        const res = await axios.get('http://localhost:3000/')
        const data = res.data.data
        setproduct(data)
    }
    useEffect(() => {
      alldata()
    }, [])
    

    return (
        <div id='product'>
            {product && product.map((item)=>(
                <div key={item._id} className="bigbox">
                    <div className="pimg">
                        <img src={item.psrc} alt="" />
                    </div>
                    <div className="ptext">
                        <div className="pname">
                            {item.pname}
                        </div>
                        <div className="pinfo">
                            {item.pinfo}
                        </div>
                    </div>
                    <div className="ubox">
                        <div className="left">
                            <div className="usrc">
                                <img src={item.usrc} alt="" />
                            </div>
                            <div className="tex">
                                <div className="uname">{item.uname}</div>
                                <div className="uinfo">{item.uinfo}</div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="icon">
                            <i className="fa-solid fa-basket-shopping"></i>
                            <i className="fa-regular fa-heart"></i>
                            </div>
                            <div className="uprice">
                               $ {item.uprice}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Product