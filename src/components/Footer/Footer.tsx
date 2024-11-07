import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <div>
                <h1>Politicas</h1>
                <p>Terminos y condiciones</p>
                <p>Politicas de privacidad</p>
            </div>
            <div>
                <h1>Redes sociales</h1>
                <p style={{cursor: 'pointer'}}><i className="bi bi-facebook"></i>Facebook</p>
                <p style={{cursor: 'pointer'}}><i className="bi bi-instagram"></i>Instagram</p>
                <p style={{cursor: 'pointer'}}><i className="bi bi-twitter-x"></i>Twitter</p>
            </div>
            <div>
                <h1>Contacto</h1>
                <p>
                    <a href='mailto:juanromerocollazos@gmail.com'>juanromerocollazos@gmail.com</a>
                </p>
                <p>
                    <a href='tel:+51999999999'>999999999</a>
                </p>
            </div>
        </footer>
    );
}