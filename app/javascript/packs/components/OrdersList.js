import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import NewOrderForm from './NewOrderForm';

class OrdersList extends React.Component {
  state = {
    Orders: []
  };

  handleReceivedOrder = response => {
    console.log(123)
    const { Order } = response;
    this.setState({
      Orders: [...this.state.Orders, Order]
    });
  };

  render = () => {
    const { Orders } = this.state;
    return (
      <div className="OrdersList">
        <ActionCableConsumer
          channel={{ channel: 'OrdersChannel' }}
          onReceived={this.handleReceivedOrder}
        />
        <h2>Orders</h2>
        <ul>{mapOrders(Orders)}</ul>
        <NewOrderForm />
      </div>
    );
  };
}

const mapOrders = (Orders) => {
  return Orders.map(Order => {
    return (
      <li key={Order.id}>
        {Order.content}
      </li>
    );
  });
};

export default OrdersList;