


 /*La propiedad de open hace que el dialogo este abierto y permanezca abierto */

const ModalZoom = ({foto}) =>{
  return <>
    <dialog open={!!foto}>
        <p>Greeting, one and all!</p>
        <form method="dialog">
            <button>OK</button>
        </form>
    </dialog>
  </>
}

export default ModalZoom;