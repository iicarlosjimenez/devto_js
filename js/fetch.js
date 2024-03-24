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
  
  // Llamar a la función para obtener los datos
export { getPosts }

