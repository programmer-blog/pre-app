import { useEffect, useState } from 'react';
import './App.css'
import Todos from './components/Todos'
import { getTodos } from './components/api/todos/todos-api';
import type { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [finishedCount, setFinishedCount] = useState<number>(0);  
  
  useEffect(() => {
    getTodos().then((todos) => {
      setTodos(todos);
      // setTimeout(() => {
      //   setTodos((todosArray) => {
      //     return todosArray.map((todo, index) => { 
      //       if(index <=10){
      //         return {...todo, completed: true}
      //       }
      //       return todo;
      //     });
      //   })
      // }, 2000)
    })  
  }, []);

  useEffect(() => {
    const count = todos.filter(todo =>todo.completed).length;  
    setFinishedCount(count);
   }, [todos])

  return (
    <>
    <p className='text-3xl'>
      Finished Todos  =  
      <span className='font-bold'>{finishedCount}</span>
    </p>
      <Todos todoArray={todos} />
    </>
  )
}

export default App
