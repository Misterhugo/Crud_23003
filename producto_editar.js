//console.log(location.search)

let argsUrl = location.search.substring(1).split('&');
console.log (argsUrl)
let data [];
for(let i = 0; i <argsUrl.length; i++){
   data[i] = argsUrl[i].split('=');    
}
console.log(data)
document.getElementById('id').value = decodeURIComponent([0][1]);
document.getElementById('nombre').value = decodeURIComponent([1][1]); // decode para que entre los espacios no te salga %20
document.getElementById('precio').value = decodeURIComponent([2][1]);
document.getElementById('stock').value = decodeURIComponent([3][1]);
document.getElementById('imagen').value = decodeURIComponent([4][1]);  // busca una imagen y pega aca y deberia guardar la imagen
function modificar(){
      // actualiza el producto en la bbdd
    let id = document.getElementById('id').value;
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
 
    let url='http://127.0.0.1:5000/productos'+id;
    let options={
      body: JSON.stringify(producto),
      method: 'PUT',
      headers: {'Content-Type' : 'application/json'}
     // redirect: 'follow', esta en el apunte de la otra profe, Denis lo saca
      }; 
    fetch(url, options)
    .then(function(){
      alert(' Registro modificado exitosamente');
      window.location.href= './productos.html';
    })
    .catch(err => {
      alert('No pudo modificarse el registro');
      console.error(err);
    })
}