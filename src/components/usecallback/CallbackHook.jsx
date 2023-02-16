
import { useCallback, useState } from "react";
import Todos from "./Todos";


const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  return (
    <Wrapper>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </Wrapper>
  );
};



export default Callbackhook;

