import { storePost, getUsers } from "./fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("storeForm");
  const select = document.getElementById("usuario");
  const primera = document.createElement("option");
  primera.textContent = "Selecciona un usuario";
  primera.setAttribute("disable", "");
  select.append(primera);

  getUsers().then((users) => {
    // Verificar si los datos son válidos antes de iterar sobre ellos
    if (Array.isArray(users)) {
      // Iterar sobre los datos obtenidos
      users.forEach(user => {
        const usuario = document.createElement("option");
        usuario.value = user.id;
        usuario.innerHTML = user.name;
        select.append(usuario);
      })
    } else {
      console.error("Los datos de la API no son válidos:", data);
    }
  });

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const titulo = document.getElementById("titulo").value;
    const contenido = document.getElementById("contenido").value;
    const usuario = document.getElementById("usuario").value;

    // Crear el objeto con los datos del formulario
    const data = {
      user_id: usuario,
      title: titulo,
      content: contenido,
    };

    // Crear las opciones para la solicitud POST
    storePost(data)
      .then((data) => {
        if (data.id) {
          window.location.href = "/";
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        // Manejar cualquier error al obtener los datos de la API
        console.error("Error al obtener los datos de la API:", error);
      });
  });

  // Consultar el parámetro 'id' de la url
  const id = new URLSearchParams(window.location.search).get('id')

  if (id) {
    // Con ese id, consultar el endpoint para obtener la información de un usuario
    fetch("https://devto-api.kodinc.dev/api/articulos?id=" + id)
      .then((response) => response.json())
      .then(data => {
        // Una vez que responde el endpoint, cambiar el value de:
        // titulo, contenido y usuario 
        document.getElementById('titulo').value = data.title
        document.getElementById('contenido').value = data.content
        document.getElementById('usuario').value = data.user_id
        //hacer una validacion donde el programa lea si es una publicacion nueva
        //o si es solo actualizar datos 

      })
      .catch(error => console.log('error al obtener informacion', error))
  } else {
    console.log("Id no encontrada")
  }
}); 
