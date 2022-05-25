import React, { useContext } from 'react'
import { CalculadoraContext } from "../context";
import "./App.css";


const Calculadora = () => {

    const { PressKey, ClickOperation, Reset, Equal, number1, number2, currentOperation } = useContext(CalculadoraContext)

    return (
        <div className='bgColor'>
            <div className='CalculadoraContainer'>
                <div className='DisplayContainer'>
                    <div>
                        {currentOperation ? number2 + currentOperation : ""}
                    </div>
                    <div>
                        {number1 ? number1 : currentOperation === "" ? number1 + currentOperation : number2}
                    </div>
                </div>
                <div className='ButtonsContainer'>
                    <button value={1} onClick={PressKey}>1</button>
                    <button value={2} onClick={PressKey}>2</button>
                    <button value={3} onClick={PressKey}>3</button>
                    <button value={"/"} onClick={ClickOperation}>/</button>
                    <button value={4} onClick={PressKey}>4</button>
                    <button value={5} onClick={PressKey}>5</button>
                    <button value={6} onClick={PressKey}>6</button>
                    <button value={"*"} onClick={ClickOperation}>*</button>
                    <button value={7} onClick={PressKey}>7</button>
                    <button value={8} onClick={PressKey}>8</button>
                    <button value={9} onClick={PressKey}>9</button>
                    <button value={"+"} onClick={ClickOperation}>+</button>
                    <button value={"."} onClick={PressKey}>.</button>
                    <button value={0} onClick={PressKey}>0</button>
                    <button value={"="} onClick={Equal}>=</button>
                    <button value={"-"} onClick={ClickOperation}>-</button>
                </div>
                <div className='OnlyButton' style={{ textAlign: "end" }}>
                    <button onClick={Reset}>CC</button>
                </div>
            </div>
        </div >
    )
}

export default Calculadora