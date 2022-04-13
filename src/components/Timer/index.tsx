import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

function Timer() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e incie o cronômetro</p>
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