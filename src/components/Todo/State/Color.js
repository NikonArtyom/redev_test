import React, { useState } from "react";

const Color = () => {

    const [color, SetColor] = useState('red');

    const handleClick = () => SetColor(color === 'red' ? 'blue' : 'orange');

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