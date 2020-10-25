import React from "react";

import { of } from "rxjs";

const Of = () => {
  /**
   * Usamos el observable (of).
   * Para este ejemplo los datos seran sincrono.
   */
  const data$ = of("a", "b", "c", "d", "e", "f");
  const data1$ = of(
    [1, 2],
    { a: 3, b: 4 },
    5,
    function () {},
    true,
    Promise.resolve
  );

  /**
   * Nos subscribimos a el observable.
   * pasandole como un objeto las funciones next, error, complete
   */
  data$.subscribe({
    next: (val) => console.log(`next: ${val}`),
    error: (val) => console.log(`error: ${val}`),
    complete: () => console.warn(`completado.`),
  });

  data1$.subscribe({
    next: (val) => console.log(`next: ${val}`),
    error: (val) => console.log(`error: ${val}`),
    complete: () => console.warn(`completado.`),
  });
  return (
    <div>
      <h1>Of</h1>
    </div>
  );
};

export default Of;
