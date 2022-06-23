import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import React, { useEffect, useState } from "react";
import { genre, trending } from "../../api/api";

export default function Featured({ type }) {
  const [movie, setMovie] = useState([]);

  const fetchMovie = async () => {
    let result = await fetch(trending);
    result = await result.json();
    setMovie(
      result.results[Math.floor(Math.random() * result.results.length - 1)]
    );
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const [gen, setGen] = useState([]);

  const fetchapi = async () => {
    let result = await fetch(genre);
    result = await result.json();
    setGen(result.genres);
  };

  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name='genre' id='genre'>
            {gen.map((item, i) => (
              <option key={i}>{item.name}</option>
            ))}
          </select>
        </div>
      )}
      <img
        src={`https://images.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt=''
      />
      <div className='info'>
        <h1 className='desc'>{movie?.original_title}</h1>
        <span className='desc'>{movie?.overview}</span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
