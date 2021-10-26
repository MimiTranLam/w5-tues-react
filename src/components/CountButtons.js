import React from "react";

const CountButtons = ({count, setCount, value}) => {
    const handleIncrement = () => {
        if (value === 0) {
            setCount(count = 0)
        }
        setCount(count + value);
    }

    return (
        <button onClick={handleIncrement}>{value > 0 ? `+${value}` : `${value}`}</button>
    )
}

const Reset = ({count, setCount}) => {
    const handleResetCount = () => {
        setCount(count = 0)
    }
    return (
        <button id="reset" onClick={handleResetCount}>RESET</button>
    )
}

export {CountButtons, Reset};
