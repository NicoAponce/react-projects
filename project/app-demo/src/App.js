import React from "react";
import EjemploRxjs from "./components/ejemplo-rxjs";
import Pokemon from "./components/pokemon";
import Prueba from "./components/prueba";
import Nicolas from "./components/nicolas";
import RxjsDemo from "./components/rxjs-demo-uno";
import RxjsDemoUno from "./components/rxjs-demo-uno";
import RxjsDemoDos from "./components/rxjs-demo-dos";

function App() {
  
  return(
    <div>
     PRIMER EJEMPLO OBSERVABLES <EjemploRxjs/>
     <hr/>
     <Pokemon/>
     <hr/>
     <Prueba/>
     <hr/>
     <Nicolas/>
     <hr/>
     <RxjsDemoUno/>
     <hr/>
     <RxjsDemoDos/>
    </div>
  )
}

export default App;
