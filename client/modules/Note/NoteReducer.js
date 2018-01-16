// Import Actions
import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE, EDIT_NOTE, CREATE_NOTES } from './NoteActions';

import omit from 'lodash/omit';

// Initial State
// const initialState = [];
const initialState = {};

export default function notes(state = initialState, action) {  
  switch (action.type) {
    case CREATE_NOTE:
    case UPDATE_NOTE:
      // return [...state, action.note];
      return { ...state, [action.note.id]: action.note };

    // case UPDATE_NOTE:
      // return state.map(note => {
      //   return note.id === action.note.id ? { ...note, ...action.note } : note;
      // });

      // return { ...state, [action.note.id]: action.note }

    case DELETE_NOTE:
      // return state.filter((note) => note.id !== action.noteId);
      return omit(state, action.noteId);

    case EDIT_NOTE:
      // return state.map(note => note.id === action.noteId ? { ...note, editing: true } : note); 
      {
        const note = { ...state[action.id], editing: true };
      return { ...state, [action.id]: note };
      }
    
    case CREATE_NOTES:
      return { ...action.notes };

    default:
      return state;
  }
};

// export default NoteReducer;
// export default notes;
