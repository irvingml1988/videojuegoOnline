import kratoslogo from './images/kratos.png';

function Inicio() {
    return (
        <section id="inicio">
          <h2>Inicio</h2>
          <p className='centerText'>
            <h1>¡Bienvenido a Kratos's Games - Tu Paraíso Gamer Online!</h1>
          </p>
          <div className='center-image'>
            <img src={kratoslogo} alt='kratos' />
          </div>
          <p className='justifyText'> ¡Hola! Nos alegra mucho verte por aquí. En Kratos's Games, vivimos y respiramos videojuegos. Nuestra misión es ofrecerte la mejor experiencia de compra en línea para que encuentres todo lo que necesitas para tu pasión gamer, desde los últimos lanzamientos hasta esos clásicos que nunca pasan de moda. </p>
          <p className='centerText'>
            <h2>¿Qué puedes esperar de nosotros?</h2>
          </p>
          <ul>
            <li><b>Juegos para todos los gustos</b>: Ya seas fanático de los RPG, los shooters, los juegos de deportes o los indies, tenemos algo para ti.</li> <li><b>Accesorios y hardware</b>: Mejora tu setup con nuestra amplia selección de consolas, controladores, auriculares y más.</li>
            <li><b>Ofertas exclusivas</b>: Descubre descuentos y promociones que solo encontrarás aquí.</li>
            <li><b>Contenido y comunidad</b>: Mantente al día con las últimas noticias del mundo gamer y conecta con otros jugadores apasionados como tú.</li>
          </ul>
          <p className='centerText'> <b>¡Explora nuestro catálogo y comienza tu aventura gaming hoy mismo!</b> </p>
        </section>
    );
}
export default Inicio