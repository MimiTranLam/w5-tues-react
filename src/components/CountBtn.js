import React from "react";

const Plus1Btn = ({count, setCount}) => {
    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <button onClick={handleIncrement}> + </button>
    )
}

const Minus1Btn = ({count, setCount}) => {
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <button onClick={handleDecrement}> - </button>
    )
}

const Plus10Btn = ({count, setCount}) => {
    const handleIncrement = () => {
        setCount(count + 10);
    }
    return (
        <button className="ten" onClick={handleIncrement}> +10 </button>
    )
}

const Minus10Btn = ({count, setCount}) => {
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 10)
        }
    }
    return (
        <button className="ten" onClick={handleDecrement}> -10 </button>
    )
}

const Reset = ({count, setCount}) => {
    const handleResetCount = () => {
        setCount(count = 0)
    }
    return (
        <button id="reset" onClick={handleResetCount}> RESET </button>
    )
}

export {Plus1Btn, Minus1Btn, Plus10Btn, Minus10Btn, Reset};
