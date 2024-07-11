import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';


function App() {
  let data = [
    {
      id: 1,
      title: "Paradise",
      body: "Verde y Blanco, imagen realizada con Midjourney AI generativa",
      imageUrl: "https://cdn.midjourney.com/c590121c-4a04-4954-bf1c-217fc345af8d/0_2.jpeg"
    },
    {
      id: 2,
      title: "Tailandia",
      body: "La gringa posando en Tailandia, Imagen creada con AI Generativa",
      imageUrl: "https://cdn.midjourney.com/28ca1e15-d365-4382-a179-ec62ed838417/0_1.jpeg"
    },
    {
      id: 3,
      title: "Rojo Cafe",
      body: "Peliroja posando con cafe en una ciudad, imagen creada con AI Generativa.",
      imageUrl: "https://cdn.midjourney.com/45f64508-50d6-48e8-962e-cea279e929c8/0_1.jpeg"
    },
    {
      id: 4,
      title: "El Principito",
      body: "Cómo sería el principito en la vida real, imagen generada por AI Generativa.",
      imageUrl: "https://cdn.midjourney.com/fef1e645-71d4-4226-a3b4-999a63393e38/0_3.jpeg"
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <Jumbotron welcome="Holanda que Talca!" text="Estas fotos fueron creadas por MidJourney, IA Generativa para crear imagenes" button="Vamos!"/>
        </div>
        <div className='row'>
          {data.map((item) => {
            return (
              <div className="col-3" key={item.id + item.title}>
                <Card title={item.title} text={item.body} image={item.imageUrl} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;