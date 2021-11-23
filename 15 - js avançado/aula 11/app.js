/*
AJAX

Asynchronous JavaScript And XML

Rotas ou Endpoint
*/


const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        console.log(this.responseText)
    }
}

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
xhttp.send()