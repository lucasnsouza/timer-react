import style from "./Clock.module.scss";

interface Props {
  tempo:number | undefined
}
//tipando a prop de tempo e definindo um valor padrão caso seja undefined
function Clock({ tempo = 0 }: Props) {
  //o tempo recebido é em segundos, precisamos converter
  //para os minutos vamos dividir por 60 e arredondar para que não haja sobra
  const minutos = Math.floor(tempo / 60);
  //já para os segundos vamos ficar com o resto da divisão
  //que vai resultar apenas nos segundos
  const segundos = tempo % 60;

  //vamos transformar os minutos em string novamente
  //daí desustrutar o array de caracteres pelo index
  //sendo o primeiro index a dezena, e o segundo a unidade
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');

  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  );
}

export default Clock;
