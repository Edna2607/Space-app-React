import styled from "styled-components";


const ItemListaEstilizado = styled.li`
   font-size: 24px; /*Tamaño*/
   margin-bottom: 30px; 
   line-height: 28px; /**/
   display: flex; /*para que los iconos queden alineados al texto en si */
   align-items: center; /*los elementos Al centro*/
   gap: 16px; /*separacion*/
   color: ${props => props.$activo ? "#7B78E5" : "#D9D9D9"}; /*si la prop es true se marca un color y si es false tendrá un color diferente */
   font-family: ${props => props.$activo ? "GandhiSansBold" : "GandhiSansRegular"}; /*si es true cambia a negrita y sino esta normal */
`


const ItemNavegacion = ({children, iconoActivo,iconoInactivo, activo=false}) => {
   return <ItemListaEstilizado $activo={activo}> 
   <img src={activo ? iconoActivo : iconoInactivo} alt="Icono" />
   {children}
   </ItemListaEstilizado >
}

export default ItemNavegacion;