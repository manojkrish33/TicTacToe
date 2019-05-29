import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Status from '../Status/Status';

configure({ adapter: new Adapter() });

describe('<Status />', () => {

	it('Tests if handleSetPlayer is being called when user clicks on start button', () => {
        let handleSetPlayer = jest.fn();
        let wrapper = mount(<Status setPlayer={(e) => {
            handleSetPlayer(e);
        }}/>);
		const spy = jest.spyOn(wrapper.instance(), 'handleSetPlayer');
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
