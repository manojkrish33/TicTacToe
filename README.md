# Welcome to Tic-Tac-Toe

Tic-tac-toe is a paper-and-pencil game for two players, _X_and _O_, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

## Prerequisite

[Node](https://nodejs.org/en/) has to be pre-installed.

## Installation

Navigate to root directory where the package.json is present and run the following command.

```bash
npm install
```

## Starting Application

Navigate to root directory where the package.json is present and run the following command.

```bash
npm start
```
Application will start and it will open in the default browser, if it fails to open use the [link](http://localhost:3000/).

## Test Application

Navigate to root directory where the package.json is present and run the following command to check the unit testing results.

```bash
npm test
```
## Test Coverage

Navigate to root directory where the package.json is present and run the following command to check the Test Coverage for the application.

```bash
npm test -- --coverage
```

## This App consists of 


### _Header Component
   This will loading the header component of the application
   
### _Game Component
   This will have the functionality to load the game and the actions performed in the game.

### _Status Component
   This will have functionality related to the status of the game like Radio button to select the first player (X or O)/ Next Player / Winner / Match is a Draw.
   
### _ChoosePlayer Component
   This will have functionality to select the first player by selecting one of the radio button and submitting the form.
   
### _Player Component
   This will have functionality to show a Player with name and a clickable Radio button .