import React from "react";

import { range, of } from "rxjs";
import { concatMap, delay } from "rxjs/operators";

const Range = () => {
  /**
   * El observable (range) nos brinda un rango de numero, recibe dos parametros,
   * El valor de inicio en este caso es [5]
   * El total de numeros que que recorrera en este caso sera [6]
   */
  const numeros$ = range(5, 6);

  /**
   * range se ejecura asincronamente
   */
  console.log("inicio");

  /**
   * concatMap concatena observables
   * of guarda los dichos numeros 
   * delay demora en ejecutar en este caso sera de 1 segundo
   */
  numeros$
    .pipe(concatMap((val) => of(val).pipe(delay(1000))))
    .subscribe(console.log);
  console.log("final");
  return (
    <div>
      <h1>Range</h1>
    </div>
  );
};

export default Range;
