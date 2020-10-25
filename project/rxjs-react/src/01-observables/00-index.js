import React from "react";
import { from } from "rxjs";

function Index() {
  /**
   * Usamos el observable (from) que tiene [5] valores.
   */
  const myObservable$ = from([1, 2, 3, 4, 5]);

  /**
   * Observer personalizado que tiene sus tres metodos
   * Next: aqui es donde estara la data.
   * Error: aqui estaran los errores si hubiera.
   * Complete: Solo envia un mensaje cuando se comleta todo.
   */
  const myObserver$ = {
    next: (val) => console.log(`observer next: ${val}`),
    error: (val) => console.log(`observer error: ${val}`),
    complete: () => console.log(`observer complete`),
  };

  /**
   * Nos subscribimos a el observable (myObservable$) y luego le pasamos
   * el observer (myObserver$)
   */
  myObservable$.subscribe(myObserver$);

  /**
   * ************************************* Esto es lo mismo que esto pero de otra manera **********************************************
   */

  const data$ = from([1, 2, 3, 4, 5]);
  data$.subscribe({
    next: (val) => console.log(`next: ${val}`),
    error: (val) => console.log(`error: ${val}`),
    complete: () => console.log(`completado`),
  });

  // const source$ = of(1500, 3000);

  // const ejemplo$=source$.pipe(
  //   concatMap(val=>of(`CONCAT MAP = ${val}`).pipe(delay(val)))
  // )

  // ejemplo$.subscribe(val=>console.log(`${val}`))

  // const demo$=source$.pipe(
  //  mergeMap(val=>of(`MERGE MAP = ${val}`).pipe(
  //    delay(val)
  //  ))
  // )

  // demo$.subscribe(val=>console.log(`${val}`))

  // const click$=fromEvent(document,'click')
  // const interval$=interval(1000).pipe(take(5))

  // click$.pipe(
  //   concatMap(()=>interval$)
  // ).subscribe(console.log)

  // timer(0, 5000)
  // .pipe(
  //   switchMap(
  //     _ => interval(2000),
  //     (lol) => ({
  //       lol
  //     })
  //   )
  // ).subscribe(console.log);

  // const click$ = fromEvent(document, "click");
  // click$.pipe(switchMap(() => interval(2000))).subscribe(console.log);

  // const input = document.createElement("input");
  // const orlis = document.createElement("ol");
  // const body = document.querySelector("body");
  // body.append(input, orlis);
  // const saludo=(sal)=>{
  //   const lol=of('hola')
  //   return lol.pipe(map(val=>val + ' ' + sal))
  // }

  // const key$ = fromEvent(document, "keyup");

  // key$
  //   .pipe(
  //     debounceTime(1000),
  //     pluck("target", "value"),
  //     mergeMap((val) => saludo(val))
  //   )
  //   .subscribe((val) => console.log(val));

  // const input = document.createElement("input");
  // const orlis = document.createElement("ol");
  // const body = document.querySelector("body");
  // body.append(input, orlis);

  // const myPromise = (val) =>
  //   new Promise((resolve) =>
  //     resolve(`${val} Hola como estas, yo soy tu computadora`)
  //   );

  // const key$ = fromEvent(document, "keyup");

  // key$
  //   .pipe(
  //     debounceTime(1000),
  //     pluck("target", "value"),
  //     mergeMap((val) => myPromise(val))
  //   )
  //   .subscribe((val) => console.log(val));

  // const API_URL='https://jsonplaceholder.typicode.com/todos'

  // const click$=fromEvent(document,'click')

  // click$.pipe(
  //   mergeMap(()=>ajax.getJSON(API_URL))
  // ).subscribe(console
  //   .log)

  // const input = document.createElement("input");
  // const orlis = document.createElement("ol");
  // const body = document.querySelector("body");
  // body.append(input, orlis);

  // const evento$ = fromEvent(document, "keyup");

  // evento$
  //   .pipe(
  //     debounceTime(1000),
  //     pluck("target", "value"),
  //     map((texto) => {
  //       return ajax.getJSON(`https://api.github.com/search/users?q=${texto}`);
  //     }),
  //     mergeAll(),
  //     pluck("items")
  //   )
  //   .subscribe(console.log);

  // const mes$=of('enero','febrero','julio').pipe(
  //   delay(2000)
  // )

  // const dia$=of('lunes','miercoles','domingo').pipe(
  //   delay(1000)
  // )
  // const hora$=of('1:00','12:45','7:32').pipe(
  //   delay(3000)
  // )

  // const data$=from([mes$,dia$,hora$])

  // data$.pipe(
  //   mergeAll()
  // ).subscribe(console.log)

  // const click$=fromEvent(document,'click')
  // click$.pipe(
  //   auditTime(4000)
  // ).subscribe(console.log)

  // const intervalo$=interval(3000)

  // intervalo$.pipe(
  //   auditTime(1000)
  // ).subscribe(console.log)

  /**
   * El contador seguira incrementando cada segundo, pero
   * solo se mostrara al dar click
   */
  // const interval$ = interval(1000);
  // const click$ = fromEvent(document, "click");

  // interval$.pipe(sample(click$)).subscribe(console.log);

  /**
   * Mas codigo para parecer a debounceTime()
   */
  // const input=document.createElement('input')
  // document.querySelector('body').append(input)

  // const input$=fromEvent(input,'keyup')

  // input$.pipe(
  //   throttleTime(1000,asyncScheduler, {
  //     leading: false,
  //     trailing: true,
  //   }),
  //   pluck('target','value'),
  //   distinctUntilChanged()
  // ).subscribe(console.log)

  /**
   * Despues del tiempo indicado recien se ejecuta.
   * si le damos 3 segundos y no le dejamos llegar a los 3
   * segundos el evento no se ejecutara hasta que pare y llegue los 3 segundos
   */
  // const click$ = fromEvent(document, "click");

  // click$.pipe(debounceTime(3000)).subscribe(console.log);

  // const input = document.createElement("input");
  // document.querySelector("body").append(input);

  // const input$ = fromEvent(input, "keyup");

  // input$
  //   .pipe(debounceTime(1000), pluck("target", "value"))
  //   .subscribe(console.log);

  // const url = "http://192.168.1.39:9898/api/person/get";

  //  ajax({
  //   url: url,
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: { name: "" },
  // }).pipe(
  // ).subscribe(console.log);

  // ajax
  //   .post(url, { name: "" },
  //   { "Content-Type": "application/json" })
  //   .pipe(pluck("response"))
  //   .subscribe(console.log);

  // ajax(url).subscribe(console.log)

  // ajax.getJSON(url).subscribe(console.log);

  // const manejarError=(msj)=>{
  //   console.error(`ops... algo salio mal en ${msj}`)
  //   return of([])
  // }

  // ajax(url).pipe(
  //   pluck('response'),
  //   catchError(manejarError)
  // ).subscribe(console.log)

  // const data$ = [
  //   { id: 1, name: "Alice" },
  //   { id: 2, name: "Alice" },
  //   { id: 3, name: "Bob" },
  //   { id: 4, name: "Bob" },
  //   { id: 5, name: "Alice" },
  // ];

  // from(data$).pipe(
  //   distinct(val=>val.name)
  // ).subscribe(console.log)

  // from(data$).pipe(
  //   distinctUntilChanged((acc,cur)=>acc.name === cur.name)
  // ).subscribe(console.log)

  // const val$ = interval(500);

  // const timer$ = timer(5000);
  // // emit until timer$ emits a value
  // val$.pipe(takeUntil(timer$)).subscribe(
  //   (val) => console.log(val),
  //   (err) => console.log(err),
  //   () => console.log("completes")
  // );

  // const boton = document.createElement("button");
  // boton.innerHTML = "Detener Timer";

  // document.querySelector("body").append(boton);

  // const counter$ = interval(1000);
  // const clickBtn$ = fromEvent(boton, "click").pipe(
  //   tap(() => console.log("antes del skip")),
  //   skip(1),
  //   tap(() => console.log("despues del skip"))
  // );

  // counter$.pipe(takeUntil(clickBtn$)).subscribe({
  //   next: (val) => console.log("next: ", val),
  //   complete: () => console.log("completado"),
  // });

  // const click$ = fromEvent(document, "click");

  // click$
  //   .pipe(
  //     map(({ x, y }) => ({ x, y })),
  //     //takeWhile(({y})=>y<= 150)
  //     takeWhile(({ y }) => y <= 150,true) //TODO: True es el inclusive que agrega el ultimo valor
  //   )
  //   .subscribe({
  //     next: (val) => console.log("next: ", val),
  //     complete: () => console.log("completado"),
  //   });

  // const numero$ = range(1, 6);

  // numero$.pipe(first((val) => val < 1, "numero por defecto: 4")).subscribe({
  //   next: (val) => console.log(`next: ${val}`),
  //   error: (val) => console.log(`error: ${val}`),
  //   complete: () => console.log(`completado.`),
  // });

  // const numero$ = range(1, 7);

  // numero$.pipe(take(6)).subscribe(console.log);

  // const numeros$ = range(1, 10);
  // numeros$.pipe(scan((acc, cur) => acc + cur)).subscribe(console.log);

  // const saludo$ = from(["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"]);

  // saludo$
  //   .pipe(
  //     scan((acc, cur) => acc + cur),
  //     map((val) => val.toUpperCase())
  //   )
  //   .subscribe(console.log);

  // const lool$ = from(["h", "o", "l", "a"]);

  // lool$.pipe(reduce((acc, cur) => acc + cur)).subscribe(console.log);

  // const numero$ = range(1, 100000);
  // numero$.pipe(reduce((acc, cur) => acc + cur)).subscribe(console.log);

  // const person$ = from([1, 2, 3]);

  // person$
  //   .pipe(
  //     tap((val) => console.log(`antes del map vale: ${val}`)),
  //     map((val) => val * 2),
  //     tap((val) => console.log(`despues del map vale: ${val}`))
  //   )
  //   .subscribe(console.log);

  // of("hola mundo")
  //   .pipe(
  //     tap((val) => console.log(new Date())),
  //     map((val) => console.log(`${val} fruel`)),
  //     delay(3000),
  //     tap((val) => console.log(new Date()))
  //   )
  //   .subscribe(console.log);

  // person$.pipe(filter((val) => val.role === "user")).subscribe(console.log);

  // range(1, 5).pipe(mapTo("nicolas")).subscribe(console.log);

  // const click$ = fromEvent(document, "click");

  // click$.pipe(mapTo("otro valor")).subscribe(console.log);

  // const person$ = from([
  //   {
  //     name: "Alice",
  //     age: 21,
  //     address: { street: "12345 Js Street", zipcode: "12345" },
  //   },
  //   {
  //     name: "Bob",
  //     age: 25,
  //     address: { street: "56789 Js Street", zipcode: "56789" },
  //   },
  // ]);

  // person$.pipe(pluck("address", "street")).subscribe(console.log);

  // range(1, 5)
  //   .pipe(map((val) => val * 5))
  //   .subscribe(console.log);

  // const person$ = from([
  //   { name: "Alice", age: 10 },
  //   { name: "Bob", age: 20 },
  //   { name: "Chuck", age: 30 },
  // ]);

  // person$
  //   .pipe(
  //     map((val) => {
  //       val.age > 17 ? (val.mayor = true) : (val.mayor = false);
  //       return val;
  //     })
  //   )
  //   .subscribe(console.log);

  //output: [1, 'Alice']  [2, 'Bob']

  // const saludar = (nombre) => console.log(`Hola ${nombre}`);

  // asyncScheduler.schedule(saludar,500,'lo')

  // const subs = asyncScheduler.schedule(
  //   function (state) {
  //     console.log("state", state);
  //     this.schedule(state + 1, 1000);
  //   },
  //   3000,
  //   0
  // );

  // asyncScheduler.schedule(() => subs.unsubscribe(), 6000);

  // const source = timer(1000,2000);

  // source.subscribe((val) => console.log(val));

  // console.log("inicio");
  // const rango$ = range(999, 1, asyncScheduler).subscribe(console.log);
  // console.log("final");s

  // const click$ = fromEvent(document, "click");
  // const key$ = fromEvent(document, "keyup");

  // click$
  //   .pipe(
  //     filter((val) => val.y >= 50),
  //     map((val) => val.y * 1000 + "demo")
  //   )
  //   .subscribe(console.log);

  // key$.pipe(filter((val) => val.key === "Enter")).subscribe(console.log);

  /**
   * Of
   */
  // const datos = [
  //   { name: "nicolas", age: 23, phone: "987654321", document: "98765433" },
  //   { name: "carlos", age: 23, phone: "987654321", document: "98765433" },
  //   { name: "diana", age: 23, phone: "987654321", document: "98765433" },
  //   { name: "luis", age: 23, phone: "987654321", document: "98765433" },
  //   { name: "bertha", age: 23, phone: "987654321", document: "98765433" },
  // ];

  // const data$ = of(...datos);

  // data$.subscribe(console.log);

  /**
   * El observable subject hace que muestre el mismo valor.
   */
  // const subject$=new Subject()

  // subject$.subscribe(obs=>{
  //   console.log(`sub numero 1: ${obs}`)
  // })

  // subject$.subscribe(val=>{
  //   console.log(`sub numero 2: ${val}`)
  // })

  // subject$.next(Math.random())

  /**
   * Ejemplo de new Observable.
   * Ejemplo de Unsubscribe.
   * Ejemplo un poco de setInterval y settimeout
   */
  // const data$ = new Observable((obs) => {
  //   let count = 0;

  //   const intervalo = setInterval(() => {
  //     count++;
  //     obs.next(count);
  //   }, 2000);

  //   return () => {
  //     clearInterval(intervalo);
  //     console.log("Aqui termina el intervalo...");
  //   };
  // });

  // const demo = data$.subscribe(observer);

  // setTimeout(() => {
  //   demo.unsubscribe();
  //   console.log("Ya no estas subscrito al observable :(");
  // }, 10000);

  return (
    <div>
      <h1>Index</h1>
    </div>
  );
}

export default Index;
