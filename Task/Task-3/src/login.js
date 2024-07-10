import React, { useState } from "react";
import './App.css'

function Login({ products }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [logEmail, setLogEmail] = useState("");
    const [logPass, setLogPass] = useState("");

    function handleLogout() {
        setIsLoggedIn(false);
    }

    function handleLogin(event) {
        setIsLoggedIn(true);
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        // Perform login logic here
        console.log("Login logic goes here");
    }

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
            {isLoggedIn ? (
                <div>
                    <div id="productList">
                        {products.map(product => (
                            <div key={product.id} className="product">
                                <h3>{product.name}</h3>
                                <p>Quantity: {product.quantity}</p>
                                <p>Price: {product.price}</p>
                                <p>Expiry: {product.expiry}</p>
                            </div>
                        ))}
                    </div>
                    <button type="button" className="btn mt-4" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div className="section">
                    <div className="container">
                        <div className="row full-height justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                    <form onSubmit={handleSubmit} id="loginForm">
                                        <div className="card-3d-wrap mx-auto">
                                            <div className="card-3d-wrapper">
                                                <div className="card-front">
                                                    <div className="center-wrap">
                                                        <h4 className="mb-4 pb-3 " id="opacity">Log In</h4>
                                                        <div className="form-group">
                                                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" value={logEmail} onChange={(e) => setLogEmail(e.target.value)} />
                                                            <i className="input-icon fa fa-envelope"></i> {/* FontAwesome envelope icon */}
                                                        </div>    
                                                        <div className="form-group mt-2">
                                                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" value={logPass} onChange={(e) => setLogPass(e.target.value)} />
                                                            <i className="input-icon fa fa-lock"></i> {/* FontAwesome lock icon */}
                                                        </div>
                                                        <button type="submit" className="btn mt-4" id="opacity" onClick={handleLogin}>Login</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
