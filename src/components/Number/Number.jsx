import Slider from "../Swiper/Slider"
import "./Number.css"

function Number() {
  return (
    <section className="number">
        <div className="container">
            <Slider apiUrl="/data/slides.json"/>
        </div>
    </section>
  )
}

export default Number