import { useState, useEffect } from "react";
import axios from "axios"; 

import './index.css'

function App() {
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                setAdvice(advice); 
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); 

    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className= "button">
                    <span>GIVE ME ADVICE</span>
                </button>
            </div>
        </div>
    );
}

export default App;
