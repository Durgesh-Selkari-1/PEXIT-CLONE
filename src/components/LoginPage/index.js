import React from 'react';
// import { Button, FormGroup, Input, Form } from 'reactstrap';
import './loginPage.css';
import logo from './../../assets/landingpage_img/logo.png';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import TextField from './TextField';
import { Formik, Form, Field } from 'formik';
export default function LoginPage() {


    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const [allEntry, setAllEntry] = useState([]);

    // const submitForm = (e) => {
    //     e.preventDefault();
    //     const newEntry = { email: email, password: password };

    //     setAllEntry([...allEntry, newEntry]);
    //     console.log(allEntry);
    // }

    const initialValues = {
        userName: '',
        passWord: ''
    }
    console.log(initialValues);

    return (
        <>
            <Header />

            <div className='container-fluid py-5 mx-auto ' style={{ height: '100vh' }} >
                <Formik
                    initialValues={initialValues}
                // onSubmit={onSubmit}
                

                >
                    {formik => {

                        return (



                            <div className='container-fluid d-flex m-0 p-0'>
                                <div className='col-12 col-sm-12 col-lg-6 mx-auto mb-5' style={{ backgroundColor: '#dbdbdb' }}>
                                <div className='col-12 d-flex justify-content-end align-items-center'>
                                      <Link to="/" >
                                      <button type="button" className="btn btn-lg btn-close bg-secondary rounded-pill my-3 mx-3" aria-label="Close">
                                            </button>
                                      </Link>
                                           
                                        </div>
                                    <Form className=' py-5 px-1 mx-lg-5 mx-sm-1'  >
   
                                        <div className="mb-3">
                                            <p className='m-0  p-0 text-center' style={{ color: '#bb2428' }}><img src={logo} alt="iView" className='img-fluid mx-auto' /> </p>
                                            {/* <hr className='' style={{ color: '#0076a8' }} /> */}
                                            <p className='text-center h4 fw-normal my-3'>Login</p>
                                        </div>
                                        <div className="mb-3">
                                            <TextField name="fullName" type="text" placeholder="user name" />
                                        </div>
                                        <div className="mb-3">
                                            <TextField name="passWord" type="password" placeholder="password" />
                                        </div>

                                        <div className="d-grid" >
                                            <button className='btn btn-lg btn-secondary mt-3 border-0 rounded-2 py-3' type='submit'><span className='h4 text-light'>Login</span></button>
                                            <div className="mt-3 d-flex justify-content-center">
                                                <hr className='w-50 mx-auto' />
                                                <h4 className='mx-4'> Or </h4>
                                                <hr className='w-50 mx-auto' />
                                            </div>



                                            <button className='btn btn-lg btn-light mt-3 border-0 rounded-0 py-3' type='submit'><span className='h4 text-secondary opacity-75'>Sign in with Gmail</span></button>
                                            <button className='btn btn-lg btn-light mt-3 border-0 rounded-2 py-3' type='submit'><span className='h4 text-secondary opacity-75'>Sign in with Facebook</span></button>
                                            <button className='btn btn-lg btn-light mt-3 border-0 rounded-2 py-3' type='submit'><span className='h4 text-secondary opacity-75'>Sign in with Linkedin</span></button>


                                        </div>
                                        {/* <button className='btn btn-danger mt-3 border-0 rounded-0' type='submit'>Sign in with Gmail</button>
                                            <button className='btn btn-danger mt-3 border-0 rounded-0' type='submit'>Sign in with Facebook</button>
                                            <button className='btn btn-danger mt-3 border-0 rounded-0' type='submit'>Sign in with Linkedin</button> */}

                                    </Form>
                                </div>
                            </div>

                        )
                    }}

                </Formik>
            </div>


            {/* <Form className="login-form" onSubmit={submitForm}>
                <div className='row m-0'>
                    <div className='col-12 d-flex justify-content-end align-items-center'>
                        <button type="button" className="btn btn-lg btn-close bg-secondary rounded-pill my-3" aria-label="Close">

                        </button>
                    </div>

                </div>
                <div className="for-padding">
                    <div> <img src={logo} alt="Logo_Image" className="img-fluid m-3 mt-0" /> </div>
                    <div className="mt-3">
                        <p style={{ fontSize: 25 }}>Login</p>
                    </div>
                    <FormGroup>
                        <div>
                            <Input type="email" name="email" id="email" autoComplete="off" value={email} placeholder="user name"
                                onChange={(e) => setEmail(e.target.value)} className="form-input"

                            />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div>

                            <Input type="password" name="password" id="password" autoComplete="off" value={password} placeholder="password"
                                onChange={(e) => setPassword(e.target.value)} className="form-input"


                            />
                        </div>
                    </FormGroup>


                    <Button type="submit" className="btn btn-lg btn-block submit-button"><h4>Login</h4></Button><br />
                    <div className="mt-4 d-flex justify-content-center">
                        <hr className='w-25 mx-auto' />
                        <h4> Or </h4>
                        <hr className='w-25 mx-auto' />
                    </div>
                    <Button type="submit" className="btn btn-lg btn-block form-button" ><h4>Sign in with Google</h4></Button><br />
                    <Button type="submit" className="btn btn-lg btn-block form-button" ><h4>Sign in with Facebook</h4></Button><br />
                    <Button type="submit" className="btn btn-lg btn-block form-button" ><h4>Sign in with Linkedin</h4></Button><br />
                </div>
            </Form> */}




            {/* <Footer /> */}



        </>
    )
}

