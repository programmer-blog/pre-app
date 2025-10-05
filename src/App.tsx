// import { useState } from 'react';
import './App.css'
import { LoginForm } from './components/LoginForm'
// import AutoCounter from './components/AutoCounter'
// import PostPage from './PostPage'
// import Todos from './components/Todo';

function App() {
  // const [showCounter, setShowCounter] = useState(true);

  return (
    <>
    <LoginForm />
    {/* <Todos />
    {showCounter && <AutoCounter />}
    <button className='mb-10' onClick={() => setShowCounter(!showCounter)}>Toggle Counter</button>
    <PostPage /> */}
    </>
  )
}

export default App
