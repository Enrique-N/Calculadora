import React, { useState, createContext } from 'react';

export const CalculadoraContext = createContext();

export const CalculadoraProvider = ({ children }) => {

    const [number1, setNumber1] = useState("")
    const [number2, setNumber2] = useState("")
    const [currentOperation, setCurrentOperation] = useState("")

    const PressKey = (e) => {
        if (currentOperation === "") {
            setNumber1(number1 + e.target.value)
        } else {
            setNumber2(number2 + e.target.value)
        }
    }

    const ClickOperation = (e) => {
        setCurrentOperation(e.target.value)
    }

    const Reset = () => {
        setNumber1("")
        setNumber2("")
        setCurrentOperation("")
    }

    const Equal = () => {
        switch (currentOperation) {
            case "+":
                setNumber1(Number(number1) + Number(number2));
                setNumber2("")
                setCurrentOperation("")
                break;
            case "-":
                setNumber1(Number(number1) - Number(number2));
                setNumber2("")
                setCurrentOperation("")
                break;
            case "*":
                setNumber1(Number(number1) * Number(number2));
                setNumber2("")
                setCurrentOperation("")
                break;
            case "/":
                setNumber1(Number(number1) / Number(number2));
                setNumber2("")
                setCurrentOperation("")
                break;
            default:
        }

    }


    return (
        <CalculadoraContext.Provider value={{ PressKey, Reset, Equal, ClickOperation, number1, number2, currentOperation }}>
            {children}
        </CalculadoraContext.Provider>
    )
}
