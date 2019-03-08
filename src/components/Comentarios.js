import React, { Component } from 'react';

import { Row } from 'reactstrap';

import { Media } from 'reactstrap';

import { Spinner } from 'reactstrap';




class Comentarios extends Component {
 constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      value: '',
      idvideo: ''
    }

  }
    componentDidMount(){
      this.search(this.props.videoId);
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

    fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${query}&key=`)
    .then((response) => {
      return response.json()
    })
    .then((recurso) => {
      this.setState({
        isLoaded: true,
        items: recurso
      })})

  }




render() {
   var { isLoaded, items} = this.state;

   if (!isLoaded) {
    return <div> <Spinner color="primary" /> </div>
  }
  else
      return (
      
         items.items.map(item => (
      
        <Row>
        <Media>
        <Media left top href="#">
  <Media object src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="Generic placeholder image" />
      </Media>
      <Media body>
      <Media heading>
       {item.snippet.topLevelComment.snippet.authorDisplayName}
      </Media>
      {item.snippet.topLevelComment.snippet.textOriginal}   
        </Media>
        </Media>
        </Row>
        ))


        );


  }

}

export default Comentarios;
