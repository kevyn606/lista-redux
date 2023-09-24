import { ListaBar,EditandoBar } from "./ListaContatoStyles"


function ListaContato({listaContato, contato,ExcluirContato,EditarContato,SalvarEdicao,setContato,editando}){
    return(
        <ListaBar>
            <ul>
                {listaContato.map((contato, index) => (
                    <li key={index}>
                        <p><span>NOME:</span> {contato.nome}</p>
                        <p><span>TELEFONE:</span> {contato.telefone}</p>
                        <p><span>EMAIL:</span> {contato.email}</p>
                        
                        <div><button onClick={()=> EditarContato(index) }>EDITAR</button>
                        <button onClick={()=> ExcluirContato(index) }>X</button>
                        
                        </div>
                    </li>
                ))}
            </ul>
            <EditandoBar>{editando && (
        <div>
          <h2>Editar Contato</h2>
          <form>
            <input
              type="text"
              placeholder="Nome"
              value={contato.nome}
              onChange={(e) => setContato({ ...contato, nome: e.target.value })}
            />
            <input
              type="text"
              placeholder="Telefone"
              value={contato.telefone}
              onChange={(e) => setContato({ ...contato, telefone: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={contato.email}
              onChange={(e) => setContato({ ...contato, email: e.target.value })}
            />
            <button type="button" onClick={SalvarEdicao}>
              Salvar
            </button>
          </form>
        </div>
      )}</EditandoBar>
        </ListaBar>
    )

}

export default ListaContato