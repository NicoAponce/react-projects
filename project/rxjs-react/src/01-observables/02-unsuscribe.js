import React from 'react'
import { Observable } from 'rxjs'

function LabUnsuscribe() {

    /**
     * Observer personalizado.
     */
    const observer={
        next:val=>console.log('next: ',val),
        error:val=>console.log('error: ',val),
        complete:val=>console.log('completado')
    }


    /**
     * Creamos un observable.
     */
    const interval$=new Observable(subscriber=>{
        let count=0

        /**
         * SetInterval se ejecutara cada 1 segundo. 
         * Sumamos (count++). 
         * Pasamos el (count) en el (next). 
         */
        const interval=setInterval(()=>{
            count ++
            subscriber.next(count)
            console.log(count)
        },1000)


        /**
         * setTimeout terminara el proceso despues de 2.5 segundos.
         * Completamos el suscriber con (complete()). 
         */
        setTimeout(()=>{
            subscriber.complete()
        },2500)


        /**
         * En el return le pasamos el (clearInterval(interval)) esto
         * terminara todo el proceso del interval y dejara de ejecutarse. 
         */
        return()=>{
            clearInterval(interval)
            console.log('final interval')
        }
    })


    /**
     * Nos suscribimos a el observable y le pasamos el observer.
     */
    const subs1=interval$.subscribe(observer)
    const subs2=interval$.subscribe(observer)


    /**
     * El setTimeout terminara la ejecucion de las subscripciones despues de 5 segundos.
     */
    setTimeout(()=>{
        subs1.unsubscribe()
        subs2.unsubscribe()
        console.log('final del camino')
    },5000)


    return (
        <div>
            <h1>*Unsuscribe</h1>
        </div>
    )
}

export default LabUnsuscribe
