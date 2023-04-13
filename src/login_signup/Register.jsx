import React from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
  from 'mdb-react-ui-kit';

import Navbar from '../Navbar';
import Footer from '../Footer';
import Subfooter from '../Subfooter';
import { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom"

const App = () => {
  const navigate = useNavigate();
  // const history = useHistory()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = () => {
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && (password === reEnterPassword)) {
      axios.post("http://localhost:3002/register", user)
        .then(res => {
          alert(res.data.message)
          navigate.push("/login")
        })
    } else if (name == "") {
      alert("Please Enter Your Name")
    } else if (email == "") {
      alert("Please Enter Your Email")
    } else if (password == "") {
      alert("Please Enter Your Password")
    } else if (password != reEnterPassword) {
      alert("Your password does not match with your re-entered-password")
    } else {
      alert("invlid input")
    }

  }

  return (
    <>
      <Navbar />

      <MDBContainer fluid className='p-4'>

        <MDBRow>

          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              The best offer <br />
              <span className="text-primary">for your business</span>
            </h1>

            <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet, itaque accusantium odio, soluta, corrupti aliquam
              quibusdam tempora at cupiditate quis eum maiores libero
              veritatis? Dicta facilis sint aliquid ipsum atque?
            </p>

          </MDBCol>

          <MDBCol md='6'>

            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>


                <MDBInput type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange} wrapperClass='mb-4' label='Your Name' id='form1' />
                <MDBInput type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange} wrapperClass='mb-4' label='Email' id='form1' />

                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange} wrapperClass='mb-4' label='Your Password' id='form1' />
                  </MDBCol>

                  <MDBCol col='6'>
                    <MDBInput type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange} wrapperClass='mb-4' label='Re-enter Password' id='form1' />
                  </MDBCol>
                </MDBRow>

                <MDBBtn onClick={register} className='w-100 mb-4' size='md'>register</MDBBtn>
               
                <div className="text-center">

                  <p>or sign up with:</p>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm" />
                  </MDBBtn>

                </div>

              </MDBCardBody>
            </MDBCard>

          </MDBCol>

        </MDBRow>

      </MDBContainer>

      <Footer />
      <Subfooter />
    </>
  )
}


export default App;