


//1. Recibe el nombre de una categoria
//2. Consume el servicio de gifs con la categoria y crea un json con la informacion de 10 imagenes
//3. Devuelve una promesa que resuelve la busqueda de las imagenes
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=yHFqTHKI3xUlmlsvVTHy4Pcd3g1qX5KM`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img?.images.downsized_medium?.url
        }
    })
    return gifs;
}