import React, { useState } from 'react'
import { filter, debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import { BehaviorSubject, from } from 'rxjs';
import useObservable from './useObservable';



const getPkemon=async(name)=>{
    const{results:allPokemons}=await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000')
    .then(res=>res.json());
    return allPokemons.filter(pokemon=>pokemon.name.includes(name));
}

let buscarPokemon=new BehaviorSubject('');
let buscarResultadoObservable=buscarPokemon.pipe(
    filter(val=>val.length > 1) ,
    debounceTime(750),
    distinctUntilChanged(),
    mergeMap(val => from(getPkemon(val)))
    
)

function Pokemon() {
    const[buscar,setBuscar]=useState('')
    const[results,setResults]=useState([])

    useObservable(buscarResultadoObservable,setResults);

    const onChangeBuscar=({target})=>{
        const newValue = target.value
        setBuscar(newValue)
        buscarPokemon.next(newValue)
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Buscar"
                value={buscar}
                onChange={onChangeBuscar}
            />
            {
                results && results.map(pokemon=>{
                    return(
                    <h3 key={pokemon.name}>{pokemon.name}</h3>
                    )
                })
            }
        </div>
    )
}

export default Pokemon
