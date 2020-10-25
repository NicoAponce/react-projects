import React from "react";
import {   fromEvent, interval, of } from "rxjs";
import { scan,mapTo, switchMap, tap, map } from "rxjs/operators";
import {} from "rxjs/ajax";

const Demo = () => {

//   const source = of(1, 2, 3, 4, 5);
// // transparently log values from source with 'tap'
// const example = source.pipe(
//   tap(val => console.log(`BEFORE MAP: ${val}`)),
//   map(val => val + 10),
//   tap(val => console.log(`AFTER MAP: ${val}`))
// );
// //'tap' does not transform values
// //output: 11...12...13...14...15
// const subscribe = example.subscribe(val => console.log(val));

  // fromEvent(document,'click').pipe(
  //   switchMap(()=>interval(1000))
  // ).subscribe(console.log)

  // const click$=fromEvent(document,'click')
  // const data=click$.pipe(
  //   mapTo(1)
  // )
  // data.pipe(scan((acc,cur)=>acc+cur)).subscribe(console.log)

    // interval(700).pipe(
    //   scan((acc,cur)=>[...acc,cur],[]),
    //   map(val=>val[Math.floor(Math.random()*val.length)]),
    //   distinct()
    // ).subscribe(console.log)

  // from([
  //     {name:'nicolas',lastName:'aponce',age:15,phone:'987654321',nick:'jinyor',address:'lima'},
  //     {name:'juan',lastName:'gomez',age:16,phone:'987654321',nick:'jinyor',address:'lima'},
  //     {name:'carlos',lastName:'ramos',age:18,phone:'987654321',nick:'jinyor',address:'lima'},
  //     {name:'diana',lastName:'quispe',age:15,phone:'987654321',nick:'jinyor',address:'lima'},
  //     {name:'jeni',lastName:'melgar',age:10,phone:'987654321',nick:'jinyor',address:'lima'},
  //     {name:'maria',lastName:'aponce',age:15,phone:'987654321',nick:'jinyor',address:'lima'},
  //     {name:'bertha',lastName:'aponce',age:20,phone:'987654321',nick:'jinyor',address:'lima'},
  //     {name:'alex',lastName:'aponce',age:32,phone:'987654321',nick:'jinyor',address:'lima'}
  //   ]).pipe( map(val=>`Hola soy ${val.name} y tengo ${val.age} años`)).subscribe(console.log)

  // const click$=fromEvent(document,'click')
  // click$.pipe(
  //   mergeMap(()=>interval(1000).pipe(take(5)))
  // ).subscribe(console.log)

  // const data$=of(2000,1000)

  // data$.pipe(
  //   concatMap(val=>of(`cm ${val}`).pipe(delay(val)))
  // ).subscribe(console.log)

  // data$.pipe(
  //   mergeMap(val=>of(`mm ${val}`).pipe(delay(val)))
  // ).subscribe(console.log)

  // const click$=fromEvent(document,'click')
  // interval(20).pipe(
  //   takeUntil(click$)
  // ).subscribe(console.log)

    // const interval$=interval(1000)
    // const timer$=timer(5000)

    // interval$.pipe(
    //   takeUntil(timer$)
    // ).subscribe(console.log)

  // from([
  //   {name:'nicolas',lastName:'aponce',age:15,phone:'987654321',nick:'jinyor',address:'lima'},
  //   {name:'juan',lastName:'gomez',age:16,phone:'987654321',nick:'jinyor',address:'lima'},
  //   {name:'carlos',lastName:'ramos',age:18,phone:'987654321',nick:'jinyor',address:'lima'},
  //   {name:'diana',lastName:'quispe',age:15,phone:'987654321',nick:'jinyor',address:'lima'},
  //   {name:'jeni',lastName:'melgar',age:10,phone:'987654321',nick:'jinyor',address:'lima'},
  //   {name:'maria',lastName:'aponce',age:15,phone:'987654321',nick:'jinyor',address:'lima'},
  //   {name:'bertha',lastName:'aponce',age:20,phone:'987654321',nick:'jinyor',address:'lima'},
  //   {name:'alex',lastName:'aponce',age:32,phone:'987654321',nick:'jinyor',address:'lima'}
  // ]).pipe(
  //   filter(val=>val.lastName ==='aponce')
  // ).subscribe(console.log)


  

  // const input=document.createElement('input')
  // const body=document.querySelector('body')
  // body.append(input)

  // const input$=fromEvent(input,'keyup')
  // input$.pipe(
  //   debounceTime(1000),
  //   pluck('target','value')
  // ).subscribe(console.log)

  // const click$=fromEvent(document,'click')
  // const interval$=interval(1000)

  // click$.pipe(
  //   pluck('type'),
  //   withLatestFrom(interval$)
  // ).subscribe(console.log)

  // const source = interval(5000);
  // //emit every 1s
  // const secondSource = interval(1000);
  // source.pipe(
  //   withLatestFrom(secondSource),
  //   map(([five,one])=>{
  //     return `cada 5 minutos: ${five} => cada 1 segundo: ${one}`
  //   })
  // ).subscribe(val => console.log(val));

  // const interval$ = interval(1000).pipe(take(3));

  // interval$.pipe(startWith(-3, -2, -1)).subscribe(console.log);

  // const color$=of('rojo','azul','verde')

  // color$.pipe(
  //   startWith('negro'),
  //   scan((acc,cur)=> `${acc} ${cur}`)
  // ).subscribe(console.log)

  /**
   * MERGE
   */
  // const uno$ = interval(1199).pipe(mapTo("UNO"), take(3));
  // const dos$ = interval(1001).pipe(mapTo("dos"), take(3));
  // const tres$ = interval(3200).pipe(mapTo("TRES"), take(3));
  // merge(uno$, dos$, tres$).subscribe(console.log);

  // const nombre$=of('nicolas','diana','jeni','carmne').pipe(delay(1000))
  // const color$=of('rojo','verde','azul','negro').pipe(delay(3000))
  // const animal$=of('sapo','gallo','perro','gato').pipe(delay(5000))

  // merge(nombre$,color$,animal$).subscribe(console.log)

  // const primero$ = interval(1000);
  // const segundo$ = interval(1500);
  // const tercero$ = interval(2000);
  // const cuarto$ = interval(2500);
  // const quinto$ = interval(3000);

  // merge(
  //   primero$.pipe(mapTo("primero")),
  //   segundo$.pipe(mapTo("segundo")),
  //   tercero$.pipe(mapTo("tercero")),
  //   cuarto$.pipe(mapTo("cuarto")),
  //   quinto$.pipe(mapTo("quinto"))
  // ).subscribe(console.log);

  /**
   * CONCAT
   */
  // const numeros$ = of(1, 2, 3);
  // const letras$ = of("a", "b", "c");
  // const simbolos$ = of("#", "&", "$");
  // const interval$ = interval(2000);

  // concat(numeros$, letras$, simbolos$, interval$).subscribe(console.log);

  // const interval$=interval(1000).pipe(take(4))
  // const range$=range(100,10)
  // concat(interval$,range$).subscribe(console.log)

  /**
   * COMBINELATEST
   */
  // const timerOne$ = timer(1000, 4000);
  // const timerTwo$ = timer(2000, 4000);
  // const timerThree$ = timer(3000, 4000);

  // combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(console.log);

  // const fruit$ = from(["apple", "banana", "mango"]).pipe(
  //   concatMap((val) => of(val).pipe(delay(1000)))
  // );

  // const veggie$ = from(["carrot", "beetroot", "spinach"]).pipe(
  //   concatMap((val) => of(val).pipe(delay(2000)))
  // );

  // const proteinPowder$ = from(["whey", "casein", "pea"]).pipe(
  //   concatMap((val) => of(val).pipe(delay(3000)))
  // );

  // combineLatest(fruit$, veggie$, proteinPowder$).subscribe(console.log);

  return (
    <div>
      <h1>Demo</h1>
    </div>
  );
};

export default Demo;
