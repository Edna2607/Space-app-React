import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tag from "./Tags";


const GaleriaContainer = styled.div`
   display: flex;
`

const SeccionFluida = styled.section`
   flex-grow: 1;
`

const Galeria = () => {
    return (
        <>
            <Tag />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la Galeria</Titulo>

                </SeccionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria;