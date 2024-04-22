export default function Footer() {
  return (
    <footer className="font-bold text-text-secondary bg-secondary shadow-lg flex flex-row justify-between items-center p-4">
      <span>&copy; Zoe Barrios 2024</span>
      <div className="flex flex-col items-center text-text-secondary">
        <a
          href="https://www.linkedin.com/in/zoe-nazarena-barrios-55119525a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text transition-colors duration-300"
        >
          <i className="fab fa-linkedin-in text-xl mr-2"></i>LinkedIn
        </a>
        <a
          href="https://portfolio-zoebarrios.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text transition-colors duration-300"
        >
          <i className="fas fa-briefcase text-lg mr-2"></i>Portfolio
        </a>
      </div>
    </footer>
  );
}
