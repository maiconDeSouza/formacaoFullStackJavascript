/*
Hoisting (Içar, Erguer)

Hoisting é o comportamento padrão do JS de mover as declarações para o topo de um escopo

*/

function teste(){
    outraFuncao()
    function outraFuncao(){
        console.log(`Olá outra função!`)
    }
}

teste()