import { useEffect, useState } from "react";

import "./Whywe.css";

function Whywe() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/data/data.json") // JSON faylni o'qish
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="why" id="why">
      <div className="container why__container">
        <h2 className="why__title text-center">Почему мы?</h2>
        <div className="why__box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div className="why__item" key={index}>
              <img src={item.img} alt={item.title} className="why__img" />
              <h3 className="why__subtitle">{item.title}</h3>
              <p className="why__text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Whywe;
