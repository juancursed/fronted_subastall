import React from 'react';

interface subastaCardProps {
  id: number;
  nombre: string;
  descripcion: string;
  precioInicial: number;
  precioActual: number;
  fotos: string[];
  fechaCreacion: string;
  fechaCierre: string;
  estado: string;
  usuario_subasta: {

    firstname: string;

    lastname: string;

    country: string;

  };
  label: string;
  onBid: () => void;
}

export const SubastaCard: React.FC<subastaCardProps> = ({
  nombre,
  descripcion,
  fotos,
  precioActual,
  label,
  fechaCierre,
  onBid,  
}) => {
    const API_BASE_URL = "http://127.0.0.1:8080/api/subasta/foto/";

    // Cálculo de tiempo restante
    const getTimeRemaining = () => {
      const now = new Date();
      const cierre = new Date(fechaCierre);
      const diff = cierre.getTime() - now.getTime();
  
      if (diff <= 0) return "Subasta finalizada";
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
      if (days > 0) return `${days} días restantes`;
      if (hours > 0) return `${hours} horas restantes`;
      return `${minutes} minutos restantes`;
    };
  
    const timeRemaining = getTimeRemaining();


  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-sm bg-white">

      <div className="relative">
      <img
          src={`${API_BASE_URL}${fotos[0]}`} // Concatenamos la URL base con el nombre del archivo
          alt={nombre}
          className="w-full rounded-t-lg"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
          {timeRemaining}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold">{nombre}</h2>
        <p className="text-gray-600 text-sm my-2">{descripcion}</p>
        <div className="text-xl font-bold text-gray-800">
          {precioActual} <span className="text-green-500 text-sm">{label}</span>
        </div>
      </div>


      <button
        onClick={onBid}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Puja ahora
      </button>
    </div>
  );
};

export default SubastaCard;
