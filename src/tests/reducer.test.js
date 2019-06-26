import { marketPlace } from '../reducer';
import { orders } from '../data/data';
import { ADD_NEW_ORDER, CANCEL_ORDER } from '../constants';


const mockOrder = {
  orderId:1000, userId:1, quantity:200, unitPrice:100, orderType:'BUY'
}

it('should return initial state', () => {
  expect(marketPlace(undefined, {})).toBe(orders);
});

it('should add new object', () => {
  const result=marketPlace(undefined, {type:ADD_NEW_ORDER, order:mockOrder});
  expect(result.find(r=> r.orderId === 1000)).toBeTruthy();
});

it('should cancel the order', () => {
  const result=marketPlace(undefined, {type:CANCEL_ORDER, orderId:orders[0].orderId});
  expect(result.find(r=> r.orderId === orders[0].orderId)).toBeFalsy();
})