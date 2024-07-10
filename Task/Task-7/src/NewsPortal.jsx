import React, { useState, useEffect } from 'react'
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { FaBehance } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";

function NewsPortal() {
    const [search, setSearch] = useState('')
    const [articles, setArticales] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        handleSearch();
    }, [search]);

      const handleSearch = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-04-10&sortBy=publishedAt&apiKey=d5e726218e3c4a219bf18df67313cb85`);
            const data = await response.json();
            // console.log("API Response:", data); // Log the response for debugging
            if (data.articles && data.articles.length > 0) { // Check if articles exist in the response
                setArticales(data.articles);
                setError(null);
            } else {
                setError("News not found. Please enter a valid news title.");
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            setError("Error fetching news. Please try again later.");
        }
    }
    console.log(articles)

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-between align-items-center pt-5 ps-5">
                                <div>
                                    <a href=""><MdEmail className='me-5' /></a>
                                    <a href=""><FaGoogle className='fs-3' /></a>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-center w-25'>
                                    <h6 >MENU <a href=""><CiMenuFries className='ms-2' /></a></h6>
                                    <h6>Search <a href=""> <IoMdSearch /></a> </h6>
                                    <button className='btn border border-dark'>HIRE US</button>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row ps-5 pt-4">
                                    <div className="col-lg-1 d-flex flex-column p-3">
                                        <a href=""> <TbWorld className='mt-3' /></a>
                                        <a href=""><FaBehance className='mt-2' /></a>
                                        <a href=""><FiInstagram className='mt-2' /></a>
                                        <a href=""><FaTwitter className='mt-2' /></a>
                                    </div>
                                    <div className="col-lg-1 p-0 d-flex justify-content-start" id='revers'>
                                        <h6> <a href=""><BsDashLg className='fs-2' /></a> FOLLOW US</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        <h1 className='fw-bold' style={{ fontSize: "120px"}}>news</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12" id='addtext'>
                                <div className="row pt-2">
                                    <div className="col-lg-12 pt-5 m-auto d-flex">
                                        <div className="row w-100">
                                            <div className="col-lg-6 m-auto d-flex">
                                                <input type="search" name="" id="" placeholder='search news...' className='form-control bg-transparent' onChange={(e) => setSearch(e.target.value)} />
                                                <button className='btn border border-dark ms-3' onClick={handleSearch} id='btn'>search</button>
                                            </div>
                                            <div className="col-lg-12 mt-3" id='update'>
                                                <div className="col-lg-12 d-flex flex-wrap articles">
                                                    {articles.map((article, index) => (
                                                        <div key={index} className="article p-2">
                                                            <h5>{article.title}</h5>
                                                            <p>{article.description}</p>
                                                            <hr />
                                                            <img src={article.urlToImage} alt={article.title} />
                                                        </div>
                                                    ))}
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
        </div>
    )
}

export default NewsPortal
