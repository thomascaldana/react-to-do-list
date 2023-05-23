import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



import { Container, ToDoList, Input, Button, ListItem, CheckIcon, TrashIcon, Message } from './styles'
//   JSX SINTAX

function App() {
  // JavaScript code

  const [list, setList] = useState([]);
  const [InputTask, setInputTask] = useState('');

  //['Levar o Nico para passear', 'Terminar as aulas de React no DevClub']

  function takeInputValue(event) {
    setInputTask(event.target.value);
  }





  function addTask() {
    if (InputTask) {
      setList([...list, { id: uuidv4(), task: InputTask, finished: false }])
    }
  }

  function markAsDoneTask(id) {
    console.log(id)
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deleteTask(id) {
    console.log(id)
    const newList = list.filter(item => (
      item.id !== id ? true : false
    ))
    setList(newList)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  }



  // return HTML code
  return (

    <Container>
      <ToDoList>
        <Input onChange={takeInputValue} onKeyDown={handleKeyDown} placeholder="Add a task ..." autoFocus />
        <Button onClick={addTask}>Add</Button>

        <ul>

          {
            list.length > 0 ? (

              list.map(item => ( // inside this is the return. the word return is hidden

                <ListItem isFinished={item.finished} key={item.id}>
                  <CheckIcon onClick={() => markAsDoneTask(item.id)} />
                  <li>{item.task}</li>
                  <TrashIcon onClick={() => deleteTask(item.id)} />
                </ListItem>

              ))
            ) : (
              <Message>-- Tasks will show up here once added --</Message>
            )
          }
        </ul>
      </ToDoList>
    </Container>

  )
}

export default App;
