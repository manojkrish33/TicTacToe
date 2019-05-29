import React, { Component } from 'react';
import ChoosePlayer from '../ChoosePlayer/ChoosePlayer';
import './Status.css';

class Status extends Component {

    handleSetPlayer(e) {
		this.props.setPlayer(e);
    }
    
    render(){
        return <ChoosePlayer player={(e) => this.handleSetPlayer(e)} />
    }

}

export default Status;