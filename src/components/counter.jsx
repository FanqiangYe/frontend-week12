import React, {useState} from "react";

function Counter ({nameFruit, setFruitCount, fruitCount}){
    return(
        <>
            <h2>{nameFruit}</h2>
            <button type="button" disabled={fruitCount === 0} onClick={() => setFruitCount(fruitCount - 1)}>
                -
            </button>
            <p>{fruitCount}</p>
            <button type="button" onClick={() => setFruitCount(fruitCount + 1)}>
                +
            </button>
        </>
    );
}

export default Counter
