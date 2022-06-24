import React from 'react';
import ReactDOM from 'react-dom/client';
import {Square} from './square.js';

export const boardSize = 3;

export class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square
                value={this.props.currentSquares[i]}
                onClick={() => this.props.onClick(i)}
                key={i}
            />
        );
    }

    renderRow(row) {
        var rowCols = [];
        for (var i = 0; i < boardSize; i++) {
            rowCols.push(this.renderSquare(row * boardSize + i));
        }
        return <div className='board-row'>{rowCols}</div>
    }

    render() {
        var rows = []
        for (var i = 0; i < boardSize; i++) {
            rows.push(this.renderRow(i));
        }
        return <div>{rows}</div>;
    }
}