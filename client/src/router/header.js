import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-black border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal" ><h1><span class="logo">G</span><Link to='/'><span class="rest">ramothan</span></Link></h1></h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark btn" href="/">Home</a>
          <a className="p-2 text-dark btn" href="/work">Gram's Work</a>
          <a className="p-2 text-dark btn" href="/ration">Ration Card</a>
          <a  className="p-2 text-dark btn" href="/bcertificate">BirthCertificate</a>
          <a  className="p-2 text-dark btn" href="/dcertificate">DeathCertificate</a>
          <a className="p-2 text-dark btn" href="/complain">For Complain</a>
          <a className="p-2 text-dark btn" href="/contact">Contact Us</a>
        </nav>
      </div>
    );

}

export default Header;