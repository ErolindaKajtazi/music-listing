import "./MusicList.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../redux/actions";

const MusicList = () => {
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/ridoansaleh/my-music-api/songs")
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddToWishlist = (album) => {
    dispatch(addToWishlist(album));
  };

  return (
    <div className="song-container">
      <h1 className="music-header">Music List</h1>
      <ul className="song-list">
        {songs.map((song) => (
          <div key={song.id} className="song">
            <ion-icon name="musical-notes-outline" size={80}></ion-icon>
            <Link to={`/album/${song.id}`}>{song.title}</Link>
            <button className="btn music-btn" onClick={() => handleAddToWishlist(song)}>
              Add to Wishlist
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
