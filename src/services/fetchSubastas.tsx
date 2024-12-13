export const fetchSubastas = async () => {
    const API_URL = 'http://localhost:8080/api/subasta/recomendaciones'; 
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Error al obtener las subastas');
      return await response.json();
    } catch (error) {
      console.error('Error en fetchSubastas:', error);
      throw error;
    }
  };
  

export const fetchUserSubastas = async (token: string) => {
    const API_URL = 'http://localhost:8080/api/subasta/usuario';
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Error al obtener las subastas");
      }
  
      return await response.json(); 
    } catch (error) {
      console.error(error);
      return [];
    }
}