import axios, { AxiosError} from 'axios';


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

export const getSubastaById = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:8080/api/subasta/${id}`);
    if (!response.ok) throw new Error("Error al obtener datos de la subasta");
    return await response.json();
   } catch (error) {
    console.error(error);
  }
}

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

export const consultarMejorOferta = async (id: number, token :string) => {
  const API_URL = `http://localhost:8080/api/subasta/mejor/${id}`;

  try {
    const response = await fetch(API_URL, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener las subastas");
    }

    console.log(response.json());
    return await response.json(); 
  } catch (error) {
    console.error(error);
    return [];
  }

}


export const addSubasta = async (subasta: object, token : string) => {
    const API_URL = 'http://localhost:8080/api/subasta/agregar';

    try {

        // Realiza la solicitud POST con axios
        const response = await axios.post(API_URL, subasta, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        // Retorna los datos recibidos del servidor
        return response.data;
    } catch (error) {
        // Manejo de errores: muestra el mensaje y re-lanza
        console.error('Error al agregar subasta:', error);
        //throw error.response?.data || new Error('Error al realizar la solicitud');
    }
}

export const updateSubasta = async (id: number, subastaData: any, token :string) => {
  const url = `http://localhost:8080/api/subasta/${id}`;
  console.log(token);
  try {
      const response = await axios.put(url, subastaData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
  } catch (error) {
      console.error("Error al actualizar la subasta", error);
      throw error;
  }
};

