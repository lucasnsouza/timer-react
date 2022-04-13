import Item from './Item';
import style from './List.module.scss';

function List() {
  const tarefas = [
    {
      id: 1,
      conteudo: "React",
      tempo: "02:00:00",
    },
    {
      id: 2,
      conteudo: "Laravel",
      tempo: "01:20:00",
    },
    {
      id: 3,
      conteudo: "Typescript",
      tempo: "03:00:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item
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
