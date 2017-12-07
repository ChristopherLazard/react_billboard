import React from 'react';

class ChartForm extends React.Component{
  state = {name: ''}

  handleChange = (e) => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.name);
    this.setState({ name: ''})

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Add a Song'
            required
            value={this.state.name}
            onChange={this.handleChange} />
      )
    }

  }

}








export default ChartForm;