import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from 'uuid';

function Form({
  setTarefas,
}: {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}) {
  /*
  usando state do react para controlar os values dos inputs de tarefa e tempo
  dessa forma podemos pegar esses valores e passar para a lista
  */
  const [estadoDoForm, setEstadoDoForm] = useState({
    conteudo: "",
    tempo: "00:00",
  });

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    //pegamos o evento como parametro
    //e agora vamos impedir que o form siga o padrão e dê refresh na página
    evento.preventDefault();
    //pega a lista de tarefas atual e adiciona os dados no dor form as tarefas
    setTarefas((tarfeasAntigas) => 
      [
        ...tarfeasAntigas, 
        { 
          ...estadoDoForm,
          selecionado: false,
          completado: false,
          id: uuidv4() 
        }
      ]
    );
    //resetar form após inclusão da tarefa
    setEstadoDoForm({
      conteudo: "",
      tempo: "00:00",
    });
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={estadoDoForm.conteudo}
          onChange={(evento) =>
            setEstadoDoForm({ ...estadoDoForm, conteudo: evento.target.value })
          }
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={estadoDoForm.tempo}
          onChange={(evento) =>
            setEstadoDoForm({ ...estadoDoForm, tempo: evento.target.value })
          }
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Form;
