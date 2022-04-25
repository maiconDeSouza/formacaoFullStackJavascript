const customers = [
    {name: 'Fulano', lastname: 'da Silva'},
    {name: 'Ciclano', lastname: 'Santos'},
    {name: 'Beltrano', lastname: 'Moreira'}
]

const newCustomers = customers.map(item => `${item.name} ${item.lastname}`)

console.log(newCustomers)