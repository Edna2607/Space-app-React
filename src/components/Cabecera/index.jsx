import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
   padding: 60px 0;
   display: flex;
   justify-content: space-between;
   /*Dentro de este componente estilizado podemos llamar una etiqueta img y todas las imagenes que estén dentro de esta etiqueta en el Header van a tener estos estilos*/
   img{
     width: 212px;
   }
`


const Cabecera = ({setConsulta}) => {
  return <HeaderEstilizado>
    <img src="img/logo.png" alt="" />
    <CampoTexto setConsulta={setConsulta}/>
  </HeaderEstilizado>
}

export default Cabecera