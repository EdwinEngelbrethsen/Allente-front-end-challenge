import React, {useState, useEffect} from "react";
/* Component Imports */
import Banner from "../components/Banner";
import requests from "../contexts/requests";
import axios from "../contexts/axios";

/* CSS Imports */
import "../style/component-style/Topbar.css"
import "../style/component-style/Banner.css"




const Homescreen = () => {

    const [movie, setMovie] = useState([]);


    useEffect(() => {
        async function fetchData() {
                const response = await axios.get(requests.fetchTrending)
                setMovie(response.data.results[
                    Math.floor(Math.random() * response.data.results.length - 1)
                ]);
        return response;
        }

        fetchData();
    }, [])

    console.log(movie.backdrop_path)

    return (
        <div>
            <Banner ImageURL={movie.backdrop_path}/>
            
            {/* Footer? */}
        </div>
    )
}

export default Homescreen;