import { useState } from "react";
import Button from '../../components/calculator/Button'
import CalculatorScreen from '../../components/calculator/CalculatorScreen'
const Calculator = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addMoreText = (value) => {
    setText((text) => [...text, value + ""]);
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
    <div className="  flex justify-center items-center mt-8 ">      
      <div className=" bg-black w-96 ">
        <CalculatorScreen text={text} result={result} />
        <div>
          <div className="grid grid-cols-4 mx-2">
            <div className=" col-span-2">
              <Button color="#ac3939" symbol="AC" handleClick={clearResult} />             
            </div>
            <div>
              <Button color="#666666" symbol="/" handleClick={addMoreText} />
            </div>
            <div>
              <Button color="#666666" symbol="*" handleClick={addMoreText} />
            </div>
            <div>
              <Button color="#4d4d4d" symbol="7" handleClick={addMoreText} />
            </div>
            <div>
              <Button color="#4d4d4d" symbol="8" handleClick={addMoreText} />
            </div>
            <div>
              <Button color="#4d4d4d" symbol="9" handleClick={addMoreText} />
            </div>
            <div>
              <Button color="#666666" symbol="-" handleClick={addMoreText} />
            </div>
            <div>
              <Button color="#4d4d4d" symbol="4" handleClick={addMoreText} />
            </div>
            <div>
              <Button color="#4d4d4d" symbol="5" handleClick={addMoreText} />
            </div>
            <div>
              <Button color="#4d4d4d" symbol="6" handleClick={addMoreText} />
            </div>
            <div>
              <Button color="#666666" symbol="+" handleClick={addMoreText} />
            </div>
          </div>
          <div className="grid grid-cols-4 mx-2  mb-4">
            <div className="grid grid-cols-3 col-span-3">
              <div className="">
                <div>
                  <Button color="#4d4d4d" symbol="1" handleClick={addMoreText} />
                </div>              
              </div>
              <div>
                <div>
                  <Button color="#4d4d4d" symbol="2" handleClick={addMoreText} />
                </div>              
              </div>
              <div>
                <div>
                  <Button color="#4d4d4d" symbol="3" handleClick={addMoreText} />
                </div>              
              </div>
              <div className="col-span-2">
                <div>
                  <Button color="#4d4d4d" symbol="0" handleClick={addMoreText} />
                </div>              
              </div>
              <div>
                <div>
                  <Button color="#4d4d4d" symbol="." handleClick={addMoreText} />
                </div>              
              </div>
            </div>
            <div>
              <Button
                symbol="="
                handleClick={calculatorResult}
                color="#004466"
                height="168px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
