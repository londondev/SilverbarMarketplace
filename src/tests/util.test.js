import { calculateSummary } from '../util';

const orders=[
  {orderId:1, userId:1, quantity:200, unitPrice:100, orderType:'BUY'},
  {orderId:2, userId:2, quantity:200, unitPrice:150, orderType:'BUY'},
  {orderId:3, userId:1, quantity:300, unitPrice:100, orderType:'BUY'}
]

it('should return empty array if we pass empty array', () => {
  expect(calculateSummary([]).length).toBe(0);
});

it('should group by unit price in order', () =>{
  const result=calculateSummary(orders);
  expect(result.length).toBe(2);
  expect(result[0]).toEqual({unitPrice:100, quantity:500});
  expect(result[1]).toEqual({unitPrice:150, quantity:200});
})

