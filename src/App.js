import "bootstrap/dist/css/bootstrap.css";
import Agregar2 from "./Componentes/Agregar2";
import ListarRecetetas from "./Componentes/ListarRecetas";
import Buscar from "./Componentes/Buscar";
import { useEffect, useState } from "react";
function App() {
  const [datos, setDatos] = useState([]);
  return (
    <>
      <body>
        <nav>
          <h1 className="site-heading text-center text-faded d-none d-lg-block">
            <span className="site-heading-upper  mb-3">
              Las mejores Recetas de Doña Lola
            </span>
            <span className="site-heading-lower">
              Bienvenidos a tus recetas favoritas
            </span>
          </h1>
        </nav>

        <section className="page-section about-heading">
          <div className="container">
            <img
              className="img-fluid rounded about-heading-img mb-4 mb-0"
              srcSet="img/cheff.jpg"
              alt="..."
            />
            <div className="about-heading-content">
              <div className="row">
                <div className="col-xl-9 col-lg-10 mx-auto">
                  <div className="bg-faded rounded p-5">
                    <h2 className="section-heading mb-4">
                      <span className="section-heading-upper">Quienes</span>
                      <span className="section-heading-lower">
                        Que tipo de resetas puedes agregar?
                      </span>
                    </h2>
                    <p>
                      En este apartado, puedes agregar cualquier reseta de tu
                      agrado, para que puedas compartir con los demas las
                      diferentes recetas de cada platillo y puedas comparar con
                      otros
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Agregar2 datos={datos} setDatos={setDatos} />
        <Buscar datos={datos} setDatos={setDatos} />
        <ListarRecetetas datos={datos} setDatos={setDatos} />

        <footer className="footer text-faded text-center py-5">
          <div className="container">
            <p className="m-0 small">Miranda&copy; Pagina web hecha en 2023</p>
          </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </>
  );
}

export default App;
