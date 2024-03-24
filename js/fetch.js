async function getPosts(fecha = null) {
  let endpoint = "https://devto-api.kodinc.dev/api";

  try {
    if (fecha) endpoint += "/articulos?fecha=" + fecha
    else endpoint += "/articulos";

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(
        "Ocurrió un error al realizar la solicitud: " + response.status
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Hubo un problema con la solicitud fetch:", error);
  }
}

const storePost = async (data) => {
  let endpoint = "https://devto-api.kodinc.dev/api/articulos";
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  // Realizar la solicitud POST
  try {
    const response = await fetch(endpoint, requestOptions)
    if (!response.ok) {
      throw new Error(
        "Ocurrió un error al realizar la solicitud: " + response.status
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Hubo un problema con la solicitud fetch:", error);
  }
} 

//Realizar solicitud de actualizar post 
const updatePost = async (data) => {
  let endpoint = "https://devto-api.kodinc.dev/api/articulos/";
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  
  //Solicitud PUT
  try {
    const response = await fetch(endpoint,requestOptions)
    if (!response.ok) {
      throw new Error (
        "Ocurrio un error al realizar la solicitud" + response.status
        )
      }
    
      const updateData = await response.json()
      return updateData
  } catch (error) {
    console.error ("Hubo un problema con la solicitud fetch:", error)
  }
}

  
async function getUsers() {
  try {
    const response = await fetch('https://devto-api.kodinc.dev/api/users');
    if (!response.ok) {
      throw new Error('Error al obtener la información de usuarios. Código de estado: ' + response.status);
    }
    const usuarios = await response.json();
    return usuarios;
  } catch (error) {
    console.error('Ocurrió un error:', error);
    return null;
  }
}
  // Llamar a la función para obtener los datos
export { getPosts,getUsers,storePost,updatePost}

