//questão 3
const fs = require('fs');
let faturamentosDia=[]
let dia=0
const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
for(i=0;i<30;i++){
    dia++
    let fatObjetoJs={
        diaMes:dia,
        diaSemana:diasDaSemana[(dia%7)]
    }
    if (fatObjetoJs.diaSemana==='Sábado'|| fatObjetoJs.diaSemana=="Domingo"){
        fatObjetoJs.faturamento=0
    }
    else{
    fatObjetoJs.faturamento=parseInt(Math.random()*15000+5000)//numero aleatorio de 5000 a 15000
    }
    faturamentosDia.push(fatObjetoJs)
    
}
const jsonStringFatDia = JSON.stringify(faturamentosDia, null, 2); // O 'null, 2' é para formatação
// Salvando o JSON em um arquivo
let numJson=0
fs.writeFile(`./faturamentosDia${numJson}.json`, jsonStringFatDia, (err) => {
    if (err) {
        console.error('Erro ao salvar o arquivo JSON:', err);
    } else {
        console.log('Arquivo JSON salvo com sucesso!');
    }
    fs.readFile(`./faturamentosDia${numJson}.json`, 'utf8', (err, fatDiaLeitura) => {
        if (err) {
            console.error('Erro ao ler o arquivo JSON:', err);
            return;
        }
    
        // Convertendo a string JSON para um objeto JavaScript
        const soFaturamentos = JSON.parse(fatDiaLeitura).filter(dia => dia.diaSemana!='Sábado'&& dia.diaSemana!="Domingo").map(dia => dia.faturamento);
        const fatMinimo = Math.min(...soFaturamentos)
        console.log(soFaturamentos)
        console.log(`faturamento minimo é ${fatMinimo}`);
        const fatMaximo = Math.max(...soFaturamentos)
        console.log(`faturamento máximo é ${fatMaximo}`);
        const media = soFaturamentos.reduce((acc,faturamento)=>acc+faturamento,0 ) /soFaturamentos.length
        console.log(`a média é ${media}`)
    })
});
