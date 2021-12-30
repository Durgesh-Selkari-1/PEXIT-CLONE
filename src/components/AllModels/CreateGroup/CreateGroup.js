import React from 'react';
import profile from './../../../../src/assets/Dashboard/profile_img.png';
import './CreateGroup.css';


export default function CreateGroup() {


    return (
        <>


            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create Group
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" >
                    <div className="modal-content" style={{ backgroundColor: '#585858' }}>
                        <div className="modal-header mb-0 pb-0 border-0">
                            <p className="modal-title m-0 p-0 ms-auto text-light fw-bold" id="exampleModalLabel">Create Group</p>
                            <button type="button" className="btn-close bg-light rounded-pill" data-bs-dismiss="modal" aria-label="Close">

                            </button>
                        </div>



                        <div className="modal-body pt-0 mt-0">
                            <hr className='text-light' />
                            <div className='row px-5 mt-2'>
                                <div className='col-12'>
                                    <form className=''>
                                        <div className="mb-3 placeholder-in-create-group-dev">

                                            <input className="form-control form-control-lg" type="text" placeholder="Group name" aria-label=".form-control-lg example" />
                                        </div>
                                        <div className="mb-3 placeholder-in-create-group-dev">
                                            
                                            <input className="form-control" type="text" placeholder="Description" aria-label=".form-control-lg example" style={{height:100}} />




                                        </div>
                                        <div className="mb-3 placeholder-in-create-group-dev">

                                            <input className="form-control form-control-lg" type="text" placeholder="Select user" aria-label=".form-control-lg example" />
                                        </div>
                                        <div className="mb-3">
                                            <select className="form-select" aria-label="Default select example" style={{height:45}}>

                                                <option value="1">Public</option>
                                                <option value="2">Private</option>
                                                <option value="3">Others</option>
                                            </select>


                                        </div>
                                        <div className="mb-3">

                                        <label className="form-label text-light">
                                            
                                            <small>
                                            * Any PEXit user can find the group;see its members and their posts
                                            </small></label>
                                        </div>






                                        <div className="d-grid">
  <button className="btn btn-light btn-lg" type="button"> <span className='' style={{fontSize:'medium',opacity:0.8}}> Create Group</span></button>
  
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