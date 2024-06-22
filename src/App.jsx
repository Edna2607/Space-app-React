import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";


const FondoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);

    width:100%;
    min-height: 100vh;
`

/*Tamaño del container  dependiendo si es para portatil o pantalla de computador mas grande */
const AppContainer = styled.div`
   width: 1280px; /*pantalla de portatil : 1280px / si se tiene un computador mas grande = 1440px */
   max-width: 100%;
   margin: 0 auto;
`

/* la barra lateral y el banner queden juntos*/
const MainContainer = styled.main`
   display: flex;
   gap: 24px;
`

const ContenidoGaleria = styled.section`
   display: flex;
   flex-direction: column; /*para que se posicione uno debajo del otro */
   flex-grow: 1; 
`



const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  const alAlternarFavorito = (foto) => {

 if(foto.id === fotoSeleccionada?.id){
  setFotoSeleccionada({
    ...fotoSeleccionada,
    favorita: !foto.favorita
  })
 }

    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
      }
    }))
  }


  return (
    <>
      <FondoGradiente>
        <GlobalStyles />

        <AppContainer >
          <Cabecera />
          <MainContainer>
            <BarraLateral />

            <ContenidoGaleria>
              <Banner texto="La Galeria más completa de fotos del espacio" backgroundImage={banner} />
              <Galeria alSeleccionarFoto={foto => setFotoSeleccionada(foto)} fotos={fotosDeGaleria} alAlternarFavorito={alAlternarFavorito} />
            </ContenidoGaleria>

          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada} alCerrar={() => setFotoSeleccionada(null)} alAlternarFavorito={alAlternarFavorito} />
      </FondoGradiente >
    </>
  )
}


export default App
