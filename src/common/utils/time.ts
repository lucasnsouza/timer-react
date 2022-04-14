//funções utilitárias para tratar unidades de data, tempo, etc...
export function tempoParaSegundos(tempo: string) {
    //vamos receber o tempo nesse formato "00:00:00"
    //vamos usar o split para quebrar num array horas, minutos e segundos
    const [ horas = '0', minutos = '0', segundos ='0'] = tempo.split(":");

    //vamos converter a string para number
    //daí vamos converter as horas e os minutos em segundos

    const horasEmSegundos = Number(horas) * 3600;

    const minutosEmSegundos = Number(minutos) * 60;

    return horasEmSegundos + minutosEmSegundos + Number(segundos);
}