//setTimeout roda a funçao depois de y milisegundos
//clearTimeout cancela um timeOut
//setInterval ira rodar uma funçao n vezes

const timeOut = 4000
const finished = () => console.log('Done!')

let timer = setTimeout(finished, timeOut)
console.log('Mostra esse primeiro, testando assincronismo e callback')
clearTimeout(timer)

// usa o mesmo timeOut de cima,pq é uma const 
const checking = () => console.log('checking!!!')
let interval = setInterval(checking,timeOut)
console.log('testando setInterval e clearInterval')
clearInterval(interval)

finished() //function estou chamando ela 
setTimeout (() => clearInterval(interval) , 2000 )