import React, { useState } from "react";

const Show = () => {
    const [showText, setShowText] = useState(false);

    const handleClick = () => setShowText(!showText);

    return (
        <div className="show">
            {showText ? <p>"Текс показан или скрыт"</p> : null}
            <button onClick={handleClick}>Показать/скрыть текст</button>
        </div>
    )
}

export default Show;