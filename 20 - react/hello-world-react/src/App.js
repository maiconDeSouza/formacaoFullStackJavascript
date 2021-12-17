import React from 'react'
import Header from './Header'

/*
COMPONENTES - Criando e Usando React

-Import React
-Função que retorna JSX
    -Sempre tem que ter um elemento pai
    -React Fragment
-Exportar Função
-Para usar o Componente
    -Importar
    -Usar como tag, exemplo <App />

*/

function App(){
    return (<>
            <Header titulo="Título" subtitulo="Subtitulo"/>

        </>)
    
}

export default App