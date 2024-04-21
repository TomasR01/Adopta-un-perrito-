import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components.jsx/Header";
import Footer from "./Components.jsx/Footer";
import MyCard from "./Components.jsx/MyCard";

function App() {
  return (
    <>
      <Header title={"Adopta un perrito"} />
      <main className="galeria">
        <MyCard
          imagen="https://pampermut.com/blog/wp-content/uploads/2021/01/Shiba-Inu-1024x682.jpg"
          titulo="Shiro"
          descripcion="Este bello Shiba inu busca un amo que lo consienta y le de croquetitas, le encanta jugar y pasear por el parque."
          colorTag="success"
          textoTag="SHIBA INU"
        />
        <MyCard
          imagen="https://petstable.mx/cdn/shop/articles/Cachorro-husky-siberiano-1_33e7bc9a-7a17-4ea5-82a5-1cabcb8ceb40-141078.jpg?v=1701178089"
          titulo="Kuro"
          descripcion="Este bello cachorro de 7 meses, esta lleno de energia, le gustan los lugares frios, pero cuidado con sus aullidos!."
          colorTag="warning"
          textoTag="HUSKY"
        />
        <MyCard
          imagen="https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/por-que-tu-labrador-solo-piensa-en-comer/5688043-8-esl-MX/Por-que-tu-labrador-solo-piensa-en-comer.jpg"
          titulo="Gojo"
          descripcion="El unico viejito del lugar, es un perro leal, cariñoso y sobre todo protector, necesita que le den cariño por el resto de su vida."
          colorTag="primary"
          textoTag="LABRADOR"
        />
        <MyCard
          imagen="https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/fdecc7f0-42bf-4696-bd4c-73a868e5d1d2/81.jpg"
          titulo="Kiba"
          descripcion="Este Cachorrito de 3 meses busca hogar responsable, a su corta edad demanda demasiado amor, y una piscina a futuro(les encanta el agua)"
          colorTag="danger"
          textoTag="GOLDEN RETRIVER"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
