import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tarefas: ITarefa[];
  //para tipar uma função informamos o parametro e seu tipo
  //e também informamos o tipo de retorno da função
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function List({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={tarefa.id}
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
