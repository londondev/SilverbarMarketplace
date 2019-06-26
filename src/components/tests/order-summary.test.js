import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import  OrderSummary  from '../order-summary';

const defaultProps = {
  orderSummary: [{unitPrice:100, quantity:200}, {unitPrice:200, quantity:400}],
  tableHeader: 'Test header'
};

describe('Order Summary', () => {

  it('render without crashing', () => {
    shallow(<OrderSummary {...defaultProps} />);
  });
  it('should render orders', () => {
    const renderedItem = shallow(<OrderSummary {...defaultProps}  />);
    expect(renderedItem.find('tr')).toHaveLength(4);
  });
  it('should match the snapshot', () =>{
    const renderedItem = renderer
    .create(<OrderSummary {...defaultProps} />)
    .toJSON();
    expect(renderedItem).toMatchSnapshot();
  })
});