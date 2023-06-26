import "./singleAlbum.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleAlbum = () => {
  const album_id = useParams("id");
  const [album, setAlbum] = useState();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/ridoansaleh/my-music-api/songs/${album_id.id}`
    )
      .then((response) => response.json())
      .then((data) => setAlbum(data))
      .catch((error) => console.log(error));
  }, []);

  if (!album) {
    return <div>Loading...</div>;
  }
  return (
    <div className="album-container">
      <h1>Single Album Page</h1>
      <p className="al-desc">Details about this particular album (song)...</p>
      <div className="album">
      <ion-icon name="musical-notes-outline" size={80}></ion-icon>
        <h2>Song: {album?.title}</h2>
        <p>Artist: {album?.singer}</p>
        <p>Genre: {album?.genre}</p>
      </div>
    </div>
  );
};

export default SingleAlbum;
