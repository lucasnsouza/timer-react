import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface Props {
    selecionado: ITarefa | undefined
}

function Timer({ selecionado } : Props) {
    //vamos criar um estado para tempo
    //já que vamos usar esse valor no nosso cronometro
    const [tempo, setTempo] = useState<number>();
    if (selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e incie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
            <Clock/>
            </div>
            <Button>
                Começar
            </Button>
        </div>
    )
}

export default Timer;