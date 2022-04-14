import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  //como vamos começar sempre a aplicação com array vazio
  //tipamos que useState pode ser tanto um array de ITarefa ou um array vazio
  const [ tarefas, setTarefas ] = useState<ITarefa[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List tarefas={tarefas}/>
      <Timer/>
    </div>
  );
}

export default App;
