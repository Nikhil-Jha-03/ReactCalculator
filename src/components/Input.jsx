import React from 'react'

function Input({value}) {
    return (
        <input type="text" id="calculator-display"
        className="w-full text-right text-white text-2xl bg-transparent outline-none p-3"
            placeholder="0" readOnly
            value={value} />
    )
}

export default Input;