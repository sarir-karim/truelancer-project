import Header from "./components/Header/Header";
import Search from "./components/SearchCompo/Search";
import Carousel from './components/HomeCompo/HomeCarousel/Carousel'
import FeaAreas from './components/HomeCompo/FeaAreas/FeaAreas'
import FeaApartment from "./components/HomeCompo/FeaApartment/FeaApartment";
import FeaValls from "./components/HomeCompo/FeaValls/FeaValls";
import Journel from "./components/HomeCompo/Journel/Journel";
import Ofplane from './components/HomeCompo/Of-plan/Ofplan'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Header/>
    <Search/>
    <Carousel/>
    <FeaAreas/>
    <FeaApartment/>
    <FeaValls/>
    <Journel/>
    <Ofplane/>
    <Footer/>

    {/* <CarouselItem/> */}
    </>
  );
}

export default App;
