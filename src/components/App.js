// create your App component here
import React, { useState, useEffect } from "react";

function App(){
    const [imgSrc, setImgSrc] = useState(null)
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => setImgSrc(data.message))
    },[])
    if(!imgSrc){
        return <p>Loading...</p>
    }
    return <img src={imgSrc} alt='A Random Dog'></img>
}

export default App