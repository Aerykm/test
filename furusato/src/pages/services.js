import React, { Component } from 'react';
import { voteOne, voteTwo, voteThree } from "../actions/index.js";
import "../pages/services.css";
import Chainsaw from "../images/chainsaw.png";
import Kaiju from "../images/kaiju.jpg";
import Garou from "../images/garou.jpg";

class Services extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store
  }

  handleVoteOne = () => {
    this.store.dispatch(voteOne());
  }

  handleVoteTwo = () => {
    this.store.dispatch(voteTwo());
  }

  handleVoteThree = () => {
    this.store.dispatch(voteThree());
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <h2>Which manga adaptation are you most excited to see??</h2>
          <h4>Click on a hero below to vote!</h4>
          <br />
          <div className="icon-set">
            <div className="vote-icon">
              <img src={Chainsaw} height="96" alt="chainsaw" onClick={this.handleVoteOne}></img>
            </div>
            <div className="vote-icon">
              <img src={Kaiju} height="96" alt="Kaiju" onClick={this.handleVoteTwo}></img>
            </div>
            <div className="vote-icon">
              <img src={Garou} height="96" alt="garou" onClick={this.handleVoteThree}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;


