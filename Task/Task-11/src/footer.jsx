import React from 'react'

function Footer() {
    return (
        <>
            <footer className='container mt-5 mb-4'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-4 '>
                        <img src="https://demo80leotheme.b-cdn.net/prestashop/vt_decor/img/logo-1685434770.jpg" className='img-fluid' alt="" />
                        <p className='mt-4'>2593 Timbercrest Road, Chisana, Alaska Badalas
                            <br />  United State</p>
                        <p className='mt-2'>(+01)2-345-6789</p>
                        <p>[email protected]</p>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-2'>
                        <h3>Our Products</h3>
                        <div className='mt-3' style={{ lineHeight: "18px" }}>
                            <p>Bestsellers</p>
                            <p> New In</p>
                            <p>Chairs</p>
                            <p>Sofas</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-2'>
                        <h3> Useful Links</h3>
                        <div className='mt-3' style={{ lineHeight: "18px" }}>
                            <p>About Us</p>
                            <p> About Us</p>
                            <p>Blog</p>
                            <p>FAQs</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
                        <h3>Newsletter</h3>
                        <p className='mt-3'>Stay Updated on all that's new add noteworthy</p>
                        <div className='mt-4'>
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                            <i class="ms-3 fa fa-twitter" aria-hidden="true"></i>
                            <i class="ms-3 fa fa-youtube-play" aria-hidden="true"></i>
                            <i class="ms-3 fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                    </div></div>
            </footer>
        </>
    )
}

export default Footer