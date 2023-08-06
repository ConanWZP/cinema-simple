import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import searchImage from './assets/svg/search.svg'
import FilmCard from "./components/FilmCard";


export type filmData = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

const App = () => {


    const apiURL = 'http://www.omdbapi.com/?apikey=63a84b75'
    const [films, setFilms] = useState<filmData | any>([])
    const [searchValue, setSearchValue] = useState('')
    const searchFilms = async (name: string) => {
        const response = await axios.get(`${apiURL}&s=${name}`)
        console.log(response.data)
        setFilms(response.data.Search)
    }


    return (
        <div className="App">
            <h1>Home Cinema</h1>
            <div className={`search`}>
                <input placeholder={`Let's find it`} value={searchValue} onChange={(event) => {
                    setSearchValue(event.target.value)
                }}/>
                <img src={searchImage} alt={`icon`} onClick={() => {
                    searchFilms(searchValue)
                }}/>
            </div>
            {
                films.length > 0 ?
                    <div className={`container`}>
                        {
                            films.map((film: filmData) => (
                                <FilmCard key={film.imdbID} film1={film}/>
                            ))
                        }
                    </div>
                    :
                    <div className={`empty`}>
                        <h2>Nothing found</h2>
                    </div>
            }
        </div>
    )

};

export default App;
