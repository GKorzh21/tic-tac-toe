import React from "react";

function checkWin(field, current, setWin) {
    if(
        //первая строка
        field[0].value == current && field[1].value == current && field[2].value == current
        ||
        //вторая строка
        field[3].value == current && field[4].value == current && field[5].value == current
        ||
        //третья строка
        field[6].value == current && field[7].value == current && field[8].value == current

        ||

        //первыя столбец
        field[0].value == current && field[3].value == current && field[6].value == current
        ||
        //второй столбец
        field[1].value == current && field[4].value == current && field[7].value == current
        ||
        //третьий столбец
        field[2].value == current && field[5].value == current && field[8].value == current

        ||

        //главная диагональ
        field[0].value == current && field[4].value == current && field[8].value == current
        ||
        //побочная диагональ
        field[2].value == current && field[4].value == current && field[6].value == current
    ) {
        setWin(current);
    }
}

function Cell({win, setWin, turn, setTurn, index, field, setField}) {
    let value = field[index].value;

    function fillCell(field, index) {
        if(win != null) {
            return;
        }

        setField(field.map(i => {
            if(i.index == index && i.value == null) {
                i.value = turn;
            }

            return i;
        }));

        checkWin(field, turn, setWin);

        if(turn == 'X') {
            setTurn('O');
        }
        else {
            setTurn('X');
        }
    }

    if(win == null) {
        return (
            <div
                className="cell"
                onClick={() => fillCell(field, index)}
            >{value}</div>
        );
    }
    else {
        return (
            <div
                className="cell"
                onClick={() => fillCell(field, index)}
            >{value}</div>
        );
    }
}


export default Cell;