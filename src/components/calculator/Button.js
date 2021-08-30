import React from 'react'

const Button = ( {symbol, handleClick, color, height} ) => {
    return (
        <div 
        onClick={() => handleClick(symbol)}
        style={{backgroundColor: color, height:height}}
        className="flex justify-center outline items-center h-20 bg-gray-600 text-white text-4xl m-1 rounded-xl">
            {symbol}
        </div>
    )
}

export default Button
