import { addNewOrder, cancelOrder } from '../actions';
import { ADD_NEW_ORDER, CANCEL_ORDER } from '../constants';

const mockOrder = {
  orderId:1, userId:1, quantity:200, unitPrice:100, orderType:'BUY'
}

it('should return addNewOrder action', () => {
   const result= addNewOrder(mockOrder);
   expect(result).toEqual({
    type: ADD_NEW_ORDER,
    order:mockOrder,
  })
});

it('should return cancelOrder action', () => {
  const result= cancelOrder(mockOrder.orderId);
  expect(result).toEqual({
   type: CANCEL_ORDER,
   orderId:mockOrder.orderId,
 })
});