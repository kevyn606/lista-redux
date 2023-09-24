
import { configureStore } from '@reduxjs/toolkit';
import contatoReducer from './reducers/contato'


 const store = configureStore({
  reducer: {
    contato: contatoReducer,
    
  },
});

export default store


