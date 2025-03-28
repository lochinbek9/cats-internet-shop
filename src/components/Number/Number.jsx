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
              </div>
            </div>
        </div>
    </section>
  )
}

export default Number