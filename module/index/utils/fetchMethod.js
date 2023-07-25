
export const fetchMethod = async(api) => {
    try{
        const getPokemon = await fetch(api)
        if(getPokemon.status != 200){
            return 'something went wrong'
        }
        else{
            const getPokemonJson = await getPokemon.json()
            return getPokemonJson.results;
    
        }
    }catch(error){
        return error
    }
}