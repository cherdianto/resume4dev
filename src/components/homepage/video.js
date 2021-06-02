import React, { Component } from 'react'
import { Player, ControlBar, BigPlayButton } from 'video-react'
import '../../../node_modules/video-react/dist/video-react.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const sources = {
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
}

export default class videoSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: sources.bunnyMovie
    };
  }

  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state) {
    this.setState({ player: state});
  }

  render() {
    return (
      <div>
        <div className="playerWrapper">
          <Player 
            ref={player => {
              this.player = player;
            }}
            autoPlay
          >
            <source src={this.state.source} />
            <ControlBar autoHide={false} />
            <BigPlayButton position="center" />
          </Player>
        </div>
      </div>
    );
  }
}
