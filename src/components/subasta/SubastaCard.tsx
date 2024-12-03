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

export const subastaCard: React.FC<subastaCardProps> = ({
  nombre,
  descripcion,
  fotos,
  precioActual,
  label,
  fechaCierre,
  onBid,
}) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-sm bg-white">
      {/* fotosn del producto */}
      <div className="relative">
        <img src={fotos[0]} alt={nombre} className="w-full rounded-t-lg" />
        <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
          {fechaCierre}
        </div>
      </div>

      {/* Información del producto */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{nombre}</h2>
        <p className="text-gray-600 text-sm my-2">{descripcion}</p>
        <div className="text-xl font-bold text-gray-800">
          {precioActual} <span className="text-green-500 text-sm">{label}</span>
        </div>
      </div>

      {/* Botón de acción */}
      <button
        onClick={onBid}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Puja ahora
      </button>
    </div>
  );
};

export default subastaCard;
