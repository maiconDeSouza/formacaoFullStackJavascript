

export function Loading({ load }){
    return (
        load === true ? 'Carregando...' : ''
    )
}