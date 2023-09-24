import styled from "styled-components";
import { cores } from "./styles";

export const ContatoBar = styled.div`
width: 100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:7px;

h2{
    color:${cores.vermelho};
    font-weight:bold;
    font-size:30px;
}
    
form{
    background-color:${cores.vermelho};
    width:400px;
    height:400px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:4px;
    gap:15px;
}   

input{
    padding:20px;
    border:none;
    border-radius:4px;
    font-size:20px;

}
`