import Buton from "./layout/Buttons"
import { ContatoBar } from "./ContatoFormStyles"

function ContatoForm({setContato,contato,addListaDeContato}){
    return(
        <ContatoBar>
          <h2>Novo Contato</h2>
        <form onSubmit={addListaDeContato}>
      <input
      required
        type="text"
        placeholder="Nome"
        value={contato.nome}
        onChange={(e) => setContato({ ...contato, nome: e.target.value })}
      />
      <input
      required
        type="number"
        placeholder="Telefone"
        value={contato.telefone}
        onChange={(e) => setContato({ ...contato, telefone: e.target.value })}
      />
      <input
      required
        type="email"
        placeholder="Email"
        value={contato.email}
        onChange={(e) => setContato({ ...contato, email: e.target.value })}
      />
      <Buton type="submit" text="ADICIONAR"/>
    </form>
    
    </ContatoBar>
    )
}

export default ContatoForm