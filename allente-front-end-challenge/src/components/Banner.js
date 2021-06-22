import React from 'react';


const Banner = ({ImageURL}) => {


    return (
        <div className="banner">
            <div className="banner-contents">
                 <img className="banner-img" alt="" src={ImageURL}/>
            </div>
        </div>
    )
}

export default Banner;