import React from 'react';
import uuid from 'uuid'
import PropTypes from 'prop-types';

export default class OrderRegisterForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userId:'',
      quantity:'',
      unitPrice:'',
      orderType:'BUY'
    };
  }
  
  onSubmit = (event) => {
    event.preventDefault();
    this.props.addNewOrder({
      orderId: uuid.v4(),
      userId: this.state.userId,
      quantity: this.state.quantity,
      unitPrice: this.state.unitPrice,
      orderType: this.state.orderType
    });
    this.setState({      
      userId:'',
      quantity:'',
      unitPrice:'',
      orderType:'BUY'
    });
  }
  onUserIdChange = (event) => {
      this.setState({userId: event.target.value});
  }
  onQuantityChange = (event) => {
    this.setState({quantity: event.target.value});
  }
  onUnitPriceChange = (event) => {
    this.setState({unitPrice: event.target.value});
  }
  onOrderTypeChange = (event) => {
    this.setState({orderType: event.target.value});
  }
  render(){
    return (
      <div className='order-form'>
      <form onSubmit={this.onSubmit}>
      <div className='form-row'>
        <label>User Id:</label>
        <input
          type="text"
          className='input-text'
          autoFocus
          value={this.state.userId}
          onChange={this.onUserIdChange}
        />
        
        </div>
        <div className='form-row'>
        <label>Quantity:</label>
        <input
          type="text"
          className='input-text'
          autoFocus
          value={this.state.quantity}
          onChange={this.onQuantityChange}
        />
        </div>
        <div className='form-row'>
        <label>Unit Price:</label>
        <input
          type="text"
          className='input-text'
          value={this.state.unitPrice}
          onChange={this.onUnitPriceChange}
        />
        </div>
        <div className='form-row'>
          <label>
            <input type='radio' value='BUY' checked={this.state.orderType === 'BUY'} onChange={this.onOrderTypeChange} />
            BUY
          </label>
        <label>
          <input type='radio' value='SELL' checked={this.state.orderType === 'SELL'} onChange={this.onOrderTypeChange} />
            SELL
        </label>
      </div>
        <button>Register Order</button>
      </form>
    </div>
    )
  }
}

OrderRegisterForm.propTypes = {
  addNewOrder: PropTypes.func,
};