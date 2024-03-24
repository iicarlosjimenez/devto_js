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

      // Crear las opciones para la solicitud POST
      const requestOptions = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      };

      // Realizar la solicitud POST
      fetch("https://devto-api.kodinc.dev/api/articulos", requestOptions)
         .then(response => response.json())
         .then(result => console.log(result))
         .catch(error => console.log('error', error));
   });
});


