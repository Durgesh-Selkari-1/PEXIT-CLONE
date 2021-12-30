import React from 'react';
import profile from './../../../../assets/Dashboard/profile_img.png';
import './MessageInputsField.css';
import { FaTelegramPlane } from 'react-icons/fa';


export default function MessageInputsField() {


    return (
        <>


            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Send Messages
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" >
                    <div className="modal-content" style={{ backgroundColor: '#585858' }}>
                        <div className="modal-header border-0 mb-0 pb-0">
                            <p className="modal-title ms-auto text-light fw-bold" id="exampleModalLabel">Send Massage</p>
                            <button type="button" className="btn-close bg-light rounded-pill" data-bs-dismiss="modal" aria-label="Close">

                            </button>
                           
                        </div>

                        <hr className='text-white mx-3' />

                        <div className="modal-body m-0 p-0 mx-3 bg-light border border rounded overflow-scroll mt-0" style={{height:250}}>
                        
                            <div className='row m-0 p-0 bg-light'>
                                <div className='col-12'>
                                    <div className='row m-0 p-0'>
                                        <div className='col-12 d-flex flex-row justify-content-start  align-items-start '>
                                            <div className='my-2'>
                                                <img src={profile} alt="user profile" className="img-fluid rounded-pill" style={{ height: 50, width: 50 }} />
                                            </div>
                                            <div className='align-self-center ms-1'>
                                                <span className='text-dark h6'>Hi I am PEXit User</span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-12 '>
                                            <div>
                                                <span className='fw-bold align-self-center'>
                                                 <small>Dec, 23, 2021</small>   
                                                </span>
                                            </div>

                                        </div>
                                    </div>

                                    
                                    <div className='row my-3'>
                                        <div className='col-6'>

                                            <div className='row m-0 p-0 ms-3 bg-light '>
                                                <div className='col-12 m-0 p-0 '>

                                                    <div className='p-2 m-0 border border-1 rounded-3 w-100'>
                                                        <span className='m-0 p-0 ms-0 pe-1 d-flex text-start' style={{fontSize:'small'}}>

                                                           

                                                                a Hi How are You?Hi How are You?Hi How are You?Hi How are You?
                                                                a Hi How are You?Hi How are You?Hi How are You?Hi How are You?
                                                                a Hi How are You?Hi How are You?Hi How are You?Hi How are You?
                                                                a Hi How are You?Hi How are You?Hi How are You?Hi How are You?
                                                          
                                                        </span>
                                                    </div>
                                                    <div className='d-flex flex-row justify-content-start  align-items-start'>
                                                        <span className='ms-3 fw-normal' style={{fontSize:'small'}}>02:05 PM</span>
                                                    </div>
                                                  

                                                </div>
                                            </div>



                                        </div>

                                        <div className='col-6'>
                                            <div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className='row my-3'>
                                    <div className='col-6'>
                                            <div>

                                            </div>

                                        </div>
                                        <div className='col-6'>

                                            <div className='row m-0 p-0 ms-3 bg-light '>
                                                <div className='col-12 m-0 p-0 '>

                                                    <div className='p-2 m-0 border border-1 rounded-3 w-100'>
                                                        <span className='m-0 p-0 ms-0 pe-1 d-flex text-start' style={{fontSize:'small'}}>

                                 

                                                                a Hi How are You?Hi How are You?Hi How are You?Hi How are You?
                                                                a Hi How are You?Hi How are You?Hi How are You?Hi How are You?
                                                                a Hi How are You?Hi How are You?Hi How are You?Hi How are You?
                                                                a Hi How are You?Hi How are You?Hi How are You?Hi How are You?
                                                       
                                                        </span>
                                                    </div>
                                                    <div className='d-flex flex-row justify-content-start  align-items-start'>
                                                        <span className='ms-3 fw-normal'><small>02:05 PM</small></span>
                                                    </div>
                                                  

                                                </div>
                                            </div>



                                        </div>

                                       
                                    </div>


                                    

                                    


                                   


                                </div>

                            </div>

                            







                        </div>


                        <div className="modal-footer border-0 m-0 px-1">
                        <div className='row m-0 p-0 w-100 '>
                                <div className='col-12'>
                                    <form>
                                        <div className="input-group mb-3 message-input-palceholder-dev">
                                            <input type="text" className="form-control" placeholder="Type your message ..." aria-label="" aria-describedby="button-addon2" />
                                            <button className="btn border border-1" type="button" id="button-addon2"><FaTelegramPlane /></button>
                                        </div>
                                    </form>

                                </div>

                            </div>


          


          </div>


                    </div>
                </div>
            </div>
        </>

    )
}
