import React, { useEffect, useState } from 'react';
import { consultarMejorOferta } from '../../services/fetchSubastas';

interface ContadorInfoProps {
  id: number;
  token: string;
}

const ContadorInfo: React.FC<ContadorInfoProps> = ({ id, token }) => {
  
  
    const [subastaData, setSubastaData] = useState<{
    monto: number;
    usuario_oferta: { firstname: string; lastname: string };
    tiempoRestante: string;
  } | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await consultarMejorOferta(id, token);
        const fechaCierre = new Date(data.subasta.fechaCierre);
        const ahora = new Date();

        // Calcular tiempo restante
        const diffMs = fechaCierre.getTime() - ahora.getTime();
        const tiempo = new Date(diffMs).toISOString().substr(11, 8); // hh:mm:ss

        setSubastaData({
          monto: data.subasta.precioActual,
          usuario_oferta: data.usuario_oferta,
          tiempoRestante: diffMs > 0 ? tiempo : "Finalizada",
        });
      } catch (error) {
        console.error("Error al obtener la información de la subasta:", error);
      }
    };

    fetchData();
  }, [id, token]);

  if (!subastaData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex flex-row items-center justify-between bg-gray-200 p-4 rounded-md shadow-lg">
      <img
        src="/default-profile.png" // Cambiar por URL dinámica si aplica
        alt="Perfil"
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <div className="text-lg font-bold text-gray-800">
          {subastaData.monto} USD
        </div>
        <div className="text-sm text-gray-600">
          {subastaData.usuario_oferta.firstname} {subastaData.usuario_oferta.lastname}
        </div>
      </div>
      <div className="text-lg font-mono text-green-600">
        {subastaData.tiempoRestante}
      </div>
    </div>
  );
};

export default ContadorInfo;
