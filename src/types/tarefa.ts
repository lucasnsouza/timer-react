//vamos definir um tipo comum para tarefas
//criamos essa interface para significar na tipagem que vamos receber um array de tarefas
export interface ITarefa {
    conteudo: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    id: string
  }