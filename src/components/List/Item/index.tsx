import { ITarefa } from '../../../types/tarefa';
import style from '../List.module.scss';

//const {conteudo, tempo} = props;
//destructuring acima também pode ser feito na forma direta abaixo
function Item({ conteudo, tempo, selecionado, completado, id }: ITarefa) {
  console.log('item atual: ', {
    conteudo, tempo, selecionado, completado, id
  });
  return (
    <li className={style.item}>
      <h3>{conteudo}</h3>
      <span>{tempo}</span>
    </li>
  );
}

export default Item;
