import React from "react";
import { useObservable } from "rxjs-hooks";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

function Prueba() {
  const value = useObservable(() => interval(2000).pipe(map((val) => val * 4)));

  return (
    <div>
      <h1>Incremental number: {value}</h1>
    </div>
  );
}

export default Prueba