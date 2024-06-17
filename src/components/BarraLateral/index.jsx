import styled from "styled-components";


const ListaEstilizada = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none; /*Para que en la lista no nos aparezcan los puntos */
`;

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;