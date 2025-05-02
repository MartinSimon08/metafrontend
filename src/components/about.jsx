import React from "react";
import "./About.css";

//import imgTop from "./media/image1.jpg";
import imgBottom from "./media/image2.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Ubicado en Chicago, Little Lemon es famoso por sus deliciosos platos
          elaborados con ingredientes frescos y locales. Con un ambiente acogedor
          y un servicio atento, es el destino ideal para una cena casual o reuniones
          memorables. Disfruta de la cocina deliciosa y momentos únicos en Little Lemon.
        </p>
      </div>
      <div className="about-images">
        
        <img src={imgBottom} alt="Restaurant interior" className="img img-bottom" />
      </div>
    </section>
  );
};

export default About;
