import { Navbar } from "../Navbar/Navbar";
import CarruselSubastas from '../CarruselSubastas/CarruselSubasta';


export function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-red-800 text-white shadow-md">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="bg-[#5E1616] text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">¡Bienvenido a SubastALL!</h1>
          <p className="text-lg mb-6">
            Participa en subastas únicas y encuentra los mejores productos al mejor precio.
          </p>
          <button className="bg-[#D3B088] text-[#5E1616] px-6 py-3 rounded-lg font-medium hover:bg-[#c6a076]">
            Comienza a Subastar
          </button>
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Explora Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Electrónica", "Hogar", "Ropa", "Deportes"].map((category) => (
            <div
              key={category}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg"
            >
              <h3 className="text-lg font-medium">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Productos en Subasta - Carrusel */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Productos en Subasta Activa
          </h2>
          <CarruselSubastas />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5E1616] text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2024 SubastALL - Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
