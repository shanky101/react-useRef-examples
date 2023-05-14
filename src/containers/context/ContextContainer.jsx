import { useReducer, useState, useCallback } from "react";
import { TodoReducer } from "./ThemeContext";

function ContextContainer() {
  const [todos, dispatch] = useReducer(TodoReducer);
  const [inputState, setInputState] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [id, setId] = useState(1);

  const handleChange = (e) => {
    setInputState(e.target.value);
  };

  const handleCheckBoxChange = () => {
    setCheckBox(!checkbox);
  };

  const handleAddTodo = useCallback(() => {
    console.log("Inside add todo event handler button");
    // dispatch({ type: "ADD_TODO", payload: { name: todoName } });
    setId((id) => id + 1);
    dispatch({
      type: "create",
      id,
      message: inputState,
      completed: false,
    });
  });

  // console.log("Inside add todo event handler button");
  // console.log("ContextContainer - todos", todos);

  return (
    <div>
      <div>
        <input onChange={handleChange} value={inputState} />
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
      <div>
        {todos &&
          todos.map((item) => {
            return (
              <div
                id={item.id}
                style={{ display: "flex", flexDirection: "row", gap: "1px" }}
              >
                <p>{item.message}</p>
                <input
                  type="checkbox"
                  checked={checkbox}
                  onChange={handleCheckBoxChange}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ContextContainer;
