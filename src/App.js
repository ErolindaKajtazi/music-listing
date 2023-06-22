import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import MusicList from "./pages/musicList/MusicList";
import SingleAlbum from './pages/album/SingleAlbum'
import Wishlist from "./pages/wishlist/Wishlist";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path="/album" element={<MusicList />} />
            <Route exact path="/album/:id" element={<SingleAlbum />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
