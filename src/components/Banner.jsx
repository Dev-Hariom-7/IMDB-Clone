import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';

function Banner() {

  let [bannerMovie, setBannerMovie] = useState("");

  useEffect (() => {
    (function () {
      axios
      .get("https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38")
      .then((res) => {
          setBannerMovie(res.data.results[0]);
        });
    })();
  }, []);

  return (
    <>
        {
          bannerMovie === "" ? 
          <div className="flex justify-center">
            <Oval
              height="80"
              width="80"
              radius="9"
              color="gray"
              secondaryColor="gray"
              ariaLabel="loading"
            />
          </div>
         :
          <div className={`
          h-[40vh] md:h-[75vh]
          bg-center 
          bg-cover
          flex items-end`}
          style={{
            backgroundImage:
            `url(https://image.tmdb.org/t/p/original/t/p/original/${bannerMovie.backdrop_path})`
          }}
        >
          {console.log(bannerMovie)};
          <div className="
            text-xl
            md: text-3xl
            text-white
            bg-gray-900
            bg-opacity-50
            p-4
            text-center
            w-full"
          >
            {bannerMovie.title || bannerMovie.name}
          </div>
        </div>
        };
    </>
  );
};

export default Banner;