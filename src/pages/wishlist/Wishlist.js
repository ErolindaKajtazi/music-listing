import "./Wishlist.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/actions";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (albumId) => {
    dispatch(removeFromWishlist(albumId));
  };

  return (
    <div className="wishlist-container">
      <h1>Wishlist</h1>
      <ul className="wishlist">
        {wishlist.map((album) => (
          <li key={album.id}>
            {album.title} - {album.artist}
            <button onClick={() => handleRemoveFromWishlist(album.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;