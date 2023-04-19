import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import Pagination from './Pagination';

function Movies() {

  let [movies, setMovies] = useState([]);
  let [pageNum, setPageNum] = useState(1);
  let [hovered, setHovered] = useState("");
  let [favourites, setFavourites] = useState([]);

  // Making API request--
  useEffect (() => {
    (function () {
      axios
      .get("https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38&page="+pageNum).then((res) => {
          setMovies(res.data.results);
        });
    })();
  }, [pageNum]);

  // Pagination handlers--
  const onPrevious = () => {
    if(pageNum > 1){
      setPageNum(pageNum - 1);
    }
  };

  const onNext = () => {
      setPageNum(pageNum + 1);
  };
  
  // Emoji handlers show/hide on :hover--
  const showEmoji = (id) => {
    setHovered(id);
  };

  const hideEmoji = () => {
    setHovered("");
  };

  // add/remove emojis to/from favourites--
  const addEmoji = (id) => {
    const newFav =[...favourites, id];
    setFavourites(newFav);
  };

  const removeEmoji = (id) => {
    // whichever elem --> not equal to my id
    const filteredFav = favourites.filter((elem) => {
      return elem !== id;
    });
    setFavourites(filteredFav);
  };

  return (
    <div className="mt-8"><div
        className="
        mb-8
        font-extrabold
        text-3xl
        text-center"
    >
          Trending Movies</div>
        <div className="
            flex
            flex-wrap
            justify-center"
        >
          {
            movies.length === 0 ?
            <div className="flex justify-center">
            <Oval
              height="80"
              width="80"
              radius="9"
              color="gray"
              secondaryColor="gray"
              ariaLabel="loading"
            />
          </div> :
            movies.map((movie) => {
              return <div

                onMouseOver = {
                  () => {showEmoji(movie.id)}
                }

                onMouseLeave = {
                  () => {hideEmoji(movie.id)}
                }

              key={movie.id}
              className="
              bg-center
              bg-cover
              w-[160px]
              h-[30vh]
              md: h-[40vh]
              md: w-[180px]
              m-4
              rounded-xl
              hover:scale-110
              duration-300
              flex items-end
              relative"
              style={{
                backgroundImage:
            `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`
              }}
            >
              <div className="
                p-2
                bg-gray-400
                absolute
                top-1
                right-1
                rounded-xl"

                style={{
                  display: hovered === movie.id ?
                  "block" : "none"
                }}
              >

                {
                  favourites.includes(movie.id) === false ? 
                  <div className="
                    text-xl
                    cursor-pointer"
                    onClick={() => {addEmoji(movie.id)}}
                  >
                    😍
                  </div> :
                  <div className="
                  text-xl
                  cursor-pointer"
                  onClick={() => {removeEmoji(movie.id)}}
                  >
                    ❌
                </div>
                }
              </div>

              <div className="
                text-white
                bg-gray-900
                bg-opacity-70
                p-2
                text-center
                w-full
                rounded-b-xl
                font-bold"
              >
                {movie.title || movie.name}
              </div>
            </div> 
            })
          }
        </div>
        <Pagination 
          pageNum = { pageNum }
          onPrevious = { onPrevious }
          onNext = { onNext }
        ></Pagination>
    </div>
  );
};

export default Movies;