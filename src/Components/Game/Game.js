import React , {Component} from 'react';
import Status from '../Status/Status';

class Game extends Component {

    constructor(props){
        super(props);
        this.state = {
            player : null
        }
    }

    setPlayer(player) {
		this.setState({ player });
    }
    
    resetGame(e) {
		this.setState({
			player: null,
		});
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
                    player={this.state.player} />
                <h4>Board </h4>
            </div>
        );
    }

}

export default Game;