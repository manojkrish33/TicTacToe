import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from '../Game/Game';

configure({ adapter: new Adapter() });

describe('<Game />', () => {

	it('Tests if setPlayer is being called when user clicks on start button', () => {
		let wrapper = mount(<Game />);
		const spy = jest.spyOn(wrapper.instance(), 'setPlayer');
		wrapper.setState({
			player: null
		});
		const mockEvent = {
			target: {
				player: {
					value: 'X'
				}
			}
		};
		wrapper.find('label.Player').first().simulate('click');
		wrapper.find('input.button').simulate('submit', mockEvent);
		expect(spy).toHaveBeenCalled();
		wrapper.unmount();
    });
    
    it('Tests if reset function is resetting the state values', () => {
		let wrapper = shallow(<Game />);
		wrapper.setState({
            player: 'X',
            winner: 'O',
            noOfMoves: 8
		});
		wrapper.instance().resetGame();
		expect(wrapper.instance().state.player).toEqual(null);
		expect(wrapper.instance().state.winner).toEqual(null);
		expect(wrapper.instance().state.noOfMoves).toEqual(0);
    });
    
    it('Tests if resetGame is being called when reset button is clicked', () => {
		let wrapper = mount(<Game />);
		const spy = jest.spyOn(wrapper.instance(), 'resetGame');
		wrapper.setState({
			player: 'O',
			winner: null,
			noOfMoves: 2
		});
		wrapper.find('input.button').simulate('click');
		expect(spy).toHaveBeenCalled();
		wrapper.unmount();
	});
});