import React from 'react';


const Banner = ({ImageURL}) => {


    // Wanted to use bootstrap carousel but was not sure how i'd pass through all the images from homescreen 
    // Didn't bootstrap this since I swapped after I completed the banner and now i'm scared to change it
    return (
        <div className="banner">
            <div className="banner-contents">
                 <img className="banner-img" alt="" src={ImageURL}/>
            </div>
        </div>
    )

}

export default Banner;