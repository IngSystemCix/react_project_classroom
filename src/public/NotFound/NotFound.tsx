import './NotFound.css';

export const NotFound = () => {
    return (
        <main>
            <figure>
                <img src="/404.png" alt="error 404"/>
                <figcaption>Página no encontrada</figcaption>
            </figure>
            <a href="/">Regresar a la página principal</a>
        </main>
    );
}