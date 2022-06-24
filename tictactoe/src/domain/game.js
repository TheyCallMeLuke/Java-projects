import React from 'react';
import {boardSize} from './board.js';
import {Board} from './board.js';

const xPlaysFirst = true;

export class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boardHistory: {
                type: Array,
                default: Array(9).fill(null),
            },
            boardHistory: [{
                currentSquares: Array(9).fill(null),
            }],
            moveHistory: [{
                move: Array(2).fill(null)
            }],
            stepNumber: 0,
            xIsNext: xPlaysFirst,
            currentlySelectedItem: Number
        };

    }

    toCoordinate(i) {
        const col = i % boardSize;
        const row = Math.floor(i / boardSize);
        return [col, row];
    }

    handleClick(i) {
        const boardHistory = this.state.boardHistory
            .slice(0, this.state.stepNumber + 1);
        const moveHistory = this.state.moveHistory;
        const currentBoard = boardHistory[boardHistory.length - 1];
        const currentSquares = currentBoard.currentSquares.slice();
        if (calculateWinner(currentSquares) || currentSquares[i]) {
            return;
        }
        const playerTurn = this.state.xIsNext ? 'X' : 'O';
        currentSquares[i] = playerTurn;
        const move = this.toCoordinate(i);
        this.setState({
            boardHistory: boardHistory.concat([{
                currentSquares: currentSquares
            }]),
            moveHistory: moveHistory.concat([{
                move: move
            }]),
            stepNumber: boardHistory.length,
            xIsNext: !this.state.xIsNext,
            currentlySelectedItem: null,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === (xPlaysFirst ? 0 : 1)
        })
    }

    render() {
        const boardHistory = this.state.boardHistory;
        const moveHistory = this.state.moveHistory;
        const currentBoard = boardHistory[this.state.stepNumber];
        const winner = calculateWinner(currentBoard.currentSquares);

        const moves = boardHistory.map((step, moveNumber) => {
            const move = moveHistory[moveNumber];
            const desc = moveNumber ?
                `Move to (${move.move[0]}, ${move.move[1]})` :
                'Go to game start';
            return (
                <li key={moveNumber}>
                    <button
                        onClick={() => {
                            this.jumpTo(moveNumber);
                            this.setState({
                                currentlySelectedItem: moveNumber
                            });
                        }}
                        style={this.state.currentlySelectedItem === moveNumber ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}
                    >{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        currentSquares={currentBoard.currentSquares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
                <div className='sort-button'>
                    <button onClick={() => {
                        this.setState({
                            boardHistory: this.state.boardHistory.reverse(),
                            moveHistory: this.state.moveHistory.reverse(),
                        })
                    }
                    }>
                        Sort history
                    </button>
                </div>
            </div>
        );
    }
}

function calculateWinner(currentSquares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (currentSquares[a] && currentSquares[a] === currentSquares[b] && currentSquares[a] === currentSquares[c]) {
            return currentSquares[a];
        }
    }
    return null;
}