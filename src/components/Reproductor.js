import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import YouTube from 'react-youtube';

class Reproductor extends Component {

render() {

 const opts = {
  height: '300',
  width: '500',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

      return (

        <ListGroup>
        <ListGroupItem >
        <ListGroupItemHeading>

        <YouTube
        videoId= {this.props.videoId}
        opts={opts}
        onReady={this._onReady}
        />
        {this.props.title}</ListGroupItemHeading>
        <ListGroupItemText>
        {this.props.description}
        </ListGroupItemText>
        </ListGroupItem>

        </ListGroup>
        );


  }

}

export default Reproductor;
