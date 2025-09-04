import {useEffect, useState} from "react";

const Hero = () => {


    const [joke, setJoke] = useState("");
    const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single"

    const getJoke = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setJoke(data.joke);
        } catch (error) {
            setJoke("Sorry, couldn't fetch a joke right now!");
        }
    }

    useEffect(() => {
        getJoke();
    }, []);

    return (
        <div className='Hero'>
            <h2>Click the button below to get a new joke.</h2>
            <button onClick={() => getJoke()}>Generate new Joke</button>
            <p className='joke-text'>{joke}</p>
        </div>
    )
}
export default Hero
