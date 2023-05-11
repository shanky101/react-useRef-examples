import UserList from "./UserList";
import SimpleInputContainer from "./SimpleInputContainer";

export default function App() {
  console.log("Inside app");
  return (
    <div className="App">
      <h3>React ref examples</h3>
      {/* <SimpleInputContainer /> */}
      <UserList />
    </div>
  );
}
