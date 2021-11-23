const customers = [
    {name: 'Fulano', lastname: 'da Silva', age: 14},
    {name: 'Ciclano', lastname: 'Santos', age: 18},
    {name: 'Beltrano', lastname: 'Moreira',age: 20}
]

const newCustomers = customers.filter(item => item.age >= 18).map(item => item.name)

console.log(newCustomers)