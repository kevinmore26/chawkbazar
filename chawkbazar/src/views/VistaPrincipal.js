import CardsHeader from "../components/CardsHeader";
import CarrouselSecundario from "../components/CarrouselSecundario";
import MyCarousel from "../components/CarrouselSliderItems";
import NavTop from "../components/NavTop"; 
 
export default function VistaPrincipal(){

    return(
        <div>
                <NavTop />
                <CardsHeader/> 
                <MyCarousel/>
        </div>
    )
}