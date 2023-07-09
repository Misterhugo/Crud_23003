function guardar(){
    let n = document.getElementById('nombre').value;
    let p = document.getElementById('precio').value;
    let s = document.getElementById('stock').value;
    let i = document.getElementById('imagen').value;
     
    let producto ={
     nombre: n, /// atributo///
     precio: p,
     stock: s,
     imagen: i, /// no tiene coma en el video 17:08///
    }
 
     /// falta productos.js///
    let url='http://127.0.0.1:5000/productos'; 
    let options={
    body: JSON.stringify(producto),
    method: 'POST',
    headers: {'Content-Type' : 'application/json'}
    }; 
    fetch(url, options)
    .then(function(){
      alert('Producto guardado exitosamente');
      window.location.href= './productos.html'; /// el punto barra (./) es para salir///

    })
    .catch((error)=>{
        alert('No pudo guardar el nuevo producto');
        console.error(error); 
    })
}       