import { createStore, combineReducers } from 'redux';
import reducer from './reducer';

// Combine reducers
const rootReducer = combineReducers({
  wishlist: reducer,
  // Add other reducers if needed
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;