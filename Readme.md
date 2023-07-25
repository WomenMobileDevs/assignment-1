Please create an API call to retrieve data from "https://pokeapi.co/api/v2/ability" while implementing error handling. Display the ability names and their corresponding abilities in the response. Additionally, design a visually appealing card to showcase the Pokémon details.


how do I resolve the above issue ?

- first fetch the api and show it in a response 
- api.js > useEffect > function getPokemon() > fetch(api)// api will be from api.js file incase more api's are there, will handle errors and fetch inside util function
- in getPokemon, will just get a response or error if its there
- then call component which will display pokemon and make flatlist 
- with DisplayPokemonCard component