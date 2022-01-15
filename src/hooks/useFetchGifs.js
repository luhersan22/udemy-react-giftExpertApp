import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
   
    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    //Busca las imagenes de acuerdo a una categoria
    useEffect(()=> {
        
        getGifs( category )
        .then( imgs => {
            setState({ 
                data: imgs, 
                loading: false 
            });
        } );

    }, [ category ]);

    return state;
}


//useEffect
//permite ejecutar cierto codigo de manera condicional
//si se manda la lista de dependencia [] el useEffect solo se va ejecutar una unica vez
//es equivalente al component did mount
//[ category ] indica que si la categoria cambia, vuelve a ejecutar el efecto.
//Los efectos no pueden ser async, porque siempre esperan algo sincrono