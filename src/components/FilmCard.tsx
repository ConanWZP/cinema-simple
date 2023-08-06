import React, {FC} from "react";
import {filmData} from "../App";

interface FilmCardProps {
    film1: filmData
}

const FilmCard:FC<FilmCardProps> = ({film1}) => {


    return (
        <div className={`film`}>
            <div>
                <p>{film1.Year}</p>
            </div>
            <div>
                <img src={film1.Poster === 'N/A' ? 'https://via.placeholder.com/400' : film1.Poster} alt={film1.Title} />
            </div>

            <div>
                <span>{film1.Type}</span>
                <h3>{film1.Title}</h3>
            </div>

        </div>
    )
}


export default FilmCard