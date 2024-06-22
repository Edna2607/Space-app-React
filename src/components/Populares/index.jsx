import styled from "styled-components";
import Titulo from "../../Titulo"; 

import fotos from './fotos-populares.json';


const ColumnaFotos = styled.section`
   display: flex;
   flex-direction: column;
   gap: 16px;
`

const Imagen = styled.img`
   max-width: 212px;
   border-radius: 20px;
`

const Boton = styled.button`
   background-color: transparent;
   color: #fff;
   border: 2px solid;
   border-color: #C98CF1;
   padding: 12px 20px;
   font-size: 20px;
`