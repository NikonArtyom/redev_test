import React, { useState } from "react";

const Input = () => {

    const [name, setName] = useState('')

    const handleClick = (event) => setName(event.target.value);

    return (
        <div className="input">
            <label>
                Введи свое имя:
                <input type="text" value={name} onChange={handleClick}></input>
            </label>
            <p>Привет, {name}</p>
        </div>
    )
}

export default Input;