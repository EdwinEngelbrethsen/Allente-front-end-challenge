import React from 'react';

const Topbar = () => {

    return (
        <div className="topbar topbar-background">
            <div className="topbar-content">
                <img className="topbar-logo" src="https://img-cdn.b17g.net/b9cdbd69-4bbb-4324-a54e-aaf1fadb3454/Star_None_x300.png" alt=""
                />

                <div className="searchbar-content">
                    <input className="searchbox" placeholder="Skrive her for å søke..."></input>
                    <button className="search-btn">Søk</button>
                </div>

                <button className="loginbtn">Logg på</button>
            </div>  
        </div>
    )
}

export default Topbar;