import { Card, Counter, ToggleTheme } from '../../components';
import { ThemeProvider } from '../../context';
import './Home.css';

export const Home = () => {
    return (
        <main>
            <h1>Inicio</h1>
            <div className='container__card'>
                <Card title='Aquí el componente 01' subtitle='Componente 01' />
                <Card title='Aquí el componente 02' subtitle='Lista de sedes' listItems={['Chiclayo', 'Lima', 'Arequipa']} />
                <Card title='Navegación por link'>
                    <a href='/home'>Inicio</a>
                    <a href='/contact'>Contacto</a>
                    <a href='/about'>Acerca de</a>
                </Card>
                <Card title='Uso de Hooks'>
                    <Counter />
                </Card>
                <Card title='Custom Hook'>
                    <ThemeProvider>
                        <div>
                        <h3>Ejemplo de Hooks en React</h3>
                        <ToggleTheme />
                        </div>
                    </ThemeProvider>
                </Card>
            </div>
        </main>
    );
}