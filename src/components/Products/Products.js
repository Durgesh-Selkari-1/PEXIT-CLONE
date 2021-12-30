import React, { useState } from 'react';

import './Products.css';
import logo from './../../assets/landingpage_img/logo.png';
import Header from '../Header';
import Footer from '../Footer';


export default function Products() {






    return (
        <>
            <Header />
            <main style={{ height: '100vh' }}>
                <div className='container-fluid d-flex justify-content-start align-items-center '>
                
                    <div className="card w-25 d-flex align-self-center">
                        <img src={logo} className="img-fluid card-img-top" alt="Product Image" />
                        <div className="card-body">
                            <p className='m-0 p-0 card-title text-start h5'>Gold Jewellery </p>
                            <p className="m-0 p-0 card-text text-start">Navrathan </p>
                            <p className="p-0 m-0 card-text text-start">Bangaluru, Karnataka, India </p>
                        </div>
                    </div>

                    <div className="card w-25 d-flex align-self-center">
                        <img src={logo} className="img-fluid card-img-top" alt="Product Image" />
                        <div className="card-body">
                            <p className='m-0 p-0 card-title text-start h5'>Gold Jewellery </p>
                            <p className="m-0 p-0 card-text text-start">Navrathan </p>
                            <p className="p-0 m-0 card-text text-start">Bangaluru, Karnataka, India </p>
                        </div>
                    </div>

                    <div className="card w-25 d-flex align-self-center">
                        <img src={logo} className="img-fluid card-img-top" alt="Product Image" />
                        <div className="card-body">
                            <p className='m-0 p-0 card-title text-start h5'>Gold Jewellery </p>
                            <p className="m-0 p-0 card-text text-start">Navrathan </p>
                            <p className="p-0 m-0 card-text text-start">Bangaluru, Karnataka, India </p>
                        </div>
                    </div>

                   
                  
                

                

                </div>
                

           
               


            </main>


        </>



    )
}
