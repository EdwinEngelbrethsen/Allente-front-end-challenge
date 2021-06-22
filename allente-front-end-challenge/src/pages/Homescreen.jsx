import React, {useState, useEffect} from "react";

/* Component Imports */
import Banner from "../components/Banner";
import Recommendations from '../components/Recommendations';
import requests from "../contexts/requests";
import axios from "../contexts/axios";
import {Row} from "react-bootstrap"

/* CSS Imports */
import "../style/component-style/Topbar.css"
import "../style/component-style/Banner.css"
import "../style/component-style/RecommendationsRow.css"




const Homescreen = () => {

    const [movie, setMovie] = useState([]);


    useEffect(() => {
        async function fetchData() {
                const response = await axios.get(requests.fetchRecommendations)
                setMovie(response.data);
        return response;
        }

        fetchData();
    }, [])


    // Could improve on this part here and not make it so long
    const generateCarousel = () => {
        return movie?.map((movie, i) => {
            console.log(movie)
            return <Recommendations key={i} ImageURL={movie?.images.background.url} title={movie?.title} description={movie?.description.short}/>
        })
    }


    return (
        <div>
            <Banner ImageURL={movie[
                Math.floor(Math.random() * movie.length - 1)
            ]?.images?.background.url}/>
            
            <div className="weRecommend">
                <h2>Vi anbefaler ></h2>
            </div>
            <Row>
                { generateCarousel() }
            </Row>    
        </div>
    )
}

export default Homescreen;