/*
Sincrono vs Assincrono
*/

function primeira(){
    console.log('primeira')
}

function segunda(){
    console.log('segunda')
}

setTimeout(primeira, 2000)
segunda()