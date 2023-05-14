import UserList from "./containers/userlist/UserList";
import SimpleInputContainer from "./containers/inputRef/SimpleInputContainer";
import SearchContainer from "./containers/debounceSearch/SearchContainer";
import ContextContainer from "./containers/context/ContextContainer";
import PokemonContainer from "./containers/multipleAPICallsPokemon/PokemonContainer";

export default function App() {
  console.log("Inside app");
  return (
    <div className="App">
      <h3>React playground</h3>
      {/* <ContextContainer /> */}
      {/* <SimpleInputContainer /> */}
      {/* <UserList /> */}
      {/* <SearchContainer /> */}
      <PokemonContainer />
    </div>
  );
}
