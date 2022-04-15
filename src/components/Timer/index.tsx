import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarfa: () => void
}

function Timer({ selecionado, finalizarTarfa }: Props) {
  //vamos criar um estado para tempo
  //já que vamos usar esse valor no nosso cronometro
  const [tempo, setTempo] = useState<number>();
  //permite monitorar se a prop selecionado mudou ou foi selecionado outro item
    useEffect(() => {
    //daí com o item selecionado podemos verificar se ele existe e converter para segundos
    //é o mesmo que escrever if(selecionado && selecionado.tempo) 
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarfa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e incie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo}/>
      </div>
      <Button onClick={() => regressiva(tempo)}>Começar</Button>
    </div>
  );
}

export default Timer;
