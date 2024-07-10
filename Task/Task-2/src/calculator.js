import React, { useState } from 'react';
import './App.css'; 

function Calculator() {
  const [result, setResult] = useState('');

  const Number = (number) => {
    setResult(result + number);
  };

  const Operator = (operator) => {
    setResult(result + operator);
  };

  const Decimal = () => {
    if (result.indexOf('.') === -1) {
      setResult(result + '.');
    }
  };

  const Percentage = () => {
    setResult((parseFloat(result) / 100).toString());
  };

  const calculate = () => {
    if (result === '' || isNaN(result.slice(-1))) {
      setResult('Error');
      return;
    }

    const numbers = result.split(/[+\-*/]/).map(parseFloat);
    const operators = result.split('').filter(char => ['+', '-', '*', '/'].includes(char));

    let currentResult = numbers[0];

    for (let i = 0; i < operators.length; i++) {
      switch (operators[i]) {
        case '+':
          currentResult += numbers[i + 1];
          break;
        case '-':
          currentResult -= numbers[i + 1];
          break;
        case '*':
          currentResult *= numbers[i + 1];
          break;
        case '/':
          if (numbers[i + 1] === 0) {
            setResult('Error: Division by zero');
            return;
          }
          currentResult /= numbers[i + 1];
          break;
        default:
          setResult('Error: Invalid operator');
          return;
      }
    }

    setResult(currentResult.toString());
  };

  const clearResult = () => {
    setResult('');
  };

  const clear = () => {
    setResult(prevResult => prevResult.slice(0, -1));
  };

  return (
    <div className="calculator">
      <input type="text" id="result" value={result} readOnly />
      <div className="buttons">
        <button className="function" onClick={clearResult}>AC</button>
        <button className="function" onClick={clear}>C</button>
        <button className="function" onClick={Percentage}>%</button>
        <button className="operator" onClick={() => Operator('/')}>÷</button>
        <button onClick={() => Number('7')}>7</button>
        <button onClick={() => Number('8')}>8</button>
        <button onClick={() => Number('9')}>9</button>
        <button className="operator" onClick={() => Operator('*')}>×</button>
        <button onClick={() => Number('4')}>4</button>
        <button onClick={() => Number('5')}>5</button>
        <button onClick={() => Number('6')}>6</button>
        <button className="operator" onClick={() => Operator('-')}>-</button>
        <button onClick={() => Number('1')}>1</button>
        <button onClick={() => Number('2')}>2</button>
        <button onClick={() => Number('3')}>3</button>
        <button className="operator" onClick={() => Operator('+')}>+</button>
        <button id="zero" onClick={() => Number('0')}>0</button>
        <button onClick={Decimal}>.</button>
        <button className="operator" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
