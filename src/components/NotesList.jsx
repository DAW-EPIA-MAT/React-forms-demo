import { Note } from "./Note";

export const NotesList = ({ notes }) => {
  return (
    <ul className="main__container">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  );
};
