import React, { useState, useEffect } from "react";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";

const api = `https://randomuser.me/api/?results=5&seed=rx-react&nat=us&inc=name&noinfo`;
const getName = (user) => `${user.name.first} ${user.name.last}`;
const names$ = ajax
  .getJSON(api)
  .pipe(map(({ results: users }) => users.map(getName)));

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

function RxjsDemoDos() {
  const names = useObservable(names$);
  console.log('names', names)
  return (
    <div>
      <h1>RxJx con React-Dos</h1>
      <ul>
        {names &&
          names.map((item, index) => {
            return <List key={index} person={item} />;
          })}
      </ul>
    </div>
  );
}

export default RxjsDemoDos;
