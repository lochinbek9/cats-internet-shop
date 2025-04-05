import Slider from "../Swiper/Slider"
import "./Number.css"

function Number() {
  return (
    <section className="number">
        <div className="container">
            <h2 className="number__title">Номера</h2>
            <div className="number__block">
            <Slider className="slider" apiUrl="../data/slides.json" />
              <div className="number__right">
                <h3 className="number__right__title">Эконом плюс</h3>

                <ul className="number__right__list">
                  <li className="number__right__list__item">
                    <span className="number__right__list__item__title">Площадь - </span>
                    <span className="number__right__list__item__text"> 0,90 м2</span>
                  </li>
                  <li className="number__right__list__item">
                    <span className="number__right__list__item__title">Размеры (ШхГхВ) - </span>
                    <span className="number__right__list__item__text">90х100х180 см</span>
                  </li>
                  <li className="number__right__list__item">
                    <span className="number__right__list__item__title">Цена:</span>
                    <span className="number__right__list__item__text">от 2000 ₽</span>
                  </li>
                </ul>

                <a href="#" className="site-btn number__btn">Забронировать 
                  <img src="./img/paw.svg" alt="" /></a>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Number