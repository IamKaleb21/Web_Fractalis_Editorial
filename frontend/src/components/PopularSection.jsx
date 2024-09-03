import bookImage from '../assets/book_image.png'; // Reemplaza con la ruta de tu imagen
import BookItem from './BookItem';

function PopularSection() {
  return (
    <section>
      <div className="mx-3 mt-10 border border-blue-600">
        {/* Contenedor del Subtítulo */}
        <div className="border-b border-blue-600 flex flex-wrap">
            <div className="border-r border-blue-600 p-4 w-full md:w-1/3">
            <p className="text-blue-800 font-semibold uppercase tracking-widest text-xs md:text-sm">
                Comienza tu viaje hacia el conocimiento infinito
            </p>
            </div>
            <div className="w-full md:w-2/3"></div> {/* Espacio vacío */}
        </div>

        {/* Contenedor del Título Principal */}
        <div className="flex flex-wrap">
            <div className="border-r border-blue-600 p-4 w-full md:w-1/2">
            <h2 className="text-blue-900 font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Empieza a Aprender Hoy
            </h2>
            </div>
            <div className="w-full md:w-1/2"></div> {/* Espacio vacío */}
        </div>
      </div>  


      <div className="relative mx-3 border border-blue-600">
      {/* Contenedor de Imágenes de Libros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 relative z-0">
        <div className="absolute inset-0 h-3/5 bg-gradient-to-t from-blue-500 via-transparent to-transparent -z-10"></div>
        {[1, 2, 3, 4].map((item) => (
          <BookItem
            key={item}
            imageSrc={bookImage}
            title="Algebra I"
            subtitle="Nociones Básicas de Álgebra" 
          />
        ))}
      </div>

      {/* Texto de Llamada a la Acción */}
      <div className="p-8 border-t border-blue-600 z-10">
        <div className="text-right">
          <p className="text-blue-900 font-semibold text-lg md:text-xl lg:text-2xl leading-relaxed">
            ACCEDE A UNA AMPLIA COLECCIÓN DE LIBROS Y <br />
            CURSOS DISEÑADOS PARA EXPANDIR TU CONOCIMIENTO, REGÍSTRATE AHORA <br />
            Y COMIENZA A EXPLORAR LOS RECURSOS QUE FRACTALIS TIENE PARA OFRECER.
          </p>
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default PopularSection;
