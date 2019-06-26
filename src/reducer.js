import { ADD_NEW_ORDER, CANCEL_ORDER } from './constants';
import { orders as initialState } from './data/data';


export function marketPlace(state = initialState, action){
  switch(action.type){
    case ADD_NEW_ORDER:
      return [...state, action.order];
    case CANCEL_ORDER:
      return state.filter(m => m.orderId !== action.orderId);
    default:
      return state;
  }
};