import React from 'react'
import Todoitem from './Todoitem'
import { useState ,useEffect} from 'react'
import Addtodo from './Addtodo'
import Footer from './Footer'


const Todos = () => {
  const [todos, settodos] = useState(() => {
    const savetodo = localStorage.getItem('todos');
    return savetodo ? JSON.parse(savetodo) : [];

  });
  useEffect(() => {
    // Update local storage whenever todos change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const addtodo = (newTodo) => {
    const updatetodo = ([...todos, newTodo]);
    settodos(updatetodo);
    localStorage.setItem('todos', JSON.stringify(updatetodo))
  }

  const handledelete = (title) => {
    settodos(todos.filter((todo) => todo.title !== title))
    console.log("note deleted with title..", title);
  }
  return (
    <>
    <div>
      <Addtodo onaddtodo={addtodo} />
      {todos.map((todo) => < Todoitem key={todo.title} title={todo.title} desc={todo.desc} handledelete={() => { handledelete(todo.title) }} />)}
    </div>
     <Footer/>
    </>
  )
}

export default Todos
