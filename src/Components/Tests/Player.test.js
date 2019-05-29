import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "../Player/Player";

configure({ adapter: new Adapter() });

describe("<Status />", () => {
  it("checks if the Player element is rendered properly", () => {
    let wrapper = shallow(<Player name="X" value="X" />);
    expect(wrapper.text()).toMatch("Player X");
  });
});
