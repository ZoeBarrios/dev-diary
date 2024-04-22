import Me from "/img/me.jpeg";

export default function CardPersonalInfo() {
  return (
    <div className="p-3 bg-white gap-5 rounded-lg w-4/6 self-center shadow-lg flex flex-col items-center">
      <div className="flex flex-row items-center gap-3">
        <img src={Me} alt="me" className="w-24 h-24 rounded-full" />
        <h1 className="font-bold text-3xl text-text-secondary bg-clip-text text-transparent bg-gradient-to-r from-text to-text-secondary">
          ¡Hola! Soy Zoe{" "}
        </h1>
      </div>
      <div className="flex flex-col items-center text-center ">
        <p className="text-md leading-8 px-3">
          Soy una apasionada de la tecnología y actualmente me desempeño como
          desarrolladora web, mientras estudio ingeniería. Mi trayectoria en el
          mundo de la tecnología comenzó con una tecnicatura universitaria en
          programación, donde adquirí una sólida base en desarrollo de software.
          Desde siempre, he sentido un fuerte interés por la escritura, y este
          blog es el espacio donde puedo combinar ambas pasiones. Aquí
          compartiré mi experiencia en el mundo de la programación, así como
          reflexiones sobre este fascinante universo tecnológico en general.
          Estoy dando los primeros pasos en este camino, y me encantaría que me
          acompañaras en esta emocionante travesía. ¡Gracias por visitar mi
          blog!
        </p>
        <div className="mt-3 w-full flex flex-row justify-around">
          <a
            href="https://www.linkedin.com/in/zoe-nazarena-barrios-55119525a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors duration-300"
          >
            <i className="fab fa-linkedin-in text-2xl text-text-secondary hover:text-text transition-all"></i>
          </a>
          <a
            href="https://github.com/ZoeBarrios"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors duration-300"
          >
            <i className="fa-brands fa-github text-2xl text-text-secondary hover:text-text transition-all"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
