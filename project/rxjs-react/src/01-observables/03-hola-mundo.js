import React from "react";
import { from, of } from "rxjs";
import { filter, map, delay, concatMap } from "rxjs/operators";

function HolaMundo() {

  /**
   * Usamos el observable from pasandole una frase.
   */
  const myObs = from("hola mundo cruel");


  /**
   * El (pipe) sirve para ejecutar operadores. 
   * El (ConcatMap) concatena observables
   * El (of) tiene toda la data. 
   * El (delay) hace demorar un segundo. 
   * El (filter) filtrara la data y eliminara los " " de la data. 
   * El (map) ahora tiene toda la data modificada y por ultimo. 
   * El (toUpperCaase) convierte las letras a mayusculas. 
   */
  const filteredObs = myObs.pipe(
    concatMap((item) => of(item).pipe(delay(1000))),
    filter((item) => item !== " "),
    map((item) => item.toUpperCase())
  );


  /**
   * Nos subscribimos a el observable inprimiendo un log. 
   */
  filteredObs.subscribe(console.log);
  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default HolaMundo;
