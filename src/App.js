import './App.css';
import Banner from './components/Banner';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Favourites from './components/Favourites';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = "/" element = {
            <>
              <Banner />
              <Movies />
            </>
          }>
          </Route>

          <Route path = "/fav" element = {
            <Favourites />
          }>

          </Route>
          <Route path = "*" element = {<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;