import React, { useState } from "react";

const Counter = () => {

    const [count, SetCount] = useState(0);

    const increment = () => SetCount(count + 1);

    return (
        <div className="counter">
            <p>Счетчик: {count}</p>
            <button onClick={increment}>Увеличить на 1</button>
        </div>
    )
}

export default Counter;