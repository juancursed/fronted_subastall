import { consultarOfertas } from "../../../services/fetchSubastas";
import { useEffect, useState } from 'react';

interface ListaPujasProps {
    id: number;
  }

const ListaPujas: React.FC<ListaPujasProps> = ({ id }) => {

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await consultarOfertas(id);
            setData(result);
            console.log(result);
        };
        fetchData();
    }, [id]);

    return (
        <div className="flex-1 bg-white border rounded-md p-4 flex flex-col">
              <h2 className="text-xl font-bold mb-2">Pujas Recientes</h2>
              <div className="flex-1 space-y-2 overflow-auto">
              </div>
              <div className="p-4 bg-gray-200 flex justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
                  Hacer una Puja
                </button>
              </div>
        </div>
    );
}

export default ListaPujas;