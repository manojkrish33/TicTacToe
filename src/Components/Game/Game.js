import React , {Component} from 'react';
import Status from '../Status/Status';
import './Game.css'

class Game extends Component {

    constructor(props){
        super(props);
        this.state = {
            player : null,
            winner: null,
            noOfMoves: 0,
            board: Array(9).fill(null)
        }
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
    
    renderBoxes() {
		return this.state.board.map((box, index) => (
			<div className="box" key={index} onClick={() => this.handleClick(index)}>
				{box}{' '}
			</div>
		));
	}

    render(){
        return(
            <div>
                <Status setPlayer={(e) => {
						this.setPlayer(e);
                    }}
                    resetGame={(e) => {
						this.resetGame(e);
					}}
                    winner={this.state.winner}
					player={this.state.player}
					moves={this.state.noOfMoves} />
                <div className="board">{this.renderBoxes()}</div>
            </div>
        );
    }

}

export default Game;