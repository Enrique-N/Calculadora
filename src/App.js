import React from "react";
import Calculadora from "./componentes/Calculadora";
import { CalculadoraProvider } from "./context";

function App() {

  return (
    <CalculadoraProvider>
      <Calculadora />
    </CalculadoraProvider>
  );
}

export default App;
