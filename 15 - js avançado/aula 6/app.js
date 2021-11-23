const customers = [
    {name: 'Thiago', score: 34},
    {name: 'Jaqueline', score:38},
    {name: 'Sarah', score: 80},
    {name: 'Clara', score: 50},
    {name: 'Sophia', score: 98}
]

const reduceScore = customers.reduce((acc, item) =>{
    return acc += item.score
},0)

console.log(reduceScore)

const newObj = customers.reduce((acc, item) =>{
    if(item.score > 50){
        acc.pass.push(item)
        
} else{
      acc.fail.push(item)
      
    }
    return acc
},{
    pass:[],
    fail:[]
})

console.log(newObj)


const numbers = [1,2,3,4]

const stringNumbers = numbers.reduce((acc, item) =>{
    if(acc.length < 1){acc += `${++item}`}
    acc += ` - ${++item}`
    return acc
}, '')

console.log(stringNumbers)