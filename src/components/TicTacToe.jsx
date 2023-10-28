import { useState } from "react";
import Cell from "./Cell";
import ResetBtn from "./ResetBtn";

function resetField({field, setField, win, setWin, turn, setTurn}) {
    console.log(field);


    setField(field.map(i => {
        //i.value = null;

        return i;
    }));

    setTurn('X');
    setWin(null);
}

function TicTacToe() {
    
    const [field, setField] = useState([
        {index: 0, value: null},
        {index: 1, value: null},
        {index: 2, value: null},
        {index: 3, value: null},
        {index: 4, value: null},
        {index: 5, value: null},
        {index: 6, value: null},
        {index: 7, value: null},
        {index: 8, value: null}
    ]);

    const [turn, setTurn] = useState('X');
    const [win, setWin] = useState(null);

    if(win == null) {
        return (
            <>
                <div className="turn">Ход игрока: {turn}</div>
                <div className="field_wrap">
                    <div className="field_line">
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={0} field={field} setField={setField}/>
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={1} field={field} setField={setField}/>
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={2} field={field} setField={setField}/>
                    </div>

                    <div className="field_line">
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={3} field={field} setField={setField}/>
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={4} field={field} setField={setField}/>
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={5} field={field} setField={setField}/>
                    </div>

                    <div className="field_line">
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={6} field={field} setField={setField}/>
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={7} field={field} setField={setField}/>
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={8} field={field} setField={setField}/>
                    </div>
                </div>
                <ResetBtn field={field} setField={setField} setWin={setWin} setTurn={setTurn}/>
            </>
        );
    }
    else {
        return (
            <>
                <div className="turn">Победил игрок: {win}</div>
                <div className="field_wrap">
                    <div className="field_line">
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={0} field={field} setField={setField}/>
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={1} field={field} setField={setField}/>
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={2} field={field} setField={setField}/>
                    </div>

                    <div className="field_line">
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={3} field={field} setField={setField}/>
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={4} field={field} setField={setField}/>
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={5} field={field} setField={setField}/>
                    </div>

                    <div className="field_line">
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={6} field={field} setField={setField}/>
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={7} field={field} setField={setField}/>
                        <Cell win={win} setWin={setWin} turn={turn} setTurn={setTurn} index={8} field={field} setField={setField}/>
                    </div>
                </div>
                <ResetBtn field={field} setField={setField} setWin={setWin} setTurn={setTurn}/>
            </>
        );
    }
}

export default TicTacToe;