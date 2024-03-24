function filtrar(fecha){
    let URL
    if (fecha){
        URL = 'https://devto-api.kodinc.dev/api/articulos?fecha=' + fecha
    }else{
        URL = 'https://devto-api.kodinc.dev/api/articulos'
    }
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
    console.log(fecha);
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  }); 
}
filtrar('2024-03-22');
filtrar();
filtrar('2024-03-21');
filtrar('2023-02-23');