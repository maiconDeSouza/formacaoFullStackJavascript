const nome = prompt('Digite seu nome')
const idade = Number(prompt('Digite sua idade'))


if(isNaN(idade)){document.write(`Olá ${nome} você não informou sua idade corretamente`)}
if(idade >= 18){document.write(`Olá ${nome} você já é de maior`)}
if(idade < 18){document.write(`Olá ${nome} você ainda é de menor`)}
