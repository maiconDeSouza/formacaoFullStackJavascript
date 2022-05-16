import React from "react"
import Header from './Header'
import Content from "./Content"
import Boxes from "./Boxes"
/*
Componentes - Criando e Usando

- Import React
- Função que retorna JSX
 -Sempre tem que ter um elemento pai
 - React Fragment
- Exportar Função
- Para uasr o componente
 - Importar
 - Usar tag <App />

*/

function App(){
    return (
        <>
            <Header title ="Hello ReactJS!" />
            <Content title="Be welcome">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque saepe molestiae. Doloremque, nemo fuga architecto delectus ipsum, accusamus deserunt velit a laboriosam reprehenderit fugit suscipit enim dolorum, molestiae perspiciatis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque saepe molestiae. Doloremque, nemo fuga architecto delectus ipsum, accusamus deserunt velit a laboriosam reprehenderit fugit suscipit enim dolorum, molestiae perspiciatis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque saepe molestiae. Doloremque, nemo fuga architecto delectus ipsum, accusamus deserunt velit a laboriosam reprehenderit fugit suscipit enim dolorum, molestiae perspiciatis.
                </p>
            </Content>
            <Boxes />
        </>
    )
}

export default App