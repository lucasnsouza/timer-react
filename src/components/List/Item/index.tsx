import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

//const {conteudo, tempo} = props;
//destructuring acima também pode ser feito na forma direta abaixo
function Item({
  conteudo,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) {
  return (
    <li
      //se selecionado for true adiciona o css de itemSelecionado e de itemCompletado
      className={`
      ${style.item} 
      ${selecionado ? style.itemSelecionado : ""}
      ${completado ? style.itemCompletado : ""}
      `}
      onClick={() =>
        //usammos a mesma renderização condicional
        //podemos ler que só vai executar o onclick se completado for false
        !completado &&
        selecionaTarefa({
          conteudo,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{conteudo}</h3>
      <span>{tempo}</span>
      {/* renderização condicional */}
      {completado && (
        <span className={style.concluido} aria-label="tarefa-completada"></span>
      )}
    </li>
  );
}

export default Item;
