import React, { Component } from "react";
import "./Player.css";

class Player extends Component {
  render() {
    return (
      <label className="Player">
        Player {this.props.name}
        <input type="radio" name="player" value={this.props.value} />
      </label>
    );
  }
}

export default Player;
