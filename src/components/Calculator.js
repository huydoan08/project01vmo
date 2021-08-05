import React from "react";
import Button from "./Button";
import CalculatorScreen from "./CalculatorScreen";
import { useState } from "react";

const Calculator = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };
  const calculatorResult = () => {
    const input = text.join("");
    setResult(eval(input));
  };
  const clearResult = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="  flex justify-center items-center m-16 ">
      <div className=" bg-black w-96 ">
        <CalculatorScreen text={text} result={result} />
        <div>
          <div className="grid grid-cols-4 mx-2 mr-4">
            <div className="sm:w-24 md:w-32 xl:w-48 col-span-2">
              <Button color="#ac3939" symbol="AC" handleClick={clearResult} />
            </div>
            <div className="sm:w-12 md:w-16 xl:w-24">
              <Button color="#666666" symbol="/" handleClick={addToText} />
            </div>
            <div className="sm:w-12 md:w-16 xl:w-24">
              <Button color="#666666" symbol="*" handleClick={addToText} />
            </div>
            <div className="sm:w-12 md:w-16 xl:w-24">
              <Button color="#4d4d4d" symbol="7" handleClick={addToText} />
            </div>
            <div className="sm:w-12 md:w-16 xl:w-24">
              <Button color="#4d4d4d" symbol="8" handleClick={addToText} />
            </div>
            <div className="sm:w-12 md:w-16 xl:w-24">
              <Button color="#4d4d4d" symbol="9" handleClick={addToText} />
            </div>
            <div className="sm:w-12 md:w-16 xl:w-24">
              <Button color="#666666" symbol="-" handleClick={addToText} />
            </div>
            <div className="sm:w-12 md:w-16 xl:w-24">
              <Button color="#4d4d4d" symbol="4" handleClick={addToText} />
            </div>
            <div className="sm:w-12 md:w-16 xl:w-24">
              <Button color="#4d4d4d" symbol="5" handleClick={addToText} />
            </div>
            <div className="sm:w-12 md:w-16 xl:w-24">
              <Button color="#4d4d4d" symbol="6" handleClick={addToText} />
            </div>
            <div className="sm:w-12 md:w-16 xl:w-24">
              <Button color="#666666" symbol="+" handleClick={addToText} />
            </div>
          </div>
          <div className="flex mx-2 mb-2 mr-4">
            <div className="grid grid-cols-3">
              <div className="sm:w-12 md:w-16 xl:w-24">
                <Button color="#4d4d4d" symbol="1" handleClick={addToText} />
              </div>
              <div className="sm:w-12 md:w-16 xl:w-24">
                <Button color="#4d4d4d" symbol="2" handleClick={addToText} />
              </div>
              <div className="sm:w-12 md:w-16 xl:w-24">
                <Button color="#4d4d4d" symbol="3" handleClick={addToText} />
              </div>
              <div className="sm:w-24 md:w-32 xl:w-48 col-span-2">
                <Button color="#4d4d4d" symbol="0" handleClick={addToText} />
              </div>
              <div className="sm:w-12 md:w-16 xl:w-24">
                <Button color="#4d4d4d" symbol="." handleClick={addToText} />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className=" sm:w-24 xl:w-24">
                <Button
                  symbol="="
                  handleClick={calculatorResult}
                  color="#004466"
                  height="160px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
