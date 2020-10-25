import React, { useState, useEffect } from "react";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

const persons = ["Nicolas", "Jeniffer", "Carlos", "Bertha", "Huari"];
const names$ = interval(1500).pipe(map((item) => persons.slice(0, item + 1)));

const useObservable = (observable) => {
  const [state, setState] = useState();
  useEffect(() => {
    const subscription = observable.subscribe(setState);
    return () => subscription.unsubscribe();
  }, [observable]);
  return state;
};

const List = ({ person }) => {
  return <li>{person}</li>;
};

const RxjsDemoUno = () => {
  const names = useObservable(names$);

  return (
    <div>
      <h1>RxJx con React-Uno</h1>
      <ul>
        {names &&
          names.map((item, index) => {
            return <List key={index} person={item} />;
          })}
      </ul>
    </div>
  );
};

export default RxjsDemoUno;
