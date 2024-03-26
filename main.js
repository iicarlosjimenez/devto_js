import { getPosts } from './js/fetch.js';
import { setPosts } from './js/card.js'
document.addEventListener('DOMContentLoaded', () => {
   const inputFecha = document.getElementById("fecha")
   const now = new Date();
   const maxDate = now.toISOString().split('T')[0];
   inputFecha.setAttribute("max", maxDate);
   inputFecha.addEventListener("input", (event) => {
      event.preventDefault()
      // Se obtiene el valor del input "fecha"
      const fecha = event.target.value;
      // Obtener la fecha en formato Y-m-d
      posts(fecha)
   });
   posts()
})

const posts = (fecha = null) => {
   getPosts(fecha).then( response => {
      // Verificar si los datos son válidos antes de iterar sobre ellos
      if (Array.isArray(response)) {
         // Iterar sobre los datos obtenidos
         setPosts(response);
      } else {
         console.error("Los datos de la API no son válidos:", response);
      }
   })
   .catch((error) => {
      // Manejar cualquier error al obtener los datos de la API
      console.error("Error al obtener los datos de la API:", error);
   });
}
