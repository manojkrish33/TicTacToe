import React, { Component } from 'react';
import ChoosePlayer from '../ChoosePlayer/ChoosePlayer';
import './Status.css';

class Status extends Component {

    handleSetPlayer(e) {
		this.props.setPlayer(e);
    }

    handleResetClick(e) {
		this.props.resetGame(e);
	}

    renderStatus() {
        return this.props.player ? (
            <h4>
                Next player is {this.props.player}
                <input
                    className="button"
                    type="button"
                    value="Reset Game"
                    onClick={(e) => this.handleResetClick(e)}
                />
            </h4>
        ) : (
            <ChoosePlayer player={(e) => this.handleSetPlayer(e)} />
        );
    }
    
    render(){
        return <span>{this.renderStatus()}</span>;
    }

}

export default Status;