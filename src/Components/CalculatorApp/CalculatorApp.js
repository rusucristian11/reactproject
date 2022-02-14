import React, {useState} from 'react';
import './CalculatorApp.scss'

const CalculatorApp = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '*','+','-','.'];

    const updateCalc = value => {
        if(ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))){
            return;
        }
        setCalc(calc + value);

        if(!ops.includes(value)){
            setResult(eval(calc + value).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if(calc === ''){
            return;
        }
        let value = calc.slice(0, -1);

        setCalc(value);
        if(!ops.includes(value)) setResult(value.slice(0, -1));
        else setResult(value);
    }

    const changeSign = () => {
        let value = calc;
        value = value * (-1);
        setCalc(value);
    }

    const percentage = () => {
        let value = calc;
        value = value / 100;
        setCalc(value);
    }

    return (
        <div className="card-calculator">
            <div className="calculator">
                <div className="display">
                    {result ? <span className="span">({result})</span> : ''} {calc || "0"}
                </div>
                <div className="digits-operators">
                    <div className="digits">
                        <button className="button" onClick={deleteLast}>AC</button>
                        <button className="button" onClick={changeSign}>+/-</button>
                        <button className="button" onClick={percentage}>%</button>
                        <button className="button" onClick={() => updateCalc('9')}>9</button>
                        <button className="button" onClick={() => updateCalc('8')}>8</button>
                        <button className="button" onClick={() => updateCalc('7')}>7</button>
                        <button className="button" onClick={() => updateCalc('6')}>6</button>
                        <button className="button" onClick={() => updateCalc('5')}>5</button>
                        <button className="button" onClick={() => updateCalc('4')}>4</button>
                        <button className="button" onClick={() => updateCalc('3')}>3</button>
                        <button className="button" onClick={() => updateCalc('2')}>2</button>
                        <button className="button" onClick={() => updateCalc('1')}>1</button>
                        <button className="button zero" onClick={() => updateCalc('0')}>0</button>
                        <button className="button" onClick={() => updateCalc('.')}>.</button>
                    </div>
                    <div className="operators">
                        <button className="button operators" onClick={() => updateCalc('/')}>:</button>
                        <button className="button operators" onClick={() => updateCalc('*')}>x</button>
                        <button className="button operators" onClick={() => updateCalc('-')}>-</button>
                        <button className="button operators" onClick={() => updateCalc('+')}>+</button>

                        <button className="button operators" onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalculatorApp;