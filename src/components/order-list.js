import React from 'react';
import PropTypes from 'prop-types';

const OrderList = ({orders, cancelOrder}) =>{
  return (
    <div>
      <table>
        <tbody>
        <tr><th colSpan='5'>Order List</th></tr>
        <tr>
          <th>User Id</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Order Type</th>
          <th></th>
        </tr>
        {orders.map(o => {
          return <tr key={o.orderId}>
                   <td>{o.userId}</td>
                   <td>{o.quantity}</td>
                   <td>{o.unitPrice}</td>
                   <td>{o.orderType}</td>
                   <td><input type='button' className='small-button' value='Cancel' onClick={() => cancelOrder(o.orderId)}/></td>
                 </tr>
        })}
        </tbody>
      </table>
    </div>
  )
}

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
  cancelOrder: PropTypes.func,
};

export default OrderList;