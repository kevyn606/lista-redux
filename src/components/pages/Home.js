import { useState } from "react";
import {HomeBar} from './HomeStyles'

import ContatoForm from "../ContatoForm";
import ListaContato from "../ListaContato";



function Home (){
    const[contato, setContato]= useState ({
        nome:'',
        telefone:'',
        email:'',
    });
    const[listaContato, setListaContato] = useState([])
    const [editando, setEditando] = useState(false);
    const [indiceEditando, setIndiceEditando] = useState(null);

    function addListaDeContato(e){
        e.preventDefault();
        setListaContato([...listaContato,contato]);
        setContato({ nome: '', telefone: '', email: '' });

        alert('contato adicionado')
    }
    function ExcluirContato(index) {
        const novaLista = [...listaContato];
        novaLista.splice(index, 1);
        setListaContato(novaLista);
      }

      function EditarContato(index) {
        const contatoSelecionado = listaContato[index];
        setContato(contatoSelecionado);
        setIndiceEditando(index); 
        setEditando(true);
      }

      function SalvarEdicao() {
        
        if (indiceEditando !== null) {
            
            const novaLista = [...listaContato];
            
            novaLista[indiceEditando] = contato;
            
            setListaContato(novaLista);
            
            setContato({ nome: "", telefone: "", email: "" });
            
            setIndiceEditando(null);
            setEditando(false);
          }
      }
    

    
    return(
        <HomeBar>
            <ContatoForm setContato={setContato}  contato={contato} addListaDeContato={addListaDeContato}/>
            <ListaContato listaContato={listaContato} contato={contato} ExcluirContato={ExcluirContato} EditarContato={EditarContato} SalvarEdicao={SalvarEdicao} setContato={setContato} editando={editando} />
        </HomeBar>
    )
}

export default Home