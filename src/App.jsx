import { Form, MainHeader, NotesList, ToggleButton } from "./components";
import { notes as originalNotes } from "./data/notes";
import { useNote, useNotes, useShowAll } from "./hooks";

const App = () => {
  const { showAll, handleToggleImportant } = useShowAll();
  const { notes, handleUpdateNotes } = useNotes(originalNotes, showAll);
  const { note, handleUpdateNote } = useNote("");

  return (
    <div className="wrapper">
      <MainHeader text="Notes" />
      <div className="main">
        <div className="section main__container">
          <ToggleButton
            handleToggleImportant={handleToggleImportant}
            showAll={showAll}
          />
          <NotesList notes={notes} />
        </div>
        <div className="main__container">
          <Form
            handleUpdateNote={handleUpdateNote}
            handleUpdateNotes={handleUpdateNotes}
            note={note}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
