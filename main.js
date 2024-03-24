import { getPosts } from './js/fetch.js';
import { createPost, setPosts } from './js/card.js'
document.addEventListener('DOMContentLoaded', () => {
   getPosts().then((data) => {
      // Verificar si los datos son válidos antes de iterar sobre ellos
      if (Array.isArray(data)) {
         // Iterar sobre los datos obtenidos
         setPosts(data);
      } else {
         console.error("Los datos de la API no son válidos:", data);
      }
   })
  .catch((error) => {
      // Manejar cualquier error al obtener los datos de la API
      console.error("Error al obtener los datos de la API:", error);
   }); 

   // Evento para el form filtrar
   document.getElementById("searchForm").addEventListener("submit", (event) => {
      event.preventDefault()
      // Se obtiene el valor del input "fecha"
      const fecha = event.target.elements.fecha.value;
      // Obtener la fecha en formato Y-m-d
      getPosts(fecha)
        .then((data) => {
          // Verificar si los datos son válidos antes de iterar sobre ellos
          if (Array.isArray(data)) {
            // Iterar sobre los datos obtenidos
            setPosts(data);
          } else {
            console.error("Los datos de la API no son válidos:", data);
          }
        })
        .catch((error) => {
          // Manejar cualquier error al obtener los datos de la API
          console.error("Error al obtener los datos de la API:", error);
        }); 
   });
})
