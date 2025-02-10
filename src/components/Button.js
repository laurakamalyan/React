import React from 'react';

function display(time) {
    alert(time);
}

function Button({times}) {
    return (
        <>
            {times.map((time, index) => (
                <button key={index} onClick={() => display(time)}>{time}</button>
            ))}
        </>
    )
}

export default Button;