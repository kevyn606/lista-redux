import { ButtonBar } from "./ButonStyles"

function Buton({text,type}) {
    return(
        <ButtonBar type={type}>{text}</ButtonBar>
    )
}

export default Buton