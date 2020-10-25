import React from "react";

import { fromEvent } from "rxjs";

const FromEvent = () => {

  /**
   * Usamos el observable (fromEvent), en este caso
   * seran dos una para el mause y el otro para el teclado.
   */
  const click$ = fromEvent(document, "click");
  const key$ = fromEvent(document, "keyup");

  /**
   * Nos subscribimos a el observable click.
   */
  click$.subscribe((val) => {
    console.log(val.type);
  });

  /**
   * Nos subscribimos al observable key.
   */
  key$.subscribe((val) => {
    console.log(`La tecla presionada es: ${val.key}`);
  });
  return (
    <div>
      <h1>FromEvent</h1>
    </div>
  );
};

export default FromEvent;
