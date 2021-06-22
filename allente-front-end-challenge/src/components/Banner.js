import React from 'react';


const Banner = ({ImageURL}) => {


    return (
        <div className="banner">
            <div className="banner-contents">
                 <img className="banner-img" alt="" src={`https://image.tmdb.org/t/p/w500/${ImageURL}`}/>
            </div>
        </div>
    )
}

export default Banner;