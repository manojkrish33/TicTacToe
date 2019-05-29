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
});