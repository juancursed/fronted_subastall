import { consultarOfertas } from "../../../services/fetchSubastas";
import { useEffect, useState } from "react";

interface ListaPujasProps {
  id: number;
}

const ListaPujas: React.FC<ListaPujasProps> = ({ id }) => {
  const [data, setData] = useState<any[]>([]); // Cambiado a array para manejar las pujas
  const [puja, setPuja] = useState<string>(""); // Estado para el input de la nueva puja

  useEffect(() => {
    const fetchData = async () => {
      const result = await consultarOfertas(id);
      setData(result);
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex-1 bg-white border rounded-md p-4 flex flex-col h-full">
      {/* Título */}
      <h2 className="text-xl font-bold mb-2">Pujas Recientes</h2>

      {/* Sección de lista de pujas */}
      <div className="flex-1 space-y-2 overflow-auto border-t border-b py-2">
        {data.length > 0 ? (
          data.map((puja, index) => (
            <div key={index} className="p-2 bg-gray-100 rounded-md shadow-sm">
              El usuario{" "}
              <span className="font-bold">
                {puja.usuario_oferta.firstname} {puja.usuario_oferta.lastname}
              </span>{" "}
              ha pujado{" "}
              <span className="text-blue-600 font-semibold">${puja.monto}</span>
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-center">No hay pujas recientes.</div>
        )}
      </div>

      {/* Input para nueva puja */}
      <div className="p-4 bg-gray-200 flex items-center gap-2">
        <input
          type="number"
          placeholder="Ingrese su puja"
          value={puja}
          onChange={(e) => setPuja(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-md"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Hacer una Puja
        </button>
      </div>
    </div>
  );
};

export default ListaPujas;