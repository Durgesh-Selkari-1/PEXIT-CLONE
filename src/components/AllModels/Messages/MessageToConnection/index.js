import React from 'react';
import profile from './../../../../assets/Dashboard/profile_img.png';
import './MessageToConnection.css';
import { FaTelegramPlane } from 'react-icons/fa';


export default function MessageToConnection() {


    return (
        <>


            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Send Messages to Connection
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

                        <div className="modal-body m-0 p-0 mx-3 border border-0 rounded  mt-0">

                            <div className='row m-0 p-0'>
                                <div className='col-12'>
                                    <div className='row m-0 p-0'>
                                        <div className='col-12 '>
                                           <div className='container-fluid d-flex flex-row justify-content-start  align-items-start '>
                                           <div className='my-2'>
                                                <img src={profile} alt="user profile" className="img-fluid rounded-pill" style={{ height: 50, width: 50 }} />
                                            </div>
                                            <div className='align-self-center ms-1'>
                                                <span className='text-light h6 ms-3'>Hi I am PEXit User</span>
                                            </div>

                                           </div>
                                            

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row' >
                                <div className='col-12 p-3 px-4'>
                                    <div className='container-fluid'>
                                    <form>
                                        <div className="input-group mb-3 send-messageToConnection-input-dev">
                                            <input type="search" placeholder='Search connection ...' id="form1" className="form-control rounded-0 rounded-start rounded-end" style={{}} />

                                            <button type="button" className="btn" style={{ marginLeft: -50, border: 'none', outline: 'none' }}>
                                                <span className="material-icons mt-0">
                                                    search
                                                </span>
                                            </button>
                                        </div>
                                    </form>

                                    </div>
                                   
                                </div>
                            </div>


                            <div className='row' >
                                <div className='col-12 p-3 px-4'>
                                    <div className='container-fluid'>
                                    <form>
                                        <div className="input-group mb-3 send-messageToConnection-input-dev">
                                            <input type="search" placeholder='Type your message ...' id="form1" className="form-control rounded-0 rounded-start rounded-end"/>

                                            <button type="button" className="btn btn-light border-0 ms-3 py-0 my-0" style={{outline: 'none' }}>
                                                <span className="mx-3 my-0 py-0 text-secondary fw-bold" >
                                                    Send
                                                </span>
                                            </button>
                                        </div>
                                    </form>

                                    </div>
                                   
                                </div>
                            </div>



                            










                        </div>


                       

                    </div>
                </div>
            </div>
        </>



    )
}
