const diaSemana = 1

function validaDia(dia){
   if(dia === 'Dia não encontrado'){
      return 'Infelizmente este dia da semana está inválido'
   }
   return `Olá hoje é ${dia}`
}

function diaDaSemana(){
   let dia;
switch (diaSemana){
   case 0:
      dia = 'Domingo'
   break

   case 1:
      dia = 'Segunda-Feira'
   break

   case 2:
      dia = 'Terça-Feira'
   break

   case 3:
      dia ='Quarta-Feira'
   break

   case 4:
      dia = 'Quinta-Feira'
   break

   case 5:
      dia = 'Sexta-Feira'
   break

   case 6:
      dia = 'Sábado'
   break

   default:
      dia = 'Dia não encontrado'
   break
}

const fraseRetorno = validaDia(dia)
console.log(fraseRetorno)
}

