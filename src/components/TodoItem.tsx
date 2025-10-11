import { FC } from "react";
import type { Todo } from "../types";

type TodoItemProps = { 
  item: Todo; 
};

const TodoItem: FC<TodoItemProps> = ({ item }) => {
  return (
    <li
      id={`todo_item_${item.id}`}
    >
      {item.title}
      -
      {item.completed ? "Completed" : "Not Completed"}
    </li>
  );
};

export default TodoItem;
