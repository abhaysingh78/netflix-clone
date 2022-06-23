import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List({ title, api }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const [movie, setMovie] = useState([]);

  const fetchMovie = async () => {
    let result = await fetch(api);
    result = await result.json();
    setMovie(result.results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const listRef = useRef();

  const handleClick = direction => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className='list'>
      <span className='listTitle'>{title}</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined
          className='sliderArrow left'
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className='container' ref={listRef}>
          {movie.map(
            (item, i) =>
              item.backdrop_path && (
                <ListItem
                  key={i}
                  lan={item.original_language}
                  adults={item.adult}
                  index={i}
                  name={item.original_name || item.original_title}
                  src={`https://images.tmdb.org/t/p/original/${item.backdrop_path}`}
                />
              )
          )}
        </div>
        <ArrowForwardIosOutlined
          className='sliderArrow right'
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
