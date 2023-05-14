import { useState, useEffect } from "react";
import classes from "./PokemonContainer.module.css";

function PokemonContainer() {
  const GET_POKEMON_LIST_DATA = `https://pokeapi.co/api/v2/pokemon`;
  const [pokemonListData, setPokemonListData] = useState(null); // Stores initial list of pokemons
  const [pokemonListDetails, setPokemonListDetails] = useState(null); // Stores an array of objects - details of all pokemons stored in pokemonListData
  const [pokemonURLS, setPokemonURlS] = useState(null);
  const [pokemonNames, setPokemonNames] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GET_POKEMON_LIST_DATA);
        const data = await response.json();
        setPokemonListData(data.results);
        console.log("List data", data.results);
        getPokemonListDetailsURL(data.results);
      } catch (error) {
        console.log("Error fetching pokemon list data", error);
      }
    };

    fetchData();
  }, [GET_POKEMON_LIST_DATA]);

  useEffect(() => {
    async function fetchPokemonDetails() {
      const finalResult = [];
      console.log("Inside 2nd useffect - pokemonURLS", pokemonURLS);
      try {
        // Map each userId to a promise that eventually fulfills
        // with the username
        // Method 1
        // const promises = pokemonURLS.map(async (url) => {
        //   const result = await fetch(url);
        //   return result;
        // });
        // console.log("promises", promises);

        // Method 2
        const mappedPromises = pokemonURLS.map((url) => fetch(url));
        // Wait for all promises to fulfill first, then log
        // the usernames
        const pokemonDataPromises = await Promise.allSettled(mappedPromises);

        for (let item of pokemonDataPromises) {
          let value = await item.value.json();
          finalResult.push(value);
        }

        console.log("finalResult", finalResult);
      } catch (error) {
        console.log("Fetching pokemon details failed", error);
      }
    }

    fetchPokemonDetails();
  }, [pokemonURLS]);

  function getPokemonListDetailsURL(data) {
    const pokemonListURL = [];
    const pokemonListNames = [];
    for (let item of data) {
      pokemonListURL.push(item.url);
      pokemonListNames.push(item.name);
    }
    console.log("pokemonListURL", pokemonListURL);
    console.log("pokemonListNames", pokemonListNames);

    setPokemonNames(pokemonListNames);
    setPokemonURlS(pokemonListURL);
  }

  // useEffect(() => {
  //   const fetchPokemonDetails = () => {
  //     try {
  //       const response = await fetch()
  //     } catch (error) {
  //       console.log('Error fetching pokemon details data', error)
  //     }
  //   }

  //   // fetchPokemonDetails
  // }, [pokemonListData])

  return (
    <div className={classes.pokemonContainer}>
      <div>Pokemon fetch data controls</div>
      <div>Pokemon card container</div>
    </div>
  );
}

export default PokemonContainer;
