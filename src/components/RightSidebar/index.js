import React, { useState } from 'react';
import './RightSidebar.css';
import profile from './../../assets/Dashboard/profile_img.png';
import Header from './../Header/index';
import Footer from '../Footer';




export default function RightSidebar() {


  return (
    <>
      <Header />

      <div className='container-fluid'>
        <div className='container-fluid bg-light d-flex flex-row justify-content-end '>


          <div className='container-fluid bg-light dashboard-right-sidebar-dev' style={{ fontSize: 'large' }}>

            <div className='d-flex align-items-center'>
              <span className="material-icons" style={{ fontSize: 30 }}>
                add_circle_outline
              </span>
              <span className='ms-2 fw-bold'>Create New Group</span>
            </div>

            <div className='d-flex align-items-center'>
              <span className="material-icons" style={{ fontSize: 30 }}>
                add_circle_outline
              </span>
              <span className='ms-2 fw-bold'>Add Product</span>
            </div>

            <div className='d-flex align-items-center'>
              <span className="material-icons" style={{ fontSize: 30 }}>
                add_circle_outline
              </span>
              <span className='ms-2 fw-bold'>Publish Advertisement</span>
            </div>

            <div className='d-flex align-items-center'>
              <span className="material-icons" style={{ fontSize: 30 }}>
                add_circle_outline
              </span>
              <span className='ms-2 fw-bold'>Post Sponsored Content</span>
            </div>

            <div className='d-flex align-items-center'>
              <span className="material-icons" style={{ fontSize: 30 }}>
                add_circle_outline
              </span>
              <span className='ms-2 fw-bold'>Post Job</span>
            </div>

            <div className='d-flex align-items-center'>
              <span className="material-icons" style={{ fontSize: 30 }}>
                add_circle_outline
              </span>
              <span className='ms-2 fw-bold'>Add Software</span>
            </div>

            <div className='d-flex align-items-center'>
              <span className="material-icons" style={{ fontSize: 30 }}>
                add_circle_outline
              </span>
              <span className='ms-2 fw-bold'>Add Service</span>
            </div>


          </div>
        </div>

        <div className='container-fluid bg-light d-flex flex-row justify-content-end my-3'>
          <div className='container-fluid bg-light my-2'>

            <div className=''>
              <div className='text-start my-2'>
                <span><p className='h6 fw-bold'>Active <span>()</span></p></span>
              </div>

              <div className='d-flex justify-content-start align-items-center my-3'>
                <img src={profile} alt="user profile" className="img-fluid ms-0 rounded-pill" style={{ height: 45, width: 45 }} />
                <span className='ms-2 h6'>User Name</span>
              </div>
              <div className='d-flex justify-content-start align-items-center my-3'>
                <img src={profile} alt="user profile" className="img-fluid ms-0 rounded-pill" style={{ height: 45, width: 45 }} />
                <span className='ms-2 h6'>User Name</span>
              </div>
              <div className='d-flex justify-content-start align-items-center my-3'>
                <img src={profile} alt="user profile" className="img-fluid ms-0 rounded-pill" style={{ height: 45, width: 45 }} />
                <span className='ms-2 h6'>User Name</span>
              </div>


            </div>


          </div>
        </div>

      </div>


      <Footer />




      {/* <div className='container-fluid bg-danger'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='text-start'>
                                            <span><p className='h6 fw-bold'>Active <span>()</span></p></span>
                                        </div>
                                        <div className='row my-4' >
                                            <div className='col-md-12' >
                                                <div style={{ alignContent: 'start', display: 'flex', alignItems: 'center' }} >
                                                    <img src={profile} alt="user profile" className="img-fluid ms-0" style={{ height: 45, width: 45, borderRadius: 50 }} />
                                                    <span className='ms-2 h6'>User Name</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row my-4' >
                                            <div className='col-md-12' >
                                                <div style={{ alignContent: 'start', display: 'flex', alignItems: 'center' }} >
                                                    <img src={profile} alt="user profile" className="img-fluid ms-0" style={{ height: 45, width: 45, borderRadius: 50 }} />
                                                    <span className='ms-2 h6'>User Name</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row my-4' >
                                            <div className='col-md-12' >
                                                <div style={{ alignContent: 'start', display: 'flex', alignItems: 'center' }} >
                                                    <img src={profile} alt="user profile" className="img-fluid ms-0" style={{ height: 45, width:45, borderRadius: 50 }} />
                                                    <span className='ms-2 h6'>User Name</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row my-4' >
                                            <div className='col-md-12' >
                                                <div style={{ alignContent: 'start', display: 'flex', alignItems: 'center' }} >
                                                    <img src={profile} alt="user profile" className="img-fluid ms-0" style={{ height: 45, width:45, borderRadius: 50 }} />
                                                    <span className='ms-2 h6'>User Name</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row my-4' >
                                            <div className='col-md-12' >
                                                <div style={{ alignContent: 'start', display: 'flex', alignItems: 'center' }} >
                                                    <img src={profile} alt="user profile" className="img-fluid ms-0" style={{ height: 45, width: 45, borderRadius: 50 }} />
                                                    <span className='ms-2 h6'>User Name</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row my-4' >
                                            <div className='col-md-12' >
                                                <div style={{ alignContent: 'start', display: 'flex', alignItems: 'center' }} >
                                                    <img src={profile} alt="user profile" className="img-fluid ms-0" style={{ height: 45, width: 45, borderRadius: 50 }} />
                                                    <span className='ms-2 h6'>User Name</span>

                                                </div>
                                            </div>
                                        </div>




                                    </div>

                                </div>

                            </div> */}









    </>
  )
}