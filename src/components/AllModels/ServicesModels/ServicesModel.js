import React from 'react';

import './ServicesModel.css';


export default function ServicesModel() {


  return (
    <>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Click me
      </button>


      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{backgroundColor:'#585858'}}>
            <div className="modal-header border-0">

              <button type="button" className="btn-close bg-light rounded-pill" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>


            <div className="modal-body text-light">
              <div className='row'>
                <div className='col-12 ps-5'>
                  <div className=''>
                    <div>
                      <div className="form-outline w-100" style={{ justifyContent: 'start', display: 'flex' }}>
                        <div className="dropdown">
                          <button className="btn btn btn-light dropdown-toggle rounded-0 rounded-start"
                            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </div>

                        <div className='dashboard-leftside-search-dev border-end-0'>
                          
                          <input type="search" placeholder='Search ...' id="form1" className="form-control rounded-0 rounded-end" />
                        </div>
                        <button type="button" className="btn" style={{ marginLeft: -50, border: 'none', outline: 'none' }}>
                          <span className="material-icons mt-0">
                            search
                          </span>
                        </button>

                      </div>







                    </div>
                    <div className='ms-3'>

                    <div style={{ display: 'flex', justifyContent: 'start'}}>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label className="form-check-label" for="exampleRadios1">
                          posts
                        </label>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start' }}>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label className="form-check-label" for="exampleRadios1">
                          Connections
                        </label>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start' }}>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label className="form-check-label" for="exampleRadios1">
                          Jobs
                        </label>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start' }}>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label className="form-check-label" for="exampleRadios1">
                          Products
                        </label>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start' }}>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label className="form-check-label" for="exampleRadios1">
                          Services
                        </label>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start' }}>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label className="form-check-label" for="exampleRadios1">
                          Software
                        </label>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start' }}>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label className="form-check-label" for="exampleRadios1">
                          Product Suppliers
                        </label>
                      </div>
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