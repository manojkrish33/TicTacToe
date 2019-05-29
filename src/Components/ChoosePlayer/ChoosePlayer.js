import React, { Component } from "react";
import "./ChoosePlayer.css";
import Player from "../Player/Player";

class ChoosePlayer extends Component {
  handleFormSubmit(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }
  render() {
    return (
      <form onSubmit={e => this.handleFormSubmit(e)}>
        <span>Choose the First Player: </span>
        <Player name="X" value="X" />
        <Player name="O" value="O" />
        <input className="button" type="submit" value="Click to Start" />
      </form>
    );
  }
}

export default ChoosePlayer;
