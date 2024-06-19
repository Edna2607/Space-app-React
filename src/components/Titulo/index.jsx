import styled from "styled-components";


const Titulo = styled.h2`
   font-size: 32px;
   color: #7B78E5;
   text-align: ${props => props.$align ? props.$align : "left"}; /*si recibe una alineacion lo alinea sino por defecto lo ubica a la izquierda */
`

export default Titulo;