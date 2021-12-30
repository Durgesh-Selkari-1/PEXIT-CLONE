import React from 'react';



export default function ServiceEnquiry() {


    return (
        <>


            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Service Enquiry
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" >
                    <div className="modal-content" style={{ backgroundColor: '#585858' }}>
                        <div className="modal-header mb-0 pb-0 border-0">
                            <p className="modal-title m-0 p-0 ms-auto text-light fw-bold" id="exampleModalLabel"> Service Enquiry</p>
                            <button type="button" className="btn-close bg-light rounded-pill" data-bs-dismiss="modal" aria-label="Close">

                            </button>
                        </div>



                        <div className="modal-body pt-0 mt-0">
                            <hr className='text-light' />
                            <div className='row px-5 mt-2'>
                                <div className='col-12'>
                                    <form className=''>
                                        <div className="mb-3 placeholder-in-create-group-dev">

                                            <input className="form-control form-control-lg" type="text" placeholder="Recipient" aria-label=".form-control-lg example" />
                                        </div>
                                        <div className="mb-3 placeholder-in-create-group-dev">

                                            <input className="form-control form-control-lg" type="text" placeholder="Sender Name" aria-label=".form-control-lg example" />
                                        </div>
                                        <div className="mb-3 placeholder-in-create-group-dev">

                                            <input className="form-control form-control-lg" type="email" placeholder="Sender Email" aria-label=".form-control-lg example" />
                                        </div>
                                        <div className="mb-3 placeholder-in-create-group-dev">

                                            <input className="form-control form-control-lg" type="tel" pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
                                             placeholder="Sender Phone" aria-label=".form-control-lg example" />
                                        </div>
                                        <div className="mb-3 placeholder-in-create-group-dev">

                                            <input className="form-control" type="text" placeholder="Message" aria-label=".form-control-lg example" style={{ height: 100 }} />

                                        </div>







                                        <div className="d-grid">
                                            <button className="btn btn-light btn-lg rounded-0" type="submit"> <span className='' style={{ fontSize: 'medium', opacity: 0.8 }}> Send</span></button>

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