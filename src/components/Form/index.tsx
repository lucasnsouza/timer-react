import React, { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";

function Form() {
  /*
  usando state do react para controlar os values dos inputs de tarefa e tempo
  dessa forma podemos pegar esses valores e passar para a lista
  */
  const [estadoDoForm, setEstadoDoForm] = useState({tarefa: "", tempo: "00:00"});

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
      //pegamos o evento como parametro
      //e agora vamos impedir que o form siga o padrão e dê refresh na página
      evento.preventDefault();
      console.log(estadoDoForm);
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={estadoDoForm.tarefa}
          onChange={evento => setEstadoDoForm({...estadoDoForm, tarefa: evento.target.value})}
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
          onChange={evento => setEstadoDoForm({...estadoDoForm, tempo: evento.target.value})}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button>Adicionar</Button>
    </form>
  );
}

export default Form;
