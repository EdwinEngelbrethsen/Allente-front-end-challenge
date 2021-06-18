import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Banner = ( { imageURL } ) => {

    const [ movie, setMovie ] = useState([]);

    useEffect( () => {
        const api = "https://stoplight.io/mocks/sci-code/diggit:master/12726515/recommendations";
        axios.get(api)
            .then(response => {
                setMovie(
                    response.data
                )
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="banner">
            <div className="banner-contents">
                <img className="banner-img" alt="this is an image" src={movie}/>
            </div>
        </div>
    )
}

export default Banner;