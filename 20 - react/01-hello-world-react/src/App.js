import React from 'react'
import Header from './Header'
import Content from './Content'
import Card from './Card'
import './flex.css'

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

//Importando Imagens
import img1 from './img/img1.png'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'


function App(){
    return (<>
            <Header titulo="Título" subtitulo="Subtitulo"/>
            <Content title="Nosso Título">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="flex">

                    <Card 
                    img={img1}
                    title="Vue"
                    text="Vue JS é muito utilizado para criar aplicações single page (página única) e também para desenvolver vários tipos de interfaces, que possuem necessidades de maior interação e experiência mais valorosa para o usuário."
                    />

                    <Card 
                    img={img2}
                    title="Node"
                    text="O Node. js pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node. js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados."
                    />
                    <Card 
                    img={img3}
                    title="Vue"
                    text="O Adonis é um framework mais robusto com uma série de funcionalidades prontas, extremamente baseado em frameworks famosos de outras linguagens como o Laravel, Rails ou Django."
                    /> 
                </div>
            </Content>
            
        </>)
    
}

export default App