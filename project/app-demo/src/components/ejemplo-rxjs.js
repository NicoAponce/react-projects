import React, { useState} from "react";
import { from } from "rxjs";
import { map, filter, delay, mergeMap } from "rxjs/operators";
import useObservable from './useObservable'

let numeros = from([1, 2, 3, 4, 5]);
let nuevoValor = numeros.pipe(
  filter((val) => val > 2),
  mergeMap((val) => from([val]).pipe(delay(1000 * val))),
  map((val) => val * val)
);



function EjemploRxjs() {
  const [datos, setDatos] = useState(0);
  useObservable(nuevoValor,setDatos);
  return <h1>{datos}</h1>;
}

export default EjemploRxjs;