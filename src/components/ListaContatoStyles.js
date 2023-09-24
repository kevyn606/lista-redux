import styled from "styled-components";
import { cores } from "./styles";

export const ListaBar = styled.div`

width:100%;
background-color:${cores.vermelho};
padding:50px;
display:flex;
flex-direction:column;
overflow: auto;

align-items:center;
gap:10px;

ul{
    width:100%;
    color:${cores.vermelho};
    font-size:25px;
    display:flex;
    flex-direction:column;
    gap:15px;

     
}

li{     background-color:${cores.branco};
    padding:10px;
    border-radius:4px;
    width:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        row-gap:20px;

        span{
            font-weight:bold;
        }

    }

button{
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
}

`

export const EditandoBar =styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
form{
    background-color:${cores.laranja};
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