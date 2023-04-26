

let datosArr = [];

function contacto() {

    let newContact = {

        nombre : document.getElementById("nombre").value,
        origen : document.getElementById("origen").value,
        destino: document.getElementById("destino").value,
        personas: document.getElementById("personas").value,
        fecha: document.getElementById("fecha").value,
    }

    datosArr.push(newContact);

    console.log(newContact);
}

function filter() {

    let tabla = document.getElementById("newContact");
    let aside = document.querySelector(".aside2");

    if (aside.classList.contains("aside")) {
        aside.classList.remove("aside");
    }

    tabla.innerHTML = 
    `<tr class="table__head">
                        <th>Nombre</th>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Númeror de Personas</th>
                        <th>Fecha</th>
                    </tr>`;

            for (let i = 0; i < datosArr.length; i++) {


                if (datosArr[i].destino.toLowerCase() == "canarias" || datosArr[i].destino.toLowerCase() == "mallorca" || datosArr[i].destino.toLowerCase() == "galicia") {

                    tabla.innerHTML += 

                    `<tr>
                        <th>${datosArr[i].nombre}</th>
                        <th>${datosArr[i].origen}</th>
                        <th>${datosArr[i].destino}</th>
                        <th>${datosArr[i].personas}</th>
                        <th>${datosArr[i].fecha}</th>
                    </tr>`
                } 
            }

    
}
