import React from 'react'

function Button({ text, className, onClick }) {
    return (
        <button
            className={`w-16 h-16 text-xl font-semibold bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 active:bg-gray-500 ${className}`}
            onClick={()=>onClick(text)}
        >
            {text}
        </button>
    )
}

export default Button