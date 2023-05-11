import UserList from "./containers/userlist/UserList";
import SimpleInputContainer from "./containers/inputRef/SimpleInputContainer";

export default function App() {
  console.log("Inside app");
  return (
    <div className="App">
      <h3>React playground</h3>
      {/* <SimpleInputContainer /> */}
      <UserList />
    </div>
  );
}
