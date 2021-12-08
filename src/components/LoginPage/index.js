import React, { useState } from 'react';
import { Button, FormGroup, Label, Input, Form } from 'reactstrap';
import './loginPage.css';
import { GoogleLoginButton, FacebookLoginButton, LinkedInLoginButton } from 'react-social-login-buttons';

export default function LoginPage() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password };

        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }



    return (
        <>
            <Form action="" onSubmit={submitForm} className="login-form" >
                <h1>PEXit</h1>
                <h3>Login</h3>

                <FormGroup>

                    <div>
                        <Label htmlFor="email">Email</Label><br />
                        <Input type="email" name="email" id="email" autoComplete="off" value={email}
                            onChange={(e) => setEmail(e.target.value)}



                        />
                    </div>
                </FormGroup>

                <FormGroup>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" name="password" id="password" autoComplete="off" value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>
                </FormGroup>
                <Button type="submit">Login</Button>
                <GoogleLoginButton />
                <FacebookLoginButton />
                <LinkedInLoginButton />

            </Form>
            <div>
                {
                    allEntry.map((curElem) => {

                        return (
                            <div className="showDataStyles">
                                <p>{curElem.email}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )


                    })
                }
            </div>

        </>
    )
}

