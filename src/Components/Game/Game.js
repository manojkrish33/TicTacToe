import React, { Component } from "react";
import Status from "../Status/Status";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      winner: null,
      noOfMoves: 0,
      board: Array(9).fill(null),
      winnerCombinations: [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"]
      ]
    };
  }

  setPlayer(player) {
    this.setState({ player });
  }

  resetGame(e) {
    this.setState({
      player: null,
      winner: null,
      noOfMoves: 0,
      board: Array(9).fill(null)
    });
  }

  checkWinner() {
    let winLines = this.state.winnerCombinations;
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      let board = this.state.board;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.setState({
          winner: this.state.player
        });
      }
    }
  }

  handleClick(index) {
    if (!this.state.winner && this.state.player && this.state.noOfMoves <= 9) {
      let newBoard = this.state.board;
      let moves = this.state.noOfMoves;
      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player;
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X",
          noOfMoves: moves + 1
        });
        this.checkWinner();
      }
    }
  }

  renderBoxes() {
    return this.state.board.map((box, index) => (
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}{" "}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <Status
          setPlayer={e => {
            this.setPlayer(e);
          }}
          resetGame={e => {
            this.resetGame(e);
          }}
          winner={this.state.winner}
          player={this.state.player}
          moves={this.state.noOfMoves}
        />
        <div className="board">{this.renderBoxes()}</div>
      </div>
    );
  }
}

export default Game;
