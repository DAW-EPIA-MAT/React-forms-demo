import { useState } from "react";

export const useNotes = (originalNotes, showAll) => {
  const [notes, setNotes] = useState(originalNotes);

  const handleUpdateNotes = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const filteredNotes = (notesCollection, showAll) => {
    return showAll
      ? notesCollection
      : notesCollection.filter((note) => note.important);
  };

  return {
    notes: filteredNotes(notes, showAll),
    handleUpdateNotes,
  };
};
