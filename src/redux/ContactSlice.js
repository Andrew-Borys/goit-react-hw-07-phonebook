import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ],
    filter: '',
  },

  reducers: {
    addItem(state, action) {
      const newContact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };

      state.items.push(newContact);
    },

    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: 'items',
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addItem, deleteItem, changeFilter } = contactsSlice.actions;

// Selectors

export const getFilterContacts = state => state.contacts.filter;
export const getItems = state => state.contacts.items;

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// export const contactsSlice = createSlice({
//   name: 'contacts',

//   initialState: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     ],
//     filter: '',
//   },

//   reducers: {
//     addItem(state, action) {
//       const newContact = {
//         id: nanoid(),
//         name: action.payload.name,
//         number: action.payload.number,
//       };

//       state.items.push(newContact);
//     },

//     deleteItem(state, action) {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },

//     changeFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addItem, deleteItem, changeFilter } = contactsSlice.actions;

// export const getFilterContacts = state => state.contacts.filter;
// export const getItems = state => state.contacts.items;
