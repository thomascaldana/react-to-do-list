import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

import { Container, ToDoList, Input, Button, ListItem } from './styles'
//   JSX SINTAX

function App() {
  // JavaScript code

  const [list, setList] = useState([{ id: uuidv4(), task: "Nothing", finished: true }]);
  const [InputTask, setInputTask] = useState('');

  //['Levar o Nico para passear', 'Terminar as aulas de React no DevClub']

  function showInputValue(event) {
    setInputTask(event.target.value);

  }

  function addTask() {
    setList([...list, { id: uuidv4(), task: InputTask, finished: false }])
    console.log(list)
  }

  function markAsDoneTask(id) {
    console.log(id)
    const newList =  list.map( item => (
      item.id === id ? { ...item, finished: !item.finished} : item
    ))

    setList(newList)
  }

  // return HTML code
  return (

    <Container>
      <ToDoList>
        <Input onChange={showInputValue} placeholder="O que tenha para fazer ..." />
        <Button onClick={addTask}>Adicionar</Button>

        <ul>
          {list.map(item => ( // inside this is the return. the word return is hidden

            <ListItem isFinished={item.finished} key={item.id}>
              <FcCheckmark onClick={() => markAsDoneTask(item.id)}/>
              <li>{item.task}</li>
              <FcEmptyTrash />
            </ListItem>

          ))}
        </ul>
      </ToDoList>
    </Container>

  )
}

export default App;
