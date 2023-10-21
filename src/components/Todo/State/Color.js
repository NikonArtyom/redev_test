import React, { useState } from "react";

const Color = () => {

    const [color, setColor] = useState('red');

    const handleClick = () => setColor(color === 'red' ? 'blue' : 'orange');

    const style = {
        color: color
    };

    return (
        <div>
            <p style={style}>Цвет текста может изменяться</p>
            <button onClick={handleClick}>Сменить цвет</button>
        </div>
    )

}

export default Color;