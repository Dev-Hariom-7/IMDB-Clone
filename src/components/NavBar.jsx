import React from 'react';
import Logo from "../download.png"
import "./NavBar.css"
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div className="border
    flex item-center
    space-x-8
    pl-3 py-4
    ">
        <img src= {Logo} 
            className="w-[50px]"
            alt="logo" 
        />
        <Link to="/" className=" movie font-bold test-xl text-blue-400 cursor-pointer">Movies</Link>
        <Link to="/fav" className=" favourite font-bold test-xl text-blue-400 cursor-pointer">Favourites</Link>
    </div>
  );
};

export default NavBar;