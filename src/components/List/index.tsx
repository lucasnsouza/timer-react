import React from "react";
import './style.scss';

function List() {
  const tarefas = [
    {
      id: 1,
      conteudo: "React",
      tempo: "02:00:00",
    },
    {
      id: 2,
      conteudo: "Laravel",
      tempo: "01:20:00",
    },
    {
      id: 3,
      conteudo: "Typescript",
      tempo: "03:00:00",
    },
  ];

  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="item">
            <h3>{tarefa.conteudo}</h3>
            <span>{tarefa.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
