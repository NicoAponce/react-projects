import React from 'react'

import { Subject, interval } from "rxjs";
import {take, map} from 'rxjs/operators'

function ObsSubject() {


    /**
     * Usamos el observable (interval) que se ejecutara cada segundo. 
     * El (take) nos permite decir despues de cuanto terminar la ejecucion. 
     * El (map) no mostrara numeros aleatorios gracias al (math).
     */
    const interval$=interval(1000).pipe(
        take(5),
        map(val=>Math.round(Math.random()*100))
    )
  
  
    /**
     * Creamos un observable de tipo subject. 
     */
    const subject$ = new Subject();
  
  
    /**
     * Nos subscribimos al (interval$) pasando el (subject$)
     */
    interval$.subscribe(subject$)
  
  
    /**
     * Nos subscribimos a (subject$) para mostrar los datos de salida.
     */
    subject$.subscribe(uno=>console.log(`uno: ${uno}`));
    subject$.subscribe(dos=> console.log(`dos: ${dos}`));
    

    return (
        <div>
            <h1>subject</h1>
        </div>
    )
}

export default ObsSubject
