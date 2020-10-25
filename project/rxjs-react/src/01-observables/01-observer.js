import React from 'react'
import { Observable } from 'rxjs'

function LabObservable() {

    /**
     * Observer personalizado.
     */
    const observer={
        next:val=>console.log('next: ',val),
        error:val=>console.log('error: ',val),
        complete:val=>console.log('completado')
    }


    /**
     * Observable creado.
     */
    const obs$=new Observable( val=>{
        val.next('nicolas')
        val.next('aponce')
        val.complete()
    }
    )
    

    /**
     * Salida sin el observer personalizado.
     */
    obs$.subscribe(
        next=>console.log('item: ',next),
        error=>console.log('error: ',error),
        ()=>console.log('completado')
    )    

    /**
     * Salida con el observer personalizado
     * Suscribiendonos a (obs$) y lo pasamos el observer.
     */
    obs$.subscribe(observer)

    return (
        <div>
            <h1>*Observer</h1>
        </div>
    )
}

export default LabObservable

