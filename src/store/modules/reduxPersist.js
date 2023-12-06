import storage from 'redux-persist/lib/storage'; // Vai salvar no localStorage mesmo

import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: 'NOME-DA-APLICAÇÃO',
      storage,
      whitelist: [], // chaves que não queremos guardar
    },
    reducers
  );

  return persistReducers;
};
