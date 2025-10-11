import { FC } from "react";
import type { Todo } from "../types";
import TodoItem from "./TodoItem";

type Props = {
  todoArray: Todo[];
};

const Todos: FC<Props> = ({todoArray}) => {

  return (
    <ul>
      {
        
          todoArray.map((todo) => {
            return <TodoItem key={todo.id} 
            item={todo} />  
          })
       
      }
        
    </ul>
  );
};

export default Todos;
