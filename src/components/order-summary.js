import React from 'react';
import PropTypes from 'prop-types';

const OrderSummary = ({orderSummary, tableHeader}) => {
  return (
    <div>
      <table>
        <tbody>
        <tr><th colSpan='2'>Order Summary({tableHeader})</th></tr>
        <tr>
          <th>Unit Price</th>
          <th>Quantity</th>
        </tr>
        {orderSummary.map((o,i) => {
          return <tr key={i}>
                   <td>£{o.unitPrice}</td>
                   <td>{o.quantity}</td>
                 </tr>
        })}
        </tbody>
      </table>
    </div>
  )
}

OrderSummary.propTypes = {
  orderSummary: PropTypes.array.isRequired,
  tableHeader: PropTypes.string
};

export default OrderSummary;