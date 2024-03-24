    async function fetchData() {
    try {
      const response = await fetch('https://devto-api.kodinc.dev/api/articulos');
  
      if (!response.ok) {
        throw new Error('Ocurrió un error al realizar la solicitud: ' + response.status);
      }
  
      const data = await response.json();
      console.log(data);
      return data
    } catch (error) {
      console.error('Hubo un problema con la solicitud fetch:', error);
    }
  }
  
  // Llamar a la función para obtener los datos
export {fetchData}

