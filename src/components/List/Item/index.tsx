import style from '../List.module.scss';

//const {conteudo, tempo} = props;
//destructuring acima também pode ser feito na forma direta abaixo
function Item({ conteudo, tempo }: { conteudo: string; tempo: string }) {
  return (
    <li className={style.item}>
      <h3>{conteudo}</h3>
      <span>{tempo}</span>
    </li>
  );
}

export default Item;
