import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Section from './Section';
import Section2 from './Section-2';
import Footer from './footer';
import Kitchen from './Kitchen';
import Living from './Living';
import Decoration from './Decoration';

function Header() {
    const [user] = useAuthState(auth);

    async function signInWithGoogle() {
        try {
            const provider = new GoogleAuthProvider();
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
            <header>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand ms-5" to="/">
                            <img src='https://demo80leotheme.b-cdn.net/prestashop/vt_decor/img/logo-1685434770.jpg' className='img-fluid' alt="Logo"></img>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active me-4 text-dark" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown me-4">
                                    <Link className="nav-link dropdown-toggle" to="/kitchen" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shop
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/kitchen" element={<Kitchen/>}>Kitchen</Link></li>
                                        <li><Link className="dropdown-item" to="/living" element={<Living/>}>Living Room</Link></li>
                                        <li><Link className="dropdown-item" to="/decoration" element={<Decoration/>}>Decoration</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active me-4" to="/product">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active me-4" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active me-4" to="/pages">Pages</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active me-4" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <form className="d-flex me-5" role="search">
                                <i className="fa fa-search me-4" aria-hidden="true"></i>
                                <i className="fa fa-user-o me-4" aria-hidden="true" onClick={signInWithGoogle} style={{ cursor: 'pointer' }} >
                                    {user ? (
                                        <sup>Hi, {user.displayName || user.email}!</sup>
                                    ) : (
                                        <sup>Hi!</sup>
                                    )}
                                </i>

                                <i className="fa fa-shopping-cart" aria-hidden="true"></i><sup className='mt-1'>0</sup>
                                <i className="fa fa-sign-out ms-3" aria-hidden="true" style={{ cursor: 'pointer' }} onClick={signOut}></i>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='headeraftermain text-center'>
                <div className='mt-5'>
                    <h1>RITAS</h1>
                    <p><span style={{ color: "grey" }} className='me-2'>From</span>$650.00</p>
                    <button className='btn btn-dark text-light ps-3 pe-3 pt-2 pb-2'>Shop Now</button>
                </div>
                <div className='headerafter'>
                    <img src='https://cdn.shopify.com/s/files/1/0577/9675/5633/files/vt_decor_home1_slide_item2.png?v=1677407356' alt="Header Image"></img>
                </div>
            </div>
            <Section />
            <Section2 />
            <Footer />
        </>
    );
}

export default Header;
