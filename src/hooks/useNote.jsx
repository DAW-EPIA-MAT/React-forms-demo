import { useState } from "react";

export const useNote = (initialValue) => {
  const [note, setNote] = useState(initialValue);

  const handleUpdateNote = (contentNote) => {
    setNote(contentNote);
  };

  return {
    note,
    handleUpdateNote,
  };
};
