import React from 'react';
import logo from '../../assets/image/static/logo_home.png'
import { Link } from 'react-router-dom';
import './helper.scss'

const PageNotFound =() =>{
    return (
      <div className="d-flex flex-column justify-content-around align-items-center h-100 ">
        <div>
        <h1 className="text-center text-danger font-weight-bolder">404</h1>
        <h2 className="h5">Page not found</h2>
        </div>
        
        <div className=" d-flex flex-column justify-content-around align-items-center">
        <Link to="/" className='mb-3 '>Back To Home</Link>
            <img className='rounded' src={logo} alt ="logo" />
        </div>
        <div></div>
      </div>
    );
  }

  export default PageNotFound