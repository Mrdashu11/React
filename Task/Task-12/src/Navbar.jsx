import React, { useEffect } from 'react';
import { getRedirectResult, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase';

function Navbar() {
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        getRedirectResult(auth)
            .then((result) => {
                if (result) {
                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    const credential = FacebookAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    const user = result.user;
                    // IdP data available using getAdditionalUserInfo(result)
                    console.log(user, token);
                }
            }).catch((error) => {
                // Handle Errors here.
                console.log(error.code, error.message, error.customData ? error.customData.email : '');
            });
    }, []);

    async function signInWithFacebook() {
        try {
            const provider = new FacebookAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (err) {
            console.log(err.message);
        }
    }

    async function signOut() {
        try {
            await auth.signOut();
        } catch (err) {
            console.log(err.message);
        }
    }
  return (
    <>
        <div className="container-fluid nav-bar bg-transparent">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
            <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
              <div className="icon p-2 me-2">
                <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{ width: '30px', height: '30px' }} />
              </div>
              <h1 className="m-0 text-primary">Makaan</h1>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <a href="property-list.html" className="dropdown-item">Property List</a>
                    <a href="property-type.html" className="dropdown-item">Property Type</a>
                    <a href="property-agent.html" className="dropdown-item">Property Agent</a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="404.html" className="dropdown-item">404 Error</a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
              <a href="" className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
            </div>
            <form className="d-flex me-5" role="search">
                                <i className="fa fa-search me-4" aria-hidden="true"></i>
                                <i className="fa fa-user-o me-4" aria-hidden="true" onClick={signInWithFacebook} style={{ cursor: 'pointer' }}>
                                    {user ? (
                                        <sup>Hi, {user.displayName || user.email}!</sup>
                                    ) : (
                                        <sup>Hi!</sup>
                                    )}
                                </i>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i><sup className='mt-1'>0</sup>
                                <i className="fa fa-sign-out ms-3" aria-hidden="true" style={{ cursor: 'pointer' }} onClick={signOut}></i>
                            </form>
          </nav>
        </div>
    </>
  );
}

export default Navbar;
