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
      <div className="album">
        <h2>{album?.title}</h2>
        <p>{album?.artist}</p>
        <p>{album?.genre}</p>
      </div>
    </div>
  );
};

export default SingleAlbum;
