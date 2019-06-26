import React from 'react';
import PropTypes from 'prop-types';
import OrderRegisterForm  from './order-register-form';
import OrderList from './order-list';
import OrderSummary from './order-summary';
import { connect } from 'react-redux';
import { cancelOrder, addNewOrder } from '../actions';
import { calculateSummary } from '../util';
import '../style/styles.scss';


export const MarketPlace =({orders, onCancelOrder, onAddNewOrder}) => {
  const getOrderSummary = (orderType) => {
    const ordersByType = orders.filter(o => o.orderType === orderType);
    return calculateSummary(ordersByType);
  }

    return (
      <div className='container'>
        <div className='order-form-container'>
          <OrderRegisterForm addNewOrder={onAddNewOrder}/>
        </div>
        <div className='content'>
            <div><OrderList orders={orders} cancelOrder={onCancelOrder} /></div>
            <div>
              <div className='order-summary'><OrderSummary orderSummary={getOrderSummary('BUY').reverse()} tableHeader='BUY'/></div>
              <div className='order-summary'><OrderSummary orderSummary={getOrderSummary('SELL')} tableHeader='SELL'/></div>
            </div>
        </div>
      </div>
      )
}

MarketPlace.propTypes = {
  orders: PropTypes.array.isRequired,
  onCancelOrder: PropTypes.func,
  onAddNewOrder: PropTypes.func,
};

const mapStateToProps = state => {
  return { 
    orders: state
  };
};
const mapDispatchToProps = dispatch => ({
  onCancelOrder: orderId => dispatch(cancelOrder(orderId)),
  onAddNewOrder: order => dispatch(addNewOrder(order))
});

export default connect(mapStateToProps,mapDispatchToProps)(MarketPlace);

