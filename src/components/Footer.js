import React from "react";
import small_logo from "../images/Logo .svg";

const Footer = () => {
    return (
        <footer className="">
            <section>
                <div className="company-info">
                    <img src={small_logo} alt="" />
                    <p>Somos un restaurante mediterráneo de gestión familiar, enfocado en recetas tradicionales servidas con un toque moderno.</p>
                </div>
                <div>
                    <h3>Enlaces importantes</h3>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/">Sobre nosotros</a></li>
                        <li><a href="/">Menú</a></li>
                        <li><a href="/">Reservas</a></li>
                        <li><a href="/">Pedir en línea</a></li>
                        <li><a href="/">Iniciar sesión</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contacto</h3>
                    <ul>
                        <li>Dirección: <br /> 123 Calle Principal, Chicago</li>
                        <li>Teléfono: <br /> +00 123 456 789</li>
                        <li>Email: <br /> little@lemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Redes sociales</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
