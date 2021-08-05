import React from 'react'

const Button = ({symbol, handleClick,color,height,margin}) => {
    return (
        <div 
        onClick={() => handleClick(symbol)}
        style={{backgroundColor: color, height:height}}
        className="flex justify-center outline items-center h-20 bg-gray-600 text-white text-4xl flex-1">
            {symbol}
        </div>
    )
}

export default Button
