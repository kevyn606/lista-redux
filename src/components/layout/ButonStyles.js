import styled from "styled-components";
import { cores } from "../styles";

export const ButtonBar = styled.button`
 padding:10px;
 background-color:${cores.branco};
 color:${cores.vermelho};
 font-size:20px;
 font-weight:bold;
 border:none;
 border-radius:4px;

 &:hover{
    background-color:${cores.laranja};
 color:${cores.vermelho};
 }
 
 
`