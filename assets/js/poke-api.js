

const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 20) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json()) //transforma em uma promisse convertida em json
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}


