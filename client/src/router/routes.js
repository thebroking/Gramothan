import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './header';
import Work from './work';
import Home from './home';
import Ration from './ration';
import Complain from './complain';
import ContactForm from './contact';
import BirthCertificate from './birth';
import DeathCertificate from './death';
import Scheme from './scheme';
class Routess extends Component {

    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/work" element={<Work/>}/>
                    <Route path="/ration" element={<Ration/>}/>
                    <Route path="/bcertificate" element={<BirthCertificate/>}/>
                    <Route path="/dcertificate" element={<DeathCertificate/>}/>
                    <Route path="/scheme" element={<Scheme/>}/>
                    <Route path="/complain" element={<Complain/>}/>
                    <Route path="/contact" element={<ContactForm/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Routess;