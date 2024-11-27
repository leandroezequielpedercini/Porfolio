    /* Titulo */
let header = document.getElementById("header")
header.innerHTML = `
<div class="div-header"> 

    <img src="header/img/imagen.jpeg" alt="Imagen" class="img">
    
    <h1 class="presentacion">Presentación: </h1>
    <p class="parrafo">Hola mi nombre es Leandro y hace ya cuatro años que estoy estudiando programación, se html, css, javascript, me especializo en la parte del Fronted, actualmente sigo perfeccionadome. Me gustaria poder tener experiencia laboral, ya que los unicos proyectos que realice fueron por mi cuenta.

</p>

</div>`

    /* Parrafo 1 de las tarjetas */
    const parrafoUno = document.getElementById("parrafoUno")
    parrafoUno.innerText =  ` Proyecto 1 `


    /* Parrafo 2 de las tarjetas */
    const parrafoDos = document.getElementById("parrafoDos")
    parrafoDos.innerText = `Proyecto 2`
    
    
    /* parrafoTres */
    const parrafoTres = document.getElementById("parrafoTres")
    parrafoTres.innerText = `Proyecto 3`


    
    /* Tarjetas */
let tarjetas = document.getElementById("tarjetas")
tarjetas.innerHTML = `<div class="tarjetas">

    <img src="tarjetas/proyecto1.jpg" alt="Proyecto uno" class="tarjeta1">
        
    <img src="tarjetas/proyecto2.jpg" alt="Proyecto uno" class="tarjeta2">

    <img src="tarjetas/proyecto3.jpg" alt="Proyecto uno" class="tarjeta3">
    
    </div>`


    /* Formulario */
const formulario = document.getElementById("formulario")
formulario.innerHTML = `
<form action="" class="formulario">

<label>Nombre de la empresa</label> <input type="text" maxlength="20"required placeholder="Ingresar el nombre de la empresa">


<label>Nombre</label> <input type="text" maxlength="20"required placeholder=" El nombre de la persona que llene por formulario" > 


<label>Apellido</label> <input type="text"maxlength="20"required placeholder="Ingresar apellido" >


<label>E-mail</label> <input type="email"maxlength="35"required placeholder="E-mail de la persona"> 


<label>Pais</label>


<select required>
    <option value="">Argentina</option>
    <option value="">Brasil</option>
    <option value="">Chile</option>
    <option value="">Uruguar</option>
    <option value="">Perú</option>
    <option value="">México</option>
<select>

</form>`



    /* Footer */

    const fotter = document.getElementById("footer")
    fotter.innerHTML = `
<div>
    <p>Desarrollador web<p/>

    <p>Leandro Ezequiel Pedercini<p/>
<div/>`
