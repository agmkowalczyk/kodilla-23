import React, { PropTypes } from 'react';
import Note from './Note';
import Edit from '../../components/Edit';

import styles from './Note.css';

const Notes = ({ notes, laneId, editNote, onUpdate, deleteNote, updateNote}) => {
  return (<ul className={styles.Notes}>{notes.map((note) =>
    <Note
      id={note.id}
      key={note.id}
      // editing={note.editing}
    >
      <Edit
        editing={note.editing}
        value={note.task}
        onValueClick={() => editNote(note.id)}
        onUpdate={(task) => updateNote({
            ...note,
            task,
            editing: false,
          }
        )}
        onDelete={() => deleteNote(note.id, laneId)}
      />
    </Note>
  )}</ul>);
};

Notes.propTypes = {
  notes: PropTypes.array,
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  onUpdate: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
};

export default Notes;