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
  //const para poder iterar sobre os itens da lista e verificar qual foi selecionado
  const [ selecionado, setSelecionado ] = useState<ITarefa>();

  //a função será passada através de props para List e então Item
  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      //iterar sobe todas as tarefas, daí se a tarefa da iteração tiver o mesmo id da tarefa selecionada
      //retorna a propriedade selecionado como true
      selecionado: tarefa.id == tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa} 
      />
      <Timer/>
    </div>
  );
}

export default App;
