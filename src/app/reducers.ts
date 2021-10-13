import characterReducer from 'features/character/characterSlice';
import { combineReducers } from 'redux';

const reducers = {
  characters: characterReducer,
};

export default combineReducers(reducers);
