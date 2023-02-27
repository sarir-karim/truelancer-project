import Header from "./components/Header/Header";
import Search from "./components/SearchCompo/Search";
import Carousel from './components/HomeCompo/HomeCarousel/Carousel'
import PopAreas from './components/HomeCompo/PopAreas/PopAreas'
import FeaApartment from "./components/HomeCompo/FeaApartment/FeaApartment";
import FeaValls from "./components/HomeCompo/FeaValls/FeaValls";
import Journel from "./components/HomeCompo/Journel/Journel";
import Ofplane from './components/HomeCompo/Of-plan/Ofplan'

function App() {
  return (
    <>
    <Header/>
    <Search/>
    <Carousel/>
    <PopAreas/>
    <FeaApartment/>
    <FeaValls/>
    <Journel/>
    <Ofplane/>
    </>
  );
}

export default App;
