 /*
    https://devto-api.kodinc.dev/api/articulos?fecha=2024-03-22
    1 Definir el parametro de busqueda
    2 Con el parametro definido mandar a llamar el API que me de las que coincidan
    3 Remover todos los articulos en el index
    4 Mostrar todos los articulos en el container que me lanzo el API
*/
 export function filtrar(fecha){
    const URL = 'https://devto-api.kodinc.dev/api/articulos?fecha=' + fecha
    fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Aquí puedes trabajar con los datos recibidos de la API
    console.log(data);
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  }); 
}