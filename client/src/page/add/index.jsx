import React, { useEffect, useState } from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
function Add() {
////
const deldata=async(id)=>{
  await axios.delete(`http://localhost:3000/${id}`)
  alldata()
}


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
    <div>
      <Helmet>
        <title>
          Add
        </title>
      </Helmet>
      <div id='add'>
        <div className="form">
          <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" />

              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" />

              <label htmlFor="email">Email Address</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
        <div className="inbutbox">
          <input type="text" />
        </div>
        <div className="butons">

        </div>
        <div className="table">
          <table border={1}>
            <thead>
              <tr>
              </tr>
              <th>produc name</th>
              <th>product info</th>
              <th>product img</th>
              <th>product price</th>
              <th>user name</th>
              <th>user info</th>
              <th>user img</th>
              <th>delete</th>
            </thead>
            <tbody>
              { product && product.map((item)=>(
                <tr key={item._id}>
                  <td>{item.pname}</td>
                  <td>{item.pinfo}</td>
                  <td><img src={item.psrc} alt="" /></td>
                  <td>{item.uname}</td>
                  <td>{item.uinfo}</td>
                  <td><img src={item.usrc} alt="" /></td>
                  <td>{item.uprice}</td>
                  <td className='del' onClick={()=>deldata(item._id)}>delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Add