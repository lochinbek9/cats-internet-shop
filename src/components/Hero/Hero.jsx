
import "./Hero.css"

function Hero() {
  return (
    <section id="hero" 
    className="hero bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-24" 
    style={{ backgroundImage: 'url(./img/hero-bg.png)' }}
  >
    <div className="container hero__container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full md:py-[153px] md:pl-[100px] text-center md:text-left">
      <span className="hero__text text-sm sm:text-base md:text-lg font-lato font-normal text-gray-700">Санкт-Петербург</span>
      <h1 className="hero__title text-3xl sm:text-4xl md:text-[62px] font-rubik font-bold text-gray-900 mt-2">Котейка</h1>
      <p className="hero__description text-base sm:text-lg md:text-[20px] font-lato font-medium text-gray-700 max-w-2xl mx-auto md:mx-0 mt-4">
        Уютная гостиница для котов и кошек
      </p>
      <a
        href="#"
        className="hero__button site-btn-white  py-3 px-6 mt-6 inline-flex items-center rounded-lg transition duration-300"
      >
        Забронировать
        <i className="ml-2">
          <img src="./img/paw.png" alt="paw" className="w-5 h-5" />
        </i>
      </a>
    </div>
  </section>
  )
}

export default Hero
