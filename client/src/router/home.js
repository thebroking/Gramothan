import React from 'react';


const Home = () => {

    return(
        <div >
            <h1 class="wel-gram">Welcome to<br/><span class="gram"><span class="sub-gram">Gram</span>othan</span></h1>
            <hr/>
            <h3 class="about">About</h3>
            <p class="desc">
                The main motive of Gramothan is to make rural people aware of the corruption that is happening around them.<br/> Assisting them with the common problems. Also making them aware of the current yojna's that government has put up for them.<br/>For further details click on the below link : 
            </p>
            <a className="p-2 text-black btn theme" href="/scheme">Get Latest Schemes</a>
        </div>
    )
    
}

export default Home;