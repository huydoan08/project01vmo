import React, { useState, useEffect } from 'react';

function Quotes() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [colorBg, setColorBg] = useState('')
  const [colorQuote, setColorQuote] = useState('')

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)   // return response
      .then(res => res.json())  // receive data is json --> js
      .then(data => {    
        const dataQuotes = data.quotes; // Array quote      
        const randomNumber = Math.ceil(Math.random() * dataQuotes.length); // calculator random number
        const randomQuote = dataQuotes[randomNumber]; // get element in array with index
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
      .catch(err => console.log('Error'))
  }

  function handleClick() {
    const colorsBg = ['bg-red-300', 'bg-green-300', 'bg-blue-300', 'purple-400', 'bg-pink-300', 'bg-yellow-200']
    const colorsText = ['text-red-300', 'text-green-300', 'text-blue-300', 'text-purple-400', 'text-pink-300', 'text-yellow-200']
    const ColorIndex = Math.floor(Math.random() * colorsBg.length)

    setColorBg(colorsBg[ColorIndex])
    setColorQuote(colorsText[ColorIndex])
    getQuote();
  }

  return (
    <div className={colorBg}>
      <div className="bg-white w-5/12 p-16 rounded-3xl mx-auto shadow-2xl mt-10">
        <div className={colorQuote}>       
            <q className="text-3xl">{quote}</q>
        </div>
        <div className={colorQuote}>
           <p className="flex justify-end text-2xl mt-5">{author}</p>
        </div>
        <div className="flex justify-between mt-5">
          <ul className="flex">
            <li >
                 <a className={colorQuote}><i class=" text-4xl mr-2 fab fa-facebook"></i></a>
            </li>
            <li>
                 <a className={colorQuote}><i class=" text-4xl fab fa-twitter-square"></i></a>
            </li>         
          </ul>
          <div className={colorBg}>
           <button onClick={handleClick} className="p-2 border-2">New Quote</button>
          </div>        
        </div> 
    </div>
    </div>
  )
}

export default Quotes;