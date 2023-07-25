
export const fetchMethod = async(api) => {
    try {
        const getPokemon = await fetch(api);
        getErrorStatus(getPokemon.status); // Added a function that can handle the error status efficiently.
        const getPokemonJson = await getPokemon.json();
        return Promise.resolve(getPokemonJson.results);
      } catch (error) {
        return Promise.reject(error);
      }
}

const getErrorStatus = (status) => {
    if (status === 401) {
      throw new Error("Something went wrong"); // Instead of return we can directly throw error so it directly go to catch with some error message
    }
    if (status === 301) {
      throw new Error("API is wrong"); // Instead of return we can directly throw error so it directly go to catch with some error message
    }
    if (status === 200) {
      return null;
    }
    return null;
  };