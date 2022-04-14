import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './List.module.scss';



function List({ tarefas }: { tarefas: ITarefa[]}) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item
          key={Math.random()}
          //usando o destructuring novamente, spread operator
          //indicamos que vamos usar todas as prorpiedades do objeto tarefa
          //não indicado caso estejamos trabalhando com objetos grandes ou 
          //com dados retornados de uma api externa, em não sabemos todo conteúdo retornado
          //como nesse caso estamos com um objeto de escopo controlado e sabemos suas propriedades
          //decidimos usar spread operator
          {...tarefa}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
