import React from 'react';
import './App.css';
import {Header, ToDoList} from '../components';

function App() {
  return (
   <div className='bg-slate-800 min-h-[100vh]'>
            <Header/>
            <div className='flex max-w-[1200px] ml-auto mr-auto  justify-evenly mt-[50px]'>
              <ToDoList heading="todo"/>
              <ToDoList heading="progress"/>
              <ToDoList heading="review"/>
              <ToDoList heading="done"/>
            </div>
   </div>
  );
}

export default App;
