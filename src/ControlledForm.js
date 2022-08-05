import React, { useState } from 'react'

export default function ControlledForm() {
  const [userData, setUserData] = useState({
    fullName : '',
    userName : '',
    email : '',
    eoNumber : '',
    password : '',
    confirmPassword : '',
    url : '',
    slug : '',
  })  

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (evt) => {
    console.log(evt.target.name, evt.target.value)
    setUserData({
        ...userData,
        [evt.target.name] : evt.target.value
    })
    setErrors({
      ...errors,
      [evt.target.name]: '',
    })
  }
 

  const [errors, setErrors] = useState({
      fullName : '',
      userName : '',
      email : '',
      eoNumber : '',
      password : '',
      confirmPassword : '',
  })

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const {fullName, userName, email, eoNumber, password, confirmPassword} = userData

    const userErrors = {
      fullName : '',
      userName : '',
      email : '',
      eoNumber : '',
      password : '',
      confirmPassword : '',
    } 

    let isError = false

    if (fullName === '') {
      isError = true
      userErrors.fullName = 'Full Name is required'
    }
    if (userName === '') {
      isError = true
      userErrors.userName = 'User Name is required'
      
    }
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email === '' || !regexEmail.test(email)) {
      isError = true
      userErrors.email = 'Email is required and must be valid'
      
    }
    if (eoNumber === '') {
      isError = true
      userErrors.eoNumber = 'EO Number is required'
      
    }
    if (password === '') {
      isError = true
      userErrors.password = 'Password is required'
      
    }
    if (confirmPassword === '') {
      isError = true
      userErrors.confirmPassword = 'Confirm Password is required'
      
    }
    setErrors(userErrors)

    if (isError) return
     //form is valid , now you can submit the form
    //submit form
    setSubmitted(true)

    // if (userErrors.value().some(elm => elm.length > 0)) {
    //   return
    // }

  }

  const {fullName, userName, email, eoNumber, password, confirmPassword, url, slug} = userData

  return (
    <div className='reactform'>
     
        <div className="contact-form">
          <div className="col-8">
          {submitted && <h3 style={{textAlign: "center"}}>Form SuccessFully Submitted</h3>}
      {!submitted && <>
        <h2 style={{textAlign: "center"}}> Questions? We're Ready To Help You. </h2>
        <form onSubmit={handleSubmit}>
          <div className='input-fields'>
          <div>
              <input type="text" name="fullName" 
              onChange={handleChange}
              value={fullName}
              placeholder="Full Name*"
              id="fullName" />
              
          </div>

          <br />
          <div>
              <input type="text" name="userName" 
              onChange={handleChange}
              value={userName}
              placeholder="Username*"
              id="userName" />
          </div>
          <br />
          <div>
              <input type="email" name="email" 
              onChange={handleChange}
              value={email}
              placeholder="Email*"
              id="email" />
          </div>
          <div>
              <input type="text" name="eoNumber" 
              onChange={handleChange}
              value={eoNumber}
              placeholder="EO number*"
              id="eoNumber" />
          </div>
          <div>
              <input type="password" name="password" 
              onChange={handleChange}
              value={password}
              placeholder="Password*"
              id="password" />
          </div>
          <div>
              <input type="password" name="confirmPassword" 
              onChange={handleChange}
              value={confirmPassword}
              placeholder="Confirm Password*"
              id="confirmPassword" />
          </div>
          <div>
              <input type="text" name="url" 
              onChange={handleChange}
              value={url}
              placeholder="Url"
              id="url" />
          </div>
          <div>
              <input type="text" name="slug" 
              onChange={handleChange}
              value={slug}
              placeholder="Slug"
              id="slug" />
          </div>
          </div>
          <input type="submit" value="Submit"></input>
          
      </form>
      </>
      }
          
          </div>
          <div className="col-4">
            <div className="single-col">
            <i className="fa-solid fa-globe"></i>
              <div className="slotdetails">
                <h2>Website</h2>
                <a href="#">Click here to visit</a>
              </div>
            </div>
            <div className="single-col">
            <i className="fa-solid fa-mobile-screen-button"></i>
              <div className="slotdetails">
                <h2>Phone</h2>
                <a href="tel:+6494461709">000-0000000</a>
              </div>
            </div>
            <div className="single-col">
            <i className="fa-solid fa-envelope-circle-check"></i>
              <div className="slotdetails">
                <h2>Email</h2>
                <a href="mailto:hhh@hhd.hh">admin@xyz.com</a>
              </div>
            </div>
            <div className="single-col">
            <i className="fa-solid fa-location-dot"></i>
              <div className="slotdetails">
                <h2>Address</h2>
                <p>Dhanmondi 27, Dhaka 1207</p>
              </div>
            </div>
          </div>
          
        </div>
        
    </div>
  )
}
