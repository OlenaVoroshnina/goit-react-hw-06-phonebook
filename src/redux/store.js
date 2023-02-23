import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer} from './contactsSlice'
import { filterReducer } from './filterSlice';

//збереження в локал сторедж окремо
// const persistConfig = {
//   key: 'friends',
//   version: 1,
//   storage,
// };

// const filterPersistConfig = {
//   key: 'filter',
//   version: 1,
//   storage,
// };

// const persistedFriendReducer = persistReducer(persistConfig, friendReducer);
// const filterPersistedReducer = persistReducer(
//   filterPersistConfig,
//   filterReducer
// );

//збереження в локал сторедж одним об'єктом
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: {
  //   friends: persistedFriendReducer,
  //   filter: filterReducer,
  // },
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);