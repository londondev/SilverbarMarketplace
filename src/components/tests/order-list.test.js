import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import  OrderList  from '../order-summary';

const mockOrders=[
  {orderId:1, userId:1, quantity:200, unitPrice:100, orderType:'BUY'},
  {orderId:2, userId:2, quantity:200, unitPrice:150, orderType:'BUY'},
  {orderId:3, userId:1, quantity:300, unitPrice:100, orderType:'BUY'},
]
const defaultProps = {
  orderSummary: mockOrders
};

describe('Order List', () => {

  it('render without crashing', () => {
    shallow(<OrderList {...defaultProps} />);
  });

  it('should render orders', () => {
    const renderedItem = shallow(<OrderList {...defaultProps}  />);
    expect(renderedItem.find('tr')).toHaveLength(5);
  });

  it('should match the snapshot', () =>{
    const renderedItem = renderer.
                        create(<OrderList {...defaultProps}  />)
                        .toJSON();
    expect(renderedItem).toMatchSnapshot();
  })
});