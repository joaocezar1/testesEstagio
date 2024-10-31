
//Questão 1. Será a soma de Gauss até 12, ou seja 78.
const indice=13
let k=0, soma=0;
for(k; k<indice; k++){
    soma+=k
}
console.log(soma)
//Questão 2. 
let sequenciaFib=[0,1]//armazena valores previamente calculados
let fibo=null
function fibonacci(num){
    if(sequenciaFib[num]!==undefined) {
        fibo=sequenciaFib[num]}
    else{ fibo=fibonacci(num-1)+fibonacci(num-2)
    sequenciaFib.push(fibo)
    }
    return fibo
}
console.log(fibonacci(6))
function pertenceASeqFibonacci(num){
    if (num<0) return false
    if (sequenciaFib.includes(num)) return true
    const tamanhoArray= sequenciaFib.length//pega o tamanho para localizar ultimo,penultimo e antepenultimo
    if (maior = sequenciaFib[tamanhoArray-1]>num)return false//se achar um numero dentro do array superior, não pertence a sequencia

    let fib=maior, fibMenos1=sequenciaFib[tamanhoArray-2],k=tamanhoArray-1 //fibMenos1 e 2 amrazenam o penultimo e antipenultimo valores de fib
    let fibProximo=fib+fibMenos1//evita muitas chamadas recursivas ao verificar se vale a pena ou não calcular o proximo numero
    while(fibProximo<=num){
        if (fibProximo==num){
            sequenciaFib.push(fibProximo)
            return true
        } 
        k++
        fibMenos1=fib
        fib=fibonacci(k)
        fibProximo=fib+fibMenos1
    }
    return false
}
console.log(pertenceASeqFibonacci(32))
console.log(pertenceASeqFibonacci(34))



