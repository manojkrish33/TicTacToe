import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChoosePlayer from '../ChoosePlayer/ChoosePlayer';
import Player from '../Player/Player';

configure({ adapter: new Adapter() });

describe('<ChoosePlayer />', () => {
	it('checks if the ChoosePlayer element is rendered properly', () => {
		let wrapper = shallow(<ChoosePlayer />);
		expect(
			wrapper.containsAllMatchingElements([
				<Player name="X" value="X" />,
				<input className="button" type="submit" value="Click to Start" />
			])
		).toEqual(true);
	});

	it('checks if the ChoosePlayer form submit triggers the handleFormSubmit function', () => {
		let player = jest.fn();
		let wrapper = mount(<ChoosePlayer player={player}/>);
		let spy = jest.spyOn(wrapper.instance(), 'handleFormSubmit');
		wrapper.find('label.Player').first().simulate('click');
		const mockEvent = {
			target: {
				player: {
					value: 'X'
				}
			}
		};
		wrapper.find('input.button').simulate('submit', mockEvent);
		expect(spy).toHaveBeenCalled();
		wrapper.unmount();
	});
});
