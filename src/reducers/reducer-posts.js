import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

const INITIAL_STATE = { all:[], post: null };

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_POSTS:
      console.dir(state);
      console.dir(action.payload.data);
      return { ...state, all: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    case DELETE_POST:
      return { ...state, result: action.payload.data };
    default:
     return state;
   }
}
