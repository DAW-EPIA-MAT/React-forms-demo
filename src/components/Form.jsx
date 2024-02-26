export const Form = ({ handleUpdateNote, handleUpdateNotes, note }) => {
  const addNewNote = (event) => {
    event.preventDefault();

    const newNote = {
      id: Date.now(),
      content: note,
      important: Math.random() < 0.5,
    };

    handleUpdateNotes(newNote);
    handleUpdateNote("");
  };

  const handleChangeNewNote = (event) => {
    const { target } = event;
    handleUpdateNote(target.value);
  };

  return (
    <form className="form" onSubmit={addNewNote}>
      <label htmlFor="new-note">New note</label>
      <textarea
        id="new-note"
        value={note}
        onChange={handleChangeNewNote}
        required
      />
      <button className="button submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};
