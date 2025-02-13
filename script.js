    /* Titulo */
let header = document.getElementById("header")
header.innerHTML = `
<div class="div-header"> 

    <img src="header/img/imagen.jpeg" alt="Imagen" class="img">
    
    <h1 class="presentacion">Presentación: </h1>
    <p class="parrafo">Hola mi nombre es Leandro y hace ya cuatro años que estoy estudiando programación, se html, css, javascript, me especializo en la parte del Fronted, actualmente sigo perfeccionadome. Me gustaria poder tener experiencia laboral, ya que los unicos proyectos que realice fueron por mi cuenta.

</p>

</div>`

    


    /* Tarjetas */
let tarjetas = document.getElementById("tarjetas")
tarjetas.innerHTML = `<div class="tarjetas">

    <div class="div-tarjetas-uno" >
      <h1 class="nombre-proyecto-1" > PROYECTO 1 </h1>
      <img id="primerProyecto" src="tarjetas/proyecto1.jpg" alt="Proyecto uno" class="tarjeta1">
      <button id="btn-proyecto-1" class="btn-proyecto1" type="submit">Entrar al proyecto</button>
      </div>  
     
    <div class="div-tarjetas-dos" >
    <h1 class="nombre-proyecto-1" > PROYECTO 2 </h1>
     <img id="proyecto-dos" src="tarjetas/proyecto2.jpg" alt="Proyecto dos" class="tarjeta2">
     <button class="btn-proyecto2" type="submit">Entrar al proyecto</button>
     </div>

    <div class="div-tarjetas-tres" >
    <h1 class="nombre-proyecto-3" > PROYECTO 3</h1>
     <img id="proyecto-tres" src="tarjetas/proyecto3.jpg" alt="Proyecto tres" class="tarjeta3">
     <button class="btn-proyecto3" type="submit">Entrar al proyecto</button> 
     </div>

     </div>
     ` 


    

   const boton1 = document.getElementById("btn-proyecto-1",addEventListener("click", () =>{
   console.log(2 + 2)
}
            ))


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

const footer = document.getElementById("footer")
footer.innerHTML = `<div class="lostresparrafos">
 <p class="parrago-fotter-uno">Desarrollador web<p/> 
 
 <p class="parrago-fotter-dos">Front.End👨‍💻<p/>


  <p class="parrago-fotter-tres">Leandro Ezequiel Pedercini<p/>
`