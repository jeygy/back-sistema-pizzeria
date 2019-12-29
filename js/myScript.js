var formulario = document.getElementById("formulario");

formulario.addEventListener('submit',async (e) => {
    e.preventDefault();
    var datos = new FormData(formulario);
    const pedido = {
        clienteId:datos.get('cliente'),
        domicilioId:datos.get('domicilio'),
        estadoId:document.getElementById('estado').value,
        formaPagoId:datos.get('formapago'),
        tipoOrden:datos.get('tipoOrden'),
        mesaId:datos.get('idmesa'),
        total:datos.get('total'),
        observacion:datos.get('observacion'),
        fechaHora:datos.get('fechahora'),
        usuarioId:datos.get('idusuario')
    }
    await postPedidos(pedido); 
    console.log(pedido)
    console.log('ESTADO:'+pedido.estadoId)
})

/*-------------------------
        Post
-------------------------*/
const postPedidos = async (pedido) => {
    const url = "http://localhost:3000/api/ordenes";
    const response = await fetch(url, {
        method: "post",
        headers: {
            'Acept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(pedido)
    })

    const json = await response.json(); 
    console.log(json);
    console.log('enviado')
}