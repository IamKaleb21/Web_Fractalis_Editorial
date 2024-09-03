import fractalisLogo from '/fractalis_logo.png'

function Footer() {
  return (
    <footer className="bg-white py-8 mx-3">
      <div className="px-4">
        {/* Título */}
        <div className="bg-blue-900 w-auto h-0.5 my-10"></div>
        <div className="text-left mb-8">
          <h2 className="text-4xl font-bold text-blue-900 uppercase tracking-wide">
            Como <br /> Contactarnos
          </h2>
        </div>
        <div className="bg-blue-900 w-auto h-0.5 my-10"></div>

        {/* Enlaces de Navegación */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <ul>
              <li className="text-blue-900 font-semibold hover:underline cursor-pointer">
                Sobre nuestros libros
              </li>
              <li className="text-blue-900 font-semibold hover:underline cursor-pointer mt-2">
                Sobre nuestros cursos
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-blue-900 font-semibold hover:underline cursor-pointer">
                Contáctanos
              </li>
              <li className="text-blue-900 font-semibold hover:underline cursor-pointer mt-2">
                Tienda Virtual
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-blue-900 font-semibold hover:underline cursor-pointer">
                Políticas de privacidad
              </li>
              <li className="text-blue-900 font-semibold hover:underline cursor-pointer mt-2">
                Configuración de cookies
              </li>
            </ul>
          </div>
        {/* Logo de Fractalis */}
        <div className="justify-end">
          <img src={fractalisLogo} alt="Fractalis Logo" className="h-20" />
        </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
