import React, { useState, useEffect } from "react";
import { Navbar } from "../../Navbar/Navbar";
import ProductInfo from "../../ProductInfo/ProductInfo";
import { useParams, useNavigate } from "react-router-dom";
import { getSubastaById, updateSubasta } from "../../../services/fetchSubastas";
import { format } from "date-fns";
import ContadorInfo from "../../ContadorInfo/ContadorInfo";

const SubastaPage: React.FC = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const navigate = useNavigate(); // Para redirigir después de editar

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precioInicial, setPrecioInicial] = useState(0);
  const [fechaCierre, setFechaCierre] = useState("");
  const [horaCierre, setHoraCierre] = useState("");
  const [fotos, setFotos] = useState("");
  const [token, setToken] = useState("");
  
  const API_BASE_URL = "http://127.0.0.1:8080/api/subasta/foto/";

  useEffect(() => {
    const fetchSubasta = async () => {
      try {
        const data = await getSubastaById(Number(id));
        const token = localStorage.getItem("authToken");
        token?.toString();

        if (!token || token == "") {
          alert("No estás autenticado.");
          navigate("/login");
          return;
        }
        
        console.log(data);

        setToken(token);
        setNombre(data.nombre || "");
        setDescripcion(data.descripcion || "");
        setPrecioInicial(data.precioInicial || "");

        // Formatear la fecha a 'yyyy-MM-dd'
        const formattedDate = data.fechaCierre
          ? format(new Date(data.fechaCierre), "yyyy-MM-dd")
          : "";
        setFechaCierre(formattedDate);

        // Extraer solo la hora de la fecha ISO
        const formattedTime = data.fechaCierre
          ? format(new Date(data.fechaCierre), "HH:mm")
          : "";
        setHoraCierre(formattedTime);

        setFotos(data.fotos || null);
      } catch (error) {
        console.error("Error al cargar la subasta", error);
      }
    };

    fetchSubasta();
  }, [id]);

//----------IGNORAR----------------
  const [subastaData, setSubastaData] = useState({
    producto: {
      nombre: "Producto Ejemplo",
      descripcion: "Descripción breve del producto",
      imagen: "", // URL de la imagen
    },
    pujas: [
      { usuario: "Usuario1", cantidad: "$1000" },
      { usuario: "Usuario2", cantidad: "$1200" },
      { usuario: "Usuario3", cantidad: "$1500" },
    ],
    pujaMasAlta: { usuario: "Usuario3", cantidad: "$1500" },
    tiempoRestante: "00:30",
    mensajesChat: [
      { usuario: "Usuario1", mensaje: "¡Hola!" },
      { usuario: "Usuario2", mensaje: "$1000" },
    ],
  });

  const [nuevoMensaje, setNuevoMensaje] = useState("");

  // Función para enviar mensajes
  const enviarMensaje = () => {
    if (nuevoMensaje.trim()) {
      setSubastaData((prevData) => ({
        ...prevData,
        mensajesChat: [
          ...prevData.mensajesChat,
          { usuario: "Tú", mensaje: nuevoMensaje },
        ],
      }));
      setNuevoMensaje("");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="fixed top-0 left-0 w-full bg-red-800 text-white shadow-md z-50">
        <Navbar />
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col flex-grow mt-16">

        <div className="flex justify-between p-4 space-x-4">

          {/* Contenedor izquierdo: ProductInfo y Chat */}
          <div className="flex flex-col w-1/2 space-y-4"> 
            <div className="bg-white rounded-lg shadow-md flex-shrink-0">
              <ProductInfo
                nombre={nombre}
                descripcion={descripcion}
                imagen={`${API_BASE_URL}${fotos[0]}`}
              />
            </div>
            
            {/* Chat Público */}
            <div className="flex-1 -py-20 bg-white border rounded-md p-4 flex flex-col overflow-hidden">
              <h2 className="text-xl font-bold mb-2">Chat Público</h2>
              <div className="flex-1 overflow-auto space-y-2">
                {subastaData.mensajesChat.map((msg, index) => (
                  <p key={index} className="text-gray-700">
                    <span className="font-bold">{msg.usuario}: </span>
                    {msg.mensaje}
                  </p>
                ))}
              </div>
              <div className="mt-2 flex">
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  value={nuevoMensaje}
                  onChange={(e) => setNuevoMensaje(e.target.value)}
                  className="w-full p-2 border rounded-l-md"
                />
                <button
                  onClick={enviarMensaje}
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>

          {/* Contenedor derecho: Contador y Lista de Pujas */}
          <div className="flex flex-col w-1/2 space-y-4">
            {/* Contador de la Subasta */}
            <div className="h-40 bg-gray-200 rounded-lg shadow-md flex flex-col justify-center items-center">
              <ContadorInfo id={Number(id)} token={token} />
            </div>


            {/* Lista de Pujas */}
            <div className="flex-1 bg-white border rounded-md p-4 flex flex-col">
              <h2 className="text-xl font-bold mb-2">Pujas Recientes</h2>
              <div className="flex-1 space-y-2 overflow-auto">
                {subastaData.pujas.map((puja, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{puja.usuario}</span>
                    <span>{puja.cantidad}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-gray-200 flex justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
                  Hacer una Puja
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubastaPage;