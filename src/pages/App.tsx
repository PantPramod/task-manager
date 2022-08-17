import React, { useState } from 'react';
import './App.css';
import {Header, ToDoList} from '../components';
import { ListType } from '../Helper/typeDefinition';

function App() {

  
  const [List, setList] = useState<ListType[]>([]);



  return (
   <div className='bg-slate-800 min-h-[100vh]'>
            <Header/>
            <div className='flex max-w-[1200px] ml-auto mr-auto  justify-evenly mt-[50px]'>
              <ToDoList heading="todo" List ={List} setList={setList}/>
              <ToDoList heading="progress" List ={List} setList={setList}/>
              <ToDoList heading="review" List ={List} setList={setList}/>
              <ToDoList heading="done" List ={List} setList={setList}/>
            </div>
   </div>
  );
}

export default App;
