import React, { Component } from "react";
import ChoosePlayer from "../ChoosePlayer/ChoosePlayer";
import "./Status.css";

class Status extends Component {
  handleSetPlayer(e) {
    this.props.setPlayer(e);
  }

  handleResetClick(e) {
    this.props.resetGame(e);
  }

  renderStatus() {
    if (this.props.winner) {
      return (
        <h4 className="win">
          Winner is {this.props.winner} !!!
          <input
            className="button"
            type="button"
            value="Reset Game"
            onClick={e => this.handleResetClick(e)}
          />
        </h4>
      );
    } else {
      if (this.props.moves === 9) {
        return (
          <h4 className="draw">
            Match is a Draw !!!
            <input
              className="button"
              type="button"
              value="Reset Game"
              onClick={e => this.handleResetClick(e)}
            />
          </h4>
        );
      } else {
        return this.props.player ? (
          <h4>
            Next player is {this.props.player}
            <input
              className="button"
              type="button"
              value="Reset Game"
              onClick={e => this.handleResetClick(e)}
            />
          </h4>
        ) : (
          <ChoosePlayer player={e => this.handleSetPlayer(e)} />
        );
      }
    }
  }

  render() {
    return <span>{this.renderStatus()}</span>;
  }
}

export default Status;
