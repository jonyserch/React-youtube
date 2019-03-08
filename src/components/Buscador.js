import React, { Component } from 'react';
import { Button } from 'reactstrap';



class Buscador extends Component {

  constructor(){
    super();
    this.state = {
      valor: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e){
    const {value} = e.target;
    this.setState({
      valor : value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state.valor)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
      <input type="text" name="Buscar"  onChange={this.handleInput} />
      </label>
      <Button color="primary" type="submit" value="Buscar" >Buscar</Button>
      </form>

      );
  }

}

export default Buscador;
