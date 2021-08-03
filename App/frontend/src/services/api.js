async function listarVeiculos() {
    const listaCarros = await fetch("/veiculos");
    const returnCarros = await listaCarros.json();
    return returnCarros
}

export default listarVeiculos()