import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './types';

const addToWishlist = (album) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: album,
  };
};

const removeFromWishlist = (albumId) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: albumId,
  };
};

export {addToWishlist, removeFromWishlist};