import React from "react";

function Reset({field, setField, setWin, setTurn}) {
    function resetField(field, setField, setWin, setTurn) {
        console.log(field);
    
    
        setField(field.map(i => {
            i.value = null;
    
            return i;
        }));
    
        setTurn('X');
        setWin(null);
    }

    console.log(field);
    return (
        <div
            className="reset"
            onClick={() => resetField(field, setField, setWin, setTurn)}
        >Reset</div>
    );
}

export default Reset;