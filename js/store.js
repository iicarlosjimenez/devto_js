import { storePost } from './fetch.js';

document.addEventListener('DOMContentLoaded', () => {
   document.getElementById('storeForm').addEventListener('submit', (event) => {
      event.preventDefault();

      // Obtener los valores del formulario
      const titulo = document.getElementById('titulo').value;
      const contenido = document.getElementById('contenido').value;
      const usuario = document.getElementById('usuario').value;

      // Crear el objeto con los datos del formulario
      const data = {
         user_id: usuario,
         title: titulo,
         content: contenido
      };

      storePost(data).then((data) => {
         if (data.id) {
            window.location.href = "/";
         } else {
            console.log(data)
         }
      })
      .catch((error) => {
         // Manejar cualquier error al obtener los datos de la API
         console.error("Error al obtener los datos de la API:", error);
      }); 
   });
});


