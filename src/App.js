import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Reproductor from './components/Reproductor';
import Buscador from './components/Buscador';
import Item from './components/Item';
import Comentarios from './components/Comentarios';
import './App.css';

class App extends Component {

 constructor(){
  super();
  this.state = {
    items: [],
    isLoaded: false,
    valor: 'aczino',
    rSelected: 0,
    title : 'Aczino vs Cacha (GRAN FINAL) Ghetto Dreams League 2019',
    videoId : 'y6HTFknsh6Y',
    description : 'a familia de CANIVAL y FONOGRAFILMS',
    urlimagen: 'https://i.ytimg.com/vi/zVqC9RFwk4E/default.jpg'

  }

  this.handleSearch = this.handleSearch.bind(this);
  this.handleClick = this.handleClick.bind(this);
}

componentDidMount(valor){

  this.search(valor); 
}
componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.videoId !== prevProps.videoId) {
     this.setState({
        idvideo: this.props.videoId
      })
      this.search(this.props.videoId);
  }
}

search(query){

  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=`)
  .then((response) => {
    return response.json()
  })
  .then((recurso) => {
    this.setState({
      isLoaded: true,
      items: recurso
    })})

}

handleSearch(valor){
  this.setState({
    valor: valor
  })
  this.componentDidMount(valor);

}

handleClick(videoId, title, description,posicion){
 this.setState({
   title : title,
   videoId : videoId,
   description : description,
   rSelected: posicion
 });
}


render() {

  var { isLoaded, items} = this.state;
  if (!isLoaded) {
    return <div> loading... </div>
  }
  else
    return (
      <div className="App">
      <Container>
      <Row>
      <Col><Buscador onSearch={this.handleSearch}/></Col>
      </Row>
      <Row>
      <Col>
        <Row>
        <Col><Reproductor videoId={this.state.videoId} title={this.state.title} description={this.state.description} /></Col>
        </Row>
        <Row>
        <Col><Comentarios videoId={this.state.videoId}/></Col>
        </Row>
      </Col>

      <Col>
        <ListGroup>
          {items.items.map((item, index) => (         
            <ListGroupItem active={this.state.rSelected === index}>
            <Item onSelect={this.handleClick} videoId={item.id.videoId} title={item.snippet.title} description={item.snippet.description} urlimagen={item.snippet.thumbnails.default.url} valor={index}/>
            </ListGroupItem>
            ))};
        </ListGroup> 
      </Col>

      </Row>
      </Container>
      </div>
      );
}
}

export default App;
