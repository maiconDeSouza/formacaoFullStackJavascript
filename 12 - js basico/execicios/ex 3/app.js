const inputName = document.querySelector('input')
const div = document.querySelector('#conteudo')

inputName.addEventListener('focusout', e =>{
    const nomeDigitado = inputName.value.toLocaleLowerCase()
    const texto = search(nomeDigitado)
    div.innerText = texto
})


function search(nome){
    let retorno = ''
    switch(nome){

        case 'george washington':
            retorno = `George Washington (Condado de Westmoreland, 22 de fevereiro de 1732[b] – 
                Mount Vernon, 14 de dezembro de 1799) foi um líder político, militar e estadista 
                norte-americano. Um dos Pais Fundadores dos Estados Unidos, foi o primeiro 
                presidente daquele país de 1789 a 1797. Anteriormente, liderou as forças patriotas 
                à vitória na Guerra de Independência. Presidiu a Convenção Constitucional de 1787, 
                que elaborou a Constituição e estabeleceu o governo federal. Washington foi 
                denominado o "Pai da Pátria" por conta de sua liderança na formação dos 
                Estados Unidos.`
        break

        case 'thomas jefferson':
            retorno = `Thomas Jefferson (Shadwell, 13 de abril de 1743 – Charlottesville, 4 de julho 
                de 1826)[1] foi o terceiro presidente dos Estados Unidos (1801-1809) e o principal 
                autor da declaração de independência (1776) dos Estados Unidos. Jefferson foi um dos 
                mais influentes Founding Fathers (os "Pais Fundadores" da nação), conhecido pela sua 
                promoção dos ideais do republicanismo nos Estados Unidos. Visualizava o país como a 
                força por trás de um grande "Império de Liberdade"[2] que promoveria o republicanismo 
                e poderia combater o imperialismo britânico. Entre os eventos de destaque da história 
                americana que ocorreram durante sua presidência estão a Compra da Louisiana (1803) e a 
                Expedição de Lewis e Clark (1804-1806), bem como a escalada das tensões entre a 
                Grã-Bretanha e a França que levaram à guerra com o Império Britânico em 1812, ano em 
                que deixou o cargo.`
        break

        case 'john adams':
            retorno = `John Adams (Braintree, 30 de outubro de 1735 – Quincy, 4 de julho de 1826)
            [nota 1] foi o segundo presidente dos Estados Unidos (1797–1801) e, anteriormente, 
            primeiro vice-presidente dos Estados Unidos. Pai da Nação estadunidense,[1] Adams foi 
            estadista, diplomata e um advogado importante no período da independência americana da 
            Grã-Bretanha. De boa educação, Adams era um teórico político do Iluminismo que divulgou 
            o republicanismo, tal como o conceito de um governo central, e escreveu várias obras 
            sobre as suas ideias, tanto em trabalhos publicados como em cartas para a sua esposa e 
            conselheira Abigail Adams, e, também, a outros Pais da Nação.`
        break

        default:
            retorno = `Cidadão não encontrado`
        break

    }
    return retorno
}


