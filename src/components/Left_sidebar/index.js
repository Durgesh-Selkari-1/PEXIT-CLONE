import React from 'react';
import './Left_sidebar.css';
import profile from './../../assets/Dashboard/profile_img.png';




export default function Left_sidebar() {


    const openNav = () => {
        document.getElementById("mySidenav").style.width = "auto";
        document.getElementById("arrow_f").style.height = "0px";

    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0px";
        document.getElementById("arrow_f").style.width = "50px";
    }



    return (
        <>







            <div className='container-fluid bg-dark'>
                <span style={{ fontSize: 30, cursor: 'pointer', top: 0, left: 0, position: 'fixed', zIndex: 0 }} onClick={openNav}>
                    <span id="arrow_f" className="material-icons">
                        arrow_forward
                    </span>
                </span>

                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
                        <span className="material-icons">
                            arrow_back
                        </span>
                    </a>

                    <div className='ms-3'>
                        <div className=''>
                            <div className='d-flex flex-row'>
                                <div className='' >
                                    <img src={profile} alt="user profile" className="img-fluid rounded-pill" style={{ height: 60, width: 60 }} />
                                </div>
                                <div className='' >
                                    <span className='text-start mx-0 mt-0'><span className='fw-bold'>User Name</span><p>SST India Pvt. Ltd.</p></span>
                                </div>
                            </div>

                            <div className='my-3'>
                                <div className='d-flex flex-row'>
                                    <span className="material-icons">
                                        pending_actions
                                    </span>
                                    <span className='mx-2'>Pending invites <span className='ms-auto'>()</span></span>
                                </div>
                            </div>

                            <div className='my-3'>
                                <div className='d-flex flex-row'>
                                    <span className="material-icons">
                                        pending_actions
                                    </span>
                                    <span className='mx-2'>Profile View <span className='ms-auto'>()</span></span>
                                </div>
                            </div>

                            <div className='my-3'>
                                <div className='d-flex flex-row'>
                                    <span className="material-icons">
                                        pending_actions
                                    </span>
                                    <span className='mx-2'>Invite Contacts </span>
                                </div>
                            </div>

                            <div className='my-3'>
                                <div className=''>
                                    <div className="my-2">
                                        <div className="d-flex flex-row">
                                            <span className="material-icons">
                                                pending_actions
                                            </span>
                                            <span className='w-75'>
                                                <select className="form-select m-0 p-0 ms-2 fw-bold" aria-label="Default select example" style={{ border: 'none' }}>
                                                    <option className='fw-bold' selected>View your posts to</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </span>
                                        </div>
                                    </div>


                                    <div className=''>
                                        <div className='px-4 me-5'>
                                            <select className="form-select p-2" aria-label="Default select example">
                                                <option selected>Individuals</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=' my-3'>
                                <div className=''>
                                    <div className="input-group" >

                                        <div className=''>
                                            <div className='col-2'>

                                            </div>
                                            <div className='' >
                                                <div className="form-outline d-flex flex-row px-4 me-5" >
                                                    <div className='dashboard-leftside-search-dev'>
                                                        <input type="search" placeholder='Search ...' id="form1" className="form-control border border-end-0 p-2" />
                                                    </div>
                                                    <button type="button" className="btn border border-start-0 p-0"style={{marginLeft:-5}}>
                                                        <span className="material-icons me-2">
                                                            search
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row my-3'>
                                <div className='col-12' style={{ fontSize: 'small' }}>
                                    <div className="form-check mx-5">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            GVR @SST USA
                                        </label>
                                    </div>
                                    <div className="form-check mx-5">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            PEXit
                                        </label>
                                    </div>
                                    <div className="form-check mx-5">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Guna
                                        </label>
                                    </div>
                                    <div className="form-check mx-5">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Ram
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className='my-3'>
                                <div className='d-flex flex-row'>
                                    <span className="material-icons">
                                        pending_actions
                                    </span>
                                    <span className='mx-2'>My Circle</span>
                                </div>


                            </div>
                            <div className='my-3'>
                                <div className='d-flex flex-row' >
                                    <span className="material-icons">
                                        pending_actions
                                    </span>
                                    <span className='mx-2'>Software</span>
                                </div>


                            </div>
                            <div className='my-3'>
                                <div className='d-flex flex-row'>
                                    <span className="material-icons">
                                        pending_actions
                                    </span>
                                    <span className='mx-2'>Products</span>
                                </div>


                            </div>
                            <div className='my-3'>
                                <div className='d-flex flex-row' >
                                    <span className="material-icons">
                                        pending_actions
                                    </span>
                                    <span className='mx-2'>Job</span>
                                </div>


                            </div>
                            <div className='my-3'>
                                <div className='d-flex flex-row'>
                                    <span className="material-icons">
                                        pending_actions
                                    </span>
                                    <span className='mx-2'>Services</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>















        </>

    )


}