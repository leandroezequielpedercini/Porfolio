/* Titulo */
let header = document.getElementById("header")
header.innerHTML = `
<div class="div-header">   
     <p class="parrafo-nombre" >HOLA, MI NOMBRE ES <h1 class="nombreCompleto">Leandro Ezequiel Pedercini</h1> </p>
     
     </div>`

    const imagen = document.getElementById("img")
    imagen.innerHTML = `<img src="header/img/imagen.jpeg" alt="Leandro Ezequiel Pedercini" class="img"  >
`
    const parrafo1 = document.getElementById("parrafoUno")
    parrafo1.innerHTML = `<p class="presentacion"> Presentacíon:  </p>`
    
    const parrafo2 = document.getElementById("parrafoDos")
    parrafo2.innerHTML = `<p class="parrafoDos"> Soy estudiante de Front-End, con conocimientos de html, css y JavaScript y boostrap, en el caso de frameworks.
    Me considero una persona paciente y proactiva con ganas seguir aprendiendo y perfeccioname profesionalmente.  </p>`

    const parrafo3 = document.getElementById("parrafoTres")
    parrafo3.innerHTML = `<p class="parrafoTres"> MIS TRABAJOS:  </p>`


    const tituloCartas = document.getElementById("titulo-cartas")
    tituloCartas.innerHTML = ` <h1 class="titulo-trabajos">Trabajos</h1>`

    /* Tarjetas */
let tarjetas = document.getElementById("tarjetas")
tarjetas.innerHTML = `<div class="tarjetas">

    <div class="div-tarjetas-uno" >
      <h1 class="nombre-proyecto-1" > Pagina web 1 </h1>
      <img id="web-uno" src="" alt="Pagina web 1" class="tarjeta1">
      <button id="btn-proyecto-1" class="btn-proyecto1" type="submit" onclick="btn1()" >Entrar al proyecto</button nombre>
      </div>  
     
    <div class="div-tarjetas-dos" >
    <h1 class="nombre-proyecto-1" > Pagina web 2</h1>
     <img id="web-dos" src="" alt="Pagina web 2" class="tarjeta2">
     <button class="btn-proyecto2" type="submit">Entrar al proyecto</button>
     </div>

    <div class="div-tarjetas-tres" >
    <h1 class="nombre-proyecto-3" > Pagina web 3</h1>
     <img id="web-tres" src="" alt="Proyecto tres" class="tarjeta3">
     <button class="btn-proyecto3" type="submit">Entrar al proyecto</button> 
     </div>

     </div>
` 


const tituloFormulario = document.getElementById("titulo-formulario")
tituloFormulario.innerHTML = `<h1 class="titulo-formulario">Formulario</h1>`


   /* Formulario */
const formulario = document.getElementById("formulario")
formulario.innerHTML = `
<form action="" class="formulario">

<label>Nombre de la empresa</label> <input class="input-uno" type="text" maxlength="20"required placeholder="Ingresar el nombre de la empresa">


<label>Nombre</label> <input class="input-nombre" type="text" maxlength="20"required placeholder=" El nombre de la persona que llene por formulario" > 


<label>Apellido</label> <input class="input-apellido" type="text"maxlength="20"required placeholder="Ingresar apellido" >


<label>E-mail</label> <input class="input-Emails" type="email"maxlength="35"required placeholder="E-mail de la persona"> 


<label class="input-pais">Pais</label>


<select required class="input-paises">
    <option value="">Argentina</option>
    <option value="">Brasil</option>
    <option value="">Chile</option>
    <option value="">Uruguar</option>
    <option value="">Perú</option>
    <option value="">México</option>
<select>

<textarea class="input-texto" placeholder="" minlength="10" maxlength="2000" class="textArea" ></textarea  >

</form>`


    
    /* Footer */

const footer = document.getElementById("footer")
footer.innerHTML = `<div class="lostresparrafos">
 <p class="parrago-fotter-uno">Desarrollador web<p/> 
 
 <p class="parrago-fotter-dos">Front.End👨‍💻<p/>


  <p class="parrago-fotter-tres">Leandro Ezequiel Pedercini<p/>
`