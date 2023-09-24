// ReduxSlice.js

import { createSlice } from '@reduxjs/toolkit';

const contatoSlice = createSlice({
  name: 'contatos',
  initialState: {
    listaContato: [],
    contato: {
      nome: '',
      telefone: '',
      email: '',
    },
    editando: false,
    indiceEditando: null,
  },
  reducers: {
    adicionarContato: (state, action) => {
      state.listaContato.push(action.payload);
    },
    excluirContato: (state, action) => {
      state.listaContato.splice(action.payload, 1);
    },
    editarContato: (state, action) => {
      state.contato = state.listaContato[action.payload];
      state.indiceEditando = action.payload;
      state.editando = true;
    },
    salvarEdicao: (state) => {
      if (state.indiceEditando !== null) {
        state.listaContato[state.indiceEditando] = state.contato;
        state.contato = {
          nome: '',
          telefone: '',
          email: '',
        };
        state.indiceEditando = null;
        state.editando = false;
      }
    },
    setContato: (state, action) => {
      state.contato = action.payload;
    },
  },
});

export const {
  adicionarContato,
  excluirContato,
  editarContato,
  salvarEdicao,
  setContato, // Adicionado para corrigir o erro
} = contatoSlice.actions;

export default contatoSlice.reducer;

// ... (resto do código permanece o mesmo)
