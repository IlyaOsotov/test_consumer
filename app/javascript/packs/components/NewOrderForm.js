import React from 'react';

class NewOrderForm extends React.Component {
  state = {
    title: ''
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault()
    fetch("http://localhost:4000/api/v1/orders", {
      method: 'POST',
      mode: "no-cors"
    });
    this.setState({ title: '' });
  };

  render = () => {
    return (
      <div className="newOrderForm">
        <form onSubmit={this.handleSubmit}>
          <label>New order</label>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default NewOrderForm;
