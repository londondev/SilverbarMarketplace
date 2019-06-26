import { ADD_NEW_ORDER, CANCEL_ORDER, INIT_DATA_RECEIVED } from './constants';

export const addNewOrder = (order) => ({
  type: ADD_NEW_ORDER,
  order,
});

export const cancelOrder = (orderId) => ({
  type: CANCEL_ORDER,
  orderId,
});