import React from "react";
import { interval, timer } from "rxjs";

const Interval = () => {
  /**
   * El observable interval se ejecuta segun el tiempo indicado
   * en este caso es case segundos
   */
  const interval$ = interval(4000).subscribe(console.log);


  /**
   * Creamos una variable de tipo datos
   * Agregamos 4minutos a la variable datos
   */
  const minutos = new Date();
  minutos.setSeconds(minutos.getSeconds() + 4);

  /**
   * Observable timer
   */
  const timer$ = timer(minutos);

  /**
   * Suscribimos al observable timer
   */
  timer$.subscribe(console.log);
  return (
    <div>
      <h1>Interval</h1>
    </div>
  );
};

export default Interval;
