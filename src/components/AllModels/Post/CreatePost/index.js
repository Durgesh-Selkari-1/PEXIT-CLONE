import React from 'react';
import profile from './../../../../assets/Dashboard/profile_img.png';
import './CreatePost.css';


export default function CreatePost() {


  return (
   <>
     

      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Create post
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" >
          <div className="modal-content"  style={{backgroundColor:'#585858'}}>
            <div className="modal-header border-0 mb-0 pb-0 ">
              <p className="modal-title ms-auto text-light fw-bold" id="exampleModalLabel">Create Post</p>
              <button type="button" className="btn-close bg-light rounded-pill" data-bs-dismiss="modal" aria-label="Close">
        
              </button>
            </div>



            <div className="modal-body border-0">
              <hr className='m-0 p-0 w-75 mx-auto text-light'  />
              <div className='row mt-3'>
                <div className='col-8' style={{ display: 'flex', justifyContent: 'start' }}>
                  <div>
                    <span>
                      <div className='mx-2'>
                        <img src={profile} alt="user profile" className="img-fluid rounded-pill" style={{ height: 50, width: 50 }} />
                      </div>
                    </span>
                  </div>
                  <div className='text-start' style={{ fontSize: 'small' }}>
                    <p className='m-0 p-0 text-light fw-bold'>User Name</p>



                    <div className="dropdown">


                      <button className="btn btn-sm btn-light dropdown-toggle"
                        type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                        My Connections

                      </button>

                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>

                  </div>


                </div>
                <div className='col-4'>

                  <div className="form-check my-4 p-0" style={{ display: 'flex', alignContent: 'start', alignItems: 'start', justifyContent: 'start' }}>
                    <label className="form-check-label m-0 p-0 me-auto" for="flexCheckDefault">
                      <span className='m-0 p-0 text-light'><small>Hide My Identity</small></span>
                    </label>
                  
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                   
             
                  </div>
                </div>

              </div>
              <div className='row'>
                <div className='col-12'>
                  <form>
                    <div className="form-group mx-3" >
                    <div className='create-post-modal-input-dev'>

                    <input type="email" className="form-control" id="email"
                     placeholder="What's on your mind?" style={{height:130}}/>
                     </div>

                    </div>
                  </form>

                </div>

              </div>









            </div>


            <div className="modal-footer border-0">

              <div className='row text-light me-5'>
                <div className='col-12 w-100'>
                  <div style={{display:'flex',alignContent:'start',alignItems:'start',justifyContent:'start',fontSize:'small'}}>
                    
                 

                  <div className='ms-2' style={{display:'block'}}>
                    <div>
                    <span className="material-icons">
                                                pending_actions
                                            </span>

                    </div>
                    <div>
                      <span>files</span>

                    </div>
                  </div>
                  <div  className='ms-4'  style={{display:'block'}}>
                    <div>
                    <span className="material-icons">
                                                pending_actions
                                            </span>

                    </div>
                    <div>
                      <span>photo</span>

                    </div>
                  </div>
                  <div className='ms-4'  style={{display:'block'}}>
                    <div>
                    <span className="material-icons">
                                                pending_actions
                                            </span>

                    </div>
                    <div>
                      <span>video</span>

                    </div>
                  </div>
                  <div className='ms-4'  style={{display:'block'}}>
                    <div>
                    <span className="material-icons">
                                                pending_actions
                                            </span>

                    </div>
                    <div>
                      <span>links</span>

                    </div>
                  </div>
                  <div className='ms-4'  style={{display:'block'}}>
                    <div>
                    <span className="material-icons">
                                                pending_actions
                                            </span>

                    </div>
                    <div>
                      <span>youtube</span>

                    </div>
                  </div>
                  <div className='ms-5'  style={{display:'block'}}>
                    <div>
                    <button type="button" className="btn btn-sm btn-default btn-light my-2"><span className='mx-2'>Post</span></button>
                  </div>
                  </div>
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