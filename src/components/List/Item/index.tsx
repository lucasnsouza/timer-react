import { ITarefa } from "../../../types/tarefa";
import style from "../List.module.scss";

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
    //se selecionado for true adiciona o css de itemSelecionado 
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() =>
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
    </li>
  );
}

export default Item;
