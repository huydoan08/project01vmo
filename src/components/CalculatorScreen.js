import React from 'react'

const CalculatorScreen = ({text, result}) => {
    return (
        <div className='flex justify-end items-end flex-col h-20 p-1 bg-black text-white'>
           <div className='flex-1 text-3xl'>
               {result}
           </div>
           <div className='flex-1 text-3xl '>
               {text}
           </div>
        </div>
    )
}

export default CalculatorScreen
