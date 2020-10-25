import { useEffect } from 'react'

function useObservable(observable,setter) {
    useEffect(() => {
        let suscripcion = observable.subscribe((result) => {
          setter(result);
          console.log("result", result);
        });
        return () => suscripcion.unsubscribe();
      }, [observable,setter]);
}

export default useObservable
