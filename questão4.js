const faturamentos={
    sp:67836.43,
    rj:36678.66,
    mg:29229.88,
    es:27165.48,
    outros:19849.53
}
total = Object.values(faturamentos).reduce((acc, faturamento)=> acc+faturamento, 0)
for (estado in faturamentos){
    console.log(`o percentual de contribuição de ${estado} é ${(faturamentos[estado]/total*100).toFixed(2)}`)
}