import React, { useState } from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [ispoen, setispoen] = useState(true)

    return (
        <div id='navbar'>
            <div className="dev">
                <div className="title">
                    <div className="imgbox">
                        <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
                    </div>
                    <p>Course</p>
                </div>
                <div className="links">
                    <NavLink to={'/'}>HOME</NavLink>
                    <Link>about</Link>
                    <Link>conatact</Link>
                    <NavLink to={'/add'}>ADD</NavLink>
                    <NavLink to={'/basket'}>BASKET</NavLink>
                    <NavLink to={'/wish'}>WISH</NavLink>
                </div>
            </div>
            <div className="mobile">
                <div className="title">
                    <div className="imgbox">
                        <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
                    </div>
                    <p>Course</p>
                </div>
                <div className="icon">
                <i onClick={()=>setispoen(!ispoen)} className={`fa-solid fa-${ispoen?'bars':"x"}`}></i>
                </div>
                <div className={`links ${ispoen?'':'open'}`}>
                    <NavLink to={'/'}>HOME</NavLink>
                    <Link>about</Link>
                    <Link>conatact</Link>
                    <NavLink to={'/add'}>ADD</NavLink>
                    <NavLink to={'/basket'}>BASKET</NavLink>
                    <NavLink to={'/wish'}>WISH</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar