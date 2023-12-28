import React from 'react'
import "../Style/ErrorPage.css"
import { NavLink, useNavigate } from 'react-router-dom'


const Error = () => {

  const Navigate = useNavigate()

  const goBack =()=>{
    Navigate("/")


  }
  return (
    <div className='full-errorpage-container'>
        <h1 className='Error-header'>404 Error</h1>
        <h4 className="Error-content"> You'r Lost </h4>
        <button onClick={goBack}>GO BACK TO HOME</button>

    </div>
  )
}

export default Error