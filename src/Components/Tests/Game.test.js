import React from "react";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Game from "../Game/Game";

configure({ adapter: new Adapter() });

describe("<Game />", () => {
  let winnerCombinations = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
  ];

  it("Tests if setPlayer is being called when user clicks on start button", () => {
    let wrapper = mount(<Game />);
    const spy = jest.spyOn(wrapper.instance(), "setPlayer");
    wrapper.setState({
      player: null
    });
    const mockEvent = {
      target: {
        player: {
          value: "X"
        }
      }
    };
    wrapper
      .find("label.Player")
      .first()
      .simulate("click");
    wrapper.find("input.button").simulate("submit", mockEvent);
    expect(spy).toHaveBeenCalled();
    wrapper.unmount();
  });

  it("Tests if reset function is resetting the state values", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      player: "X",
      winner: "O",
      noOfMoves: 8
    });
    wrapper.instance().resetGame();
    expect(wrapper.instance().state.player).toEqual(null);
    expect(wrapper.instance().state.winner).toEqual(null);
    expect(wrapper.instance().state.noOfMoves).toEqual(0);
  });

  it("Tests if resetGame is being called when reset button is clicked", () => {
    let wrapper = mount(<Game />);
    const spy = jest.spyOn(wrapper.instance(), "resetGame");
    wrapper.setState({
      player: "O",
      winner: null,
      noOfMoves: 2
    });
    wrapper.find("input.button").simulate("click");
    expect(spy).toHaveBeenCalled();
    wrapper.unmount();
  });

  it("Tests if checkWinner function sets winner if X is winning in first row", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      player: "X",
      winner: null,
      board: ["X", "X", "X", "O", "x", "O", "O", "O", "X"],
      noOfMoves: 9,
      winnerCombinations: winnerCombinations
    });
    wrapper.instance().checkWinner();
    expect(wrapper.instance().state.winner).toEqual("X");
  });

  it("Tests if checkWinner function sets winner if X is winning in first column", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      player: "X",
      winner: null,
      board: ["X", "O", "O", "X", "O", "O", "X", "X", "X"],
      noOfMoves: 9,
      winnerCombinations: winnerCombinations
    });
    wrapper.instance().checkWinner();
    expect(wrapper.instance().state.winner).toEqual("X");
  });

  it("Tests if checkWinner function sets winner if X is winning in a diagonal", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      player: "X",
      winner: null,
      board: ["X", "O", "O", "O", "X", "X", "O", "X", "X"],
      noOfMoves: 9,
      winnerCombinations: winnerCombinations
    });
    wrapper.instance().checkWinner();
    expect(wrapper.instance().state.winner).toEqual("X");
  });

  it("Tests if handleClick doesnot update the counter and board if there is a winner", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      player: "O",
      winner: "X",
      board: ["X", "X", "X", "O", "x", "O", "O", null, null],
      noOfMoves: 7,
      winnerCombinations: winnerCombinations
    });
    wrapper.instance().handleClick(7);
    expect(wrapper.instance().state.board[7]).toEqual(null);
    expect(wrapper.instance().state.board[8]).toEqual(null);
  });

  it("Tests if handleClick doesnot update the counter and board if there is no player", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null),
      noOfMoves: 0,
      winnerCombinations: winnerCombinations
    });
    wrapper.instance().handleClick(0);
    expect(wrapper.instance().state.board).toEqual([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]);
  });

  it("Tests if handleClick doesnot update the board if user tries to click after board is full", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      player: "O",
      winner: null,
      board: ["X", "X", "O", "O", "x", "O", "O", "O", "X"],
      noOfMoves: 9,
      winnerCombinations: winnerCombinations
    });
    wrapper.instance().handleClick(8);
    expect(wrapper.instance().state.board).toEqual([
      "X",
      "X",
      "O",
      "O",
      "x",
      "O",
      "O",
      "O",
      "X"
    ]);
  });

  it("Tests if handleClick updates the board if user tries to click in a valid move", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      player: "X",
      winner: null,
      board: ["X", "X", null, null, null, null, null, null, null],
      noOfMoves: 2,
      winnerCombinations: winnerCombinations
    });
    wrapper.instance().handleClick(8);
    expect(wrapper.instance().state.board).toEqual([
      "X",
      "X",
      null,
      null,
      null,
      null,
      null,
      null,
      "X"
    ]);
  });

  it("Tests if setPlayer is being called when user clicks on start button", () => {
    let wrapper = mount(<Game />);
    const spy = jest.spyOn(wrapper.instance(), "setPlayer");
    wrapper.setState({
      player: null,
      winner: null,
      board: [null, null, null, null, null, null, null, null, null],
      noOfMoves: 0,
      winnerCombinations: winnerCombinations
    });
    const mockEvent = {
      target: {
        player: {
          value: "X"
        }
      }
    };
    wrapper
      .find("label.Player")
      .first()
      .simulate("click");
    wrapper.find("input.button").simulate("submit", mockEvent);
    expect(spy).toHaveBeenCalled();
    wrapper.unmount();
  });

  it("Tests if setPlayer updates the state with proper player that is passed", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      player: "O",
      winner: null,
      board: ["X", "X", null, null, null, null, null, null, null],
      noOfMoves: 2,
      winnerCombinations: winnerCombinations
    });
    wrapper.instance().setPlayer("X");
    expect(wrapper.instance().state.player).toEqual("X");
  });

  it("Tests if checkWinner function doesnot set any winner if no match found", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      player: "X",
      winner: null,
      board: ["X", "X", "O", "O", "x", "O", "O", "O", "X"],
      noOfMoves: 9,
      winnerCombinations: winnerCombinations
    });
    wrapper.instance().checkWinner();
    expect(wrapper.instance().state.winner).toEqual(null);
  });

  it("Tests if handleClick is being called when user clicks on any box", () => {
    let wrapper = mount(<Game />);
    const spy = jest.spyOn(wrapper.instance(), "handleClick");
    wrapper.setState({
      player: "O",
      winner: null,
      board: [null, null, null, null, null, null, null, null, null],
      noOfMoves: 0,
      winnerCombinations: winnerCombinations
    });
    wrapper.instance().handleClick(0);
    console.log(wrapper.instance().state.player);
    expect(wrapper.instance().state.player).toEqual("X");
    wrapper.unmount();
  });

  it("Tests if handleClick is being called when user clicks on any box", () => {
    let wrapper = mount(<Game />);
    const spy = jest.spyOn(wrapper.instance(), "handleClick");
    wrapper.setState({
      player: "X",
      winner: null,
      board: [null, null, null, null, null, null, null, null, null],
      noOfMoves: 0,
      winnerCombinations: winnerCombinations
    });
    wrapper
      .find("div.box")
      .first()
      .simulate("click");
    expect(spy).toHaveBeenCalled();
    wrapper.unmount();
  });
});
