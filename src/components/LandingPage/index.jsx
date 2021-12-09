import React from 'react';
import './index.css';
import landingpage_image from './../../../src/assets/landingpage_img/landingPage_image.png'
import Header from '../Header';
import Footer from '../Footer';


export default function LandingPage() {

    return (
        <>
            <Header />
            <div style={{ marginTop: 120, height: 750, width:500}}>
                <h3 style={{ textAlign: 'left', color: 'black' }}>
                    PEXit TM  -The Integrated Multi-Lingual Media
                </h3>
                <img src={landingpage_image} className="float-left" alt="Landing_Image"  style={{width:'100%'}}/>
            </div>
            <Footer />
        </>
    )
}

