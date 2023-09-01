// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import axios from "axios";          // for featching data from api using axios
// import { Link } from 'react-router-dom';






// const FetchData = ({ cat }) => {


//     const [Data, setData] = useState("");    // using state to save data 


//     const fetchData = async () => {
//         await axios.get(
//             cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=952f4be7019c46f6a9b172f77b1e44cb`
//                 : "https://newsapi.org/v2/top-headlines?country=in&apiKey=952f4be7019c46f6a9b172f77b1e44cb"
//         ).then((res) => setData(res.data.articles));
//     };

//     useEffect(() => {
//         fetchData();

//     }, [cat]);               // page refresh hone per apne aap ko call karleta hai


//     return (
//         <div ClasssName="container my-4  " style={{ minHeight: "100vh" }}>
//             <h3><u>Top Headlines</u>
//             </h3>
//             <div className=" container d-flex justify-content-center align-items-center flex-column my-3" >
//                 {Data ?
//                     Data.map((items, index) => (
//                         <div className="container my-3 p-3 " style={{ width: "700px", boxShadow: "2px 2px 10px silver", borderRadius: "25px" }}>
//                             <h5 className="my-1">{items.title}</h5>

//                             <div className="  d-flex justify-content-center align-items-center">
//                                 <img src={items.urlToImage} alt=" not found" className="img-fluid" style={{
//                                     width: "100%",
//                                     height: "300px",
//                                     objectFit: "cover"
//                                 }} />
//                             </div>

//                             <p className="my-1">{items.content}</p>
//                             <Link to={items.url} target="blank">View More</Link>
//                         </div>

//                     )) : "loading....."}

//             </div>
//         </div>
//     )
// }

// export default FetchData;



// final one ,, without changes 


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const FetchData = ({ cat }) => {
//     const [Data, setData] = useState("");

//     const fetchData = async () => {
//         await axios.get(
//             cat
//                 ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=952f4be7019c46f6a9b172f77b1e44cb`
//                 : "https://newsapi.org/v2/top-headlines?country=in&apiKey=952f4be7019c46f6a9b172f77b1e44cb"
//         ).then((res) => setData(res.data.articles));
//     };

//     useEffect(() => {
//         fetchData();
//     }, [cat]);

//     return (
//         <div className="container my-4" style={{ minHeight: "100vh" }}>
//             <h3><u>Top Headlines</u></h3>
//             <div className="d-flex flex-wrap justify-content-between my-3">
//                 {Data ? (
//                     Data.map((items, index) => (
//                         <div
//                             key={index}
//                             className="my-3 p-3"
//                             style={{
//                                 width: "calc(33.33% - 20px)", // Adjust the width and spacing as needed
//                                 boxShadow: "2px 2px 10px silver",
//                                 borderRadius: "25px",
//                                 boxSizing: "border-box",
//                                 marginRight: "20px",
//                             }}
//                         >
//                             <h5 className="my-1">{items.title}</h5>
//                             <div className="d-flex justify-content-center align-items-center">
//                                 <img
//                                     src={items.urlToImage}
//                                     alt="Not Found"
//                                     className="img-fluid"
//                                     style={{
//                                         width: "100%",
//                                         height: "300px",
//                                         objectFit: "cover",
//                                     }}
//                                 />
//                             </div>
//                             <p className="my-1">{items.content}</p>
//                             <Link to={items.url} target="_blank">
//                                 View More
//                             </Link>
//                         </div>
//                     ))
//                 ) : (
//                     <p>Loading...</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FetchData;






// change after eroor   this is working fine 


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FetchData = ({ cat }) => {
    const [Data, setData] = useState("");

    const fetchData = async () => {
        await axios.get(
            cat
                ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=952f4be7019c46f6a9b172f77b1e44cb`
                : "https://newsapi.org/v2/top-headlines?country=in&apiKey=952f4be7019c46f6a9b172f77b1e44cb"
        ).then((res) => setData(res.data.articles));
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className="container my-4" style={{ minHeight: "100vh" }}>
            <h3><u>Top Headlines</u></h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                {Data ? (
                    Data.map((items, index) => (
                        <div
                            key={index}
                            className="col"
                        >
                            <div className="card h-100 d-flex flex-column">
                                <img
                                    src={items.urlToImage}
                                    alt="Not Found"
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body flex-grow-1">
                                    <h5 className="card-title">{items.title}</h5>
                                    <p className="card-text d-none d-sm-block">{items.content}</p>
                                </div>
                                <div className="card-footer">
                                    <Link to={items.url} target="_blank" className="btn btn-primary w-100">
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default FetchData;



